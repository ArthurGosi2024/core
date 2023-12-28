/** @format */

import { IDerrefals } from "../@types/IConnect";

import { ConfigBase } from "./config/config";
import { BaseUtils } from "./utils/util";
import sPlayer from "../player/model/player";
import { connectDatabase } from "./database";
import { PlayerController } from "../use-cases/user/controller";


connectDatabase();

on(
     "playerConnecting",
     async (name: string, reason: string, deferrals: IDerrefals) => {
          const playerId = source;

          if (playerId > 0 && playerId !== undefined) {
               deferrals.update("Carregando usuario...");
               const identifier = getPlayerIdentifiers(playerId);

               const identification: string = BaseUtils.splitString(identifier, `${ConfigBase["administrator"]["identification"]}:`);

               if (!identification.length) deferrals.done(ConfigBase["administrator"]["notFoundIdentification"]);

               const repository = new PlayerController();
               const findPlayer = await repository.findPlayer(identification);



        
               if (!findPlayer) {
                    await repository.createPlayer({
                         ...ConfigBase["administrator"]["defaultPlayerData"],
                         license: identification,
                         name: name,
                    });
                    deferrals.update(ConfigBase["administrator"]["noticeOfReconnect"]);
               } else {
                    new sPlayer({ bank: findPlayer.bank, cash: findPlayer.cash, license: findPlayer.license, name: name, playerId: playerId, surname: "", user_id: findPlayer?._id })
                    deferrals.done();
               }
               emit("core:addCommands", playerId, "Admin")

          } else {
               deferrals.done(ConfigBase["administrator"]["integrityNotice"]);
          }
     }
);
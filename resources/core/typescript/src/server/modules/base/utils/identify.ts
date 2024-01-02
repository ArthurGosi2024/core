import { PlayerController } from "@server/modules/use-cases/user/controller";
import { ConfigBase } from "../config/config";
import { BaseUtils } from "./util";
import { IPlayer } from "@server/modules/@types/IPlayer";



export class IdentifyUtils extends BaseUtils {



     public static async getIndentify(source: number): Promise<IPlayer> {
          const identifier = getPlayerIdentifiers(source);
          const identification: string = BaseUtils.splitString(identifier, `${ConfigBase["administrator"]["identification"]}:`);
          const repository = new PlayerController();
          const findPlayer = await repository.findPlayer(identification);
          return findPlayer 
     }
}
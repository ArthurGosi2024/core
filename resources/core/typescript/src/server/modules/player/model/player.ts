/** @format */

import { IPlayer, IPlayerServer } from "../../../modules/@types/IPlayer";

const Users: IPlayerServer[] = []

class sPlayer implements IPlayerServer {
     readonly user_id: string;
     readonly license: string;
     cash: number;
     bank: number;
     name?: string;
     surname?: string;
     playerId?: number;

     constructor({ playerId = 0, bank = 20, cash = 10, license = "", name = "", surname = "", user_id = '0' }: IPlayer) {

          const findPlayer: number = Users.findIndex(u => u.playerId === playerId);

          console.log(findPlayer);

          if (findPlayer == -1) {
               this.license = license;
               this.cash = cash;
               this.bank = bank;
               this.name = name;
               this.surname = surname;
               this.user_id = user_id;
               this.playerId = playerId;
               Users.push({ ...this })
               console.log(JSON.stringify(Users));

          } else {
               Users[findPlayer] = { ...Users[findPlayer], playerId: playerId }
          }
     }

     static identify(playerId: number): IPlayer | String {
          const filterPlayer = Users.find(user => user?.playerId === playerId);
          return filterPlayer ?? "Dados não encontrado"
     }

     static getUserId(playerId: number): String {
          const { user_id } = Users.find(user => user?.playerId === playerId);

          return user_id ?? "Usuario não encontrado."
     }

     static getUserName(playerId: number): String {
          const { name, surname } = Users.find(user => user?.playerId === playerId);
          return `${name} ${surname}`
     }

     static getUserSource(playerSource: number): number | string {
          const { playerId } = Users.find(user => user?.playerId === playerSource);
          return playerId ?? "Player offline"
     }

     static getUserLicense(playerSource: number): String {
          const { license } = Users.find(user => user?.playerId === playerSource);
          return license
     }

     static getUserBank(playerSource: number): number | string {
          const { bank } = Users.find(user => user?.playerId === playerSource);
          return bank ?? "Dinheiro bancario não encontrado"
     }

     static getUserCash(playerSource: number): number | string {
          const { cash } = Users.find(user => user?.playerId === playerSource);
          return cash ?? "Dinheiro não encontrado"
     }
}

export default sPlayer;
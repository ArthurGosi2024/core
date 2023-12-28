/** @format */

import { playerSchema } from "./model";
import { GenericsRepository } from "../../generics/repositories";
import { IPlayer } from "@server/modules/@types/IPlayer";


export class PlayerRepository extends GenericsRepository<IPlayer> {

     constructor() {
          super("Player", playerSchema)
     }

     async createRepositoriesPlayer(player: IPlayer) {
          await super.createRepositoriesAtributes<IPlayer>({ ...player })
     }

     async findRepositoriesPlayer(license: string): Promise<IPlayer> {
          return await super.findRepositoriesAtributes<IPlayer>({ license: license })
     }

     async deleteRepositoriesPlayer({ user_id }: IPlayer): Promise<Boolean> {
          return await super.deleteRepositoriesAtributes<IPlayer>({ user_id })
     }
}
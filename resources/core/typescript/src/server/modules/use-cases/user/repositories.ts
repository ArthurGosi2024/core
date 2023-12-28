/** @format */

import { playerSchema } from "./model";
import { GenericsRepository } from "../../generics/repositories";
import { IPlayer } from "@server/modules/@types/IPlayer";


export class PlayerRepository extends GenericsRepository<IPlayer> {
     constructor() {
          super("Player", playerSchema)
     }
}
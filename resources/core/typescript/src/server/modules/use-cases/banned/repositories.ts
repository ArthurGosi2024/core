/** @format */

import { IBanneds } from "@server/modules/@types/IBanneds";
import { GenericsRepository } from "../../generics/repositories";
import { bannedSchema } from "./model";


export class BannedRepository extends GenericsRepository<IBanneds> {
     constructor() {
          super("Banned", bannedSchema)
     }
}



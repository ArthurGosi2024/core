/** @format */

import { IBanneds } from "@server/modules/@types/IBanneds";
import { GenericsRepository } from "../../generics/repositories";
import { bannedSchema } from "./model";


export class BannedRepository extends GenericsRepository<IBanneds> {

     constructor() {
          super("Banned", bannedSchema)
     }

     async createRepositoriesBanned(banned: IBanneds) {
          await super.createRepositoriesAtributes({ ...banned })
     }
     async findRepositoriesBanned({ id }: IBanneds): Promise<IBanneds> {
          return await super.findRepositoriesAtributes<IBanneds>({ id })
     }

     async deleteRepositoriesBanned({ id }: IBanneds): Promise<Boolean> {
          return await super.deleteRepositoriesAtributes<IBanneds>({ id })
     }
}



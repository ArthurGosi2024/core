/** @format */

import { ISpwans } from "@server/modules/@types/ISpwans";
import { GenericsRepository } from "../../generics/repositories";
import { spwanSchema } from "./model";


export class SpwanRepository extends GenericsRepository<ISpwans> {
     constructor() {
          super("Spwan", spwanSchema)
     }
}



/** @format */

import { IPermissions } from "@server/modules/@types/IPermissions";
import { GenericsRepository } from "../../generics/repositories";
import { permissionSchema } from "./model";


export class PermissionRepository extends GenericsRepository<IPermissions> {
     constructor() {
          super("Permission", permissionSchema)
     }
}



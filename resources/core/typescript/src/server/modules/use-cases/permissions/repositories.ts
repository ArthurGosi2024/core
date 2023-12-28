/** @format */

import { IPermissions } from "@server/modules/@types/IPermissions";
import { GenericsRepository } from "../../generics/repositories";
import { permissionSchema } from "./model";


export class PermissionRepository extends GenericsRepository<IPermissions> {

     constructor() {
          super("Permission", permissionSchema)
     }

     async createRepositoriesPermission({ ...rest }: IPermissions) {
          await super.createRepositoriesAtributes(rest)
     }

     async findRepositoriesPermission({ ...rest }: IPermissions): Promise<IPermissions> {
          return await super.findRepositoriesAtributes<IPermissions>(rest)
     }

     async updateRepositoriesPermission({ id }: IPermissions, newGroup: string) {
          await super.updateRepositoriesAtributes<IPermissions>({ id: id }, { id: id, group: newGroup })
     }

     async deleteRepositoriesPermission({ id }: IPermissions): Promise<Boolean> {
          return await super.deleteRepositoriesAtributes<IPermissions>({ id })
     }
}



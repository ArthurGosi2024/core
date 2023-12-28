import { IPermissions } from "@server/modules/@types/IPermissions";
import { PermissionRepository } from "./repositories";

export class PermissionController {
     private permissionModel: PermissionRepository;

     constructor() {
          this.permissionModel = new PermissionRepository();
     }

     public async createPermission({ id, group }: IPermissions): Promise<Boolean> {
          const findNewPermission = await this.permissionModel.findRepositoriesAtributes<IPermissions>({ id: id });
          
          if (findNewPermission && findNewPermission.group === group) {
               return false
          }
          await this.permissionModel.createRepositoriesAtributes({ id, group })
          return true
     }

     public async findPermission({ ...rest }: IPermissions): Promise<IPermissions> | undefined {
          const findPermission = await this.permissionModel.findRepositoriesAtributes<IPermissions>(rest);
          return findPermission ?? undefined;
     }

     public async updatePermission({ ...rest }: IPermissions, newPermission: IPermissions): Promise<Boolean> {
          const findPermission = await this.permissionModel.findRepositoriesAtributes<IPermissions>(rest);
          if (findPermission.id) {
               await this.permissionModel.updateRepositoriesAtributes<IPermissions>(rest, newPermission)
               return true;
          }
          return false;
     }

     public async deletePermission({ id }: IPermissions): Promise<Boolean> {
          return await this.permissionModel.deleteRepositoriesAtributes<IPermissions>({ id })
     }
}

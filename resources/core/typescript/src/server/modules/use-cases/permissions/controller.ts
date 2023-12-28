import { IPermissions } from "@server/modules/@types/IPermissions";
import { PermissionRepository } from "./repositories";

export class PermissionController {
     private permissionModel: PermissionRepository;

     constructor() {
          this.permissionModel = new PermissionRepository();
     }

     public async createPermission({ id, group }: IPermissions): Promise<Boolean> {
          const findNewPermission = await this.permissionModel.findRepositoriesPermission({ id: id });

          console.log(findNewPermission && findNewPermission.group === group);
          
          if (findNewPermission && findNewPermission.group === group) {
               return false
          }
          await this.permissionModel.createRepositoriesPermission({ id, group })
          return true
     }

     public async findPermission({ ...rest }: IPermissions): Promise<IPermissions> | undefined {
          const findPermission = await this.permissionModel.findRepositoriesPermission(rest);
          return findPermission ?? undefined;
     }

     public async updatePermission({ ...rest }: IPermissions, newPermission: string): Promise<Boolean> {
          const findPermission = await this.permissionModel.findRepositoriesPermission(rest);
          if (findPermission.id) {
               await this.permissionModel.updateRepositoriesPermission(rest, newPermission)
               return true;
          }
          return false;
     }

     public async deletePermission({ id }: IPermissions): Promise<Boolean> {
          return await this.permissionModel.deleteRepositoriesPermission({ id })
     }
}

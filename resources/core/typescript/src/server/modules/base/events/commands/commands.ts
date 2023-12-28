import sPlayer from "@server/modules/player/model/player";
import { PermissionController } from "@server/modules/use-cases/permissions/controller";
import { ConfigBase, commands } from "../../config/config";
import { BaseUtils } from "../../utils/util";




const configCommands = [
     {
          name: "nc",
          function: (source: number, args: string[]) => {
               console.log("Voce deu o comando nc");
          },
     }
]


on("core:comands", async (source: number) => {
     const user_id = sPlayer.getUserId(source);
     const { findPermission } = new PermissionController()

     const { group } = await findPermission({ id: user_id })

     if (group) {
          const getAllPermissions = BaseUtils.getAllCommands(commands, group)
          getAllPermissions.map((value: string, _: number) => {
               const findIndexFunction = configCommands.findIndex(({ name }) => name === value)
               RegisterCommand(configCommands[findIndexFunction]["name"], (source: number, args: string[], rawCommand: any) => {
                    configCommands[findIndexFunction]["function"](source, args)
               }, false)
          })
     }
})


on("core:addCommands", async (source: number, permission: string) => {
     const user_id = sPlayer.getUserId(source);
     const permissionController = new PermissionController()
     const createPerm = await permissionController.createPermission({ id: user_id, group: permission })
     if (!createPerm) {
          console.log(`${ConfigBase["administrator"]["baseName"]} informa que o usuario ja possui esta permissão`)
          return
     }
})
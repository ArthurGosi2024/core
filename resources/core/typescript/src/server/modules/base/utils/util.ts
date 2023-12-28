import { ICommands } from "@server/modules/@types/ICommands";


export class BaseUtils {

     public static getAllCommands(groups: ICommands[], user_group: String): String[] {
          const filterGroups: string[] = []
          const indexGroup: number = groups.findIndex(({ permission }) => permission === user_group)
          if (indexGroup !== -1) {
               filterGroups.push(...groups[indexGroup].commands)
          }
          const indexExtendGroups: number = groups.findIndex(({ extendsCommands }) => groups[indexGroup]["extendsCommands"] === extendsCommands)
          if (indexExtendGroups !== -1) {
               filterGroups.push(...groups[indexExtendGroups].commands)
          }

          return filterGroups
     }

     public static splitString(str: string[], splitParams: string) {
          return str.find((value) => value.startsWith(splitParams) && value.split(splitParams)[1]);
     }
}
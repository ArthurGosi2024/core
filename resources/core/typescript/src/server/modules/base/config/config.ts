/** @format */

import { ICommands } from "@server/modules/@types/ICommands";
import { IPlayer } from "@server/modules/@types/IPlayer";



export interface IDefaultPlayer extends Pick<IPlayer, "bank" | "cash"> { }

export const ConfigBase: {

     [key: string]: {
          notFoundIdentification: string;
          noticeOfReconnect: string;
          integrityNotice: string;
          defaultPlayerData: IDefaultPlayer
          identification: "discord" | "steam",
          baseName: string
     }

} = {
     administrator: {
          ["notFoundIdentification"]: "Problemas com a conexão do player, por favor reinicie seu discord ou seu computador",
          ["noticeOfReconnect"]: "Reconecte para logar...",
          ["integrityNotice"]: "Problemas com a sua identificação, por favor verifique suas integridades...",
          ["identification"]: "discord",
          ["defaultPlayerData"]: {
               bank: 2500,
               cash: 10000
          },
          ["baseName"]: "[Aqua_Network]:"
     },
};


export const commands: ICommands[] = [
     {
          permission: "Admin",
          extendsCommands: "Support",
          commands: ["nc", "ban", "unban", "group"]
     },
     {
          permission: 'Support',
          extendsCommands: "Admin",
          commands: ["tpto", "tpway"]
     }
]

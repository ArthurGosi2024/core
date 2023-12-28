import { IPermissions } from "@server/modules/@types/IPermissions";
import { Schema, model } from "mongoose";

export const permissionSchema = new Schema<IPermissions>({
     id: {
          type: String, required: true
     },
     group: {
          type: String, required: false,
     }
});

export const PermissionsModel = model<IPermissions>("Permissions", permissionSchema);

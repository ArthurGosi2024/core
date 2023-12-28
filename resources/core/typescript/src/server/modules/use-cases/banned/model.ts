import { IBanneds } from "@server/modules/@types/IBanneds";
import { Schema, model } from "mongoose";

export const bannedSchema = new Schema<IBanneds>({
     id: {
          type: String, required: true
     },
     banned: {
          type: Boolean, required: false,
     }
});

export const BannedsModel = model<IBanneds>("Banneds", bannedSchema);

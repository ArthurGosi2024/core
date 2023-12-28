import { ISpwans } from "@server/modules/@types/ISpwans";
import { Schema, model } from "mongoose";

export const spwanSchema = new Schema<ISpwans>({
     id: {
          type: String, required: true
     },
     coords: {
          type: [Number], required: false,
     },
     model: {
          type: String, required: false
     }
});

export const SpwansModel = model<ISpwans>("Spwans", spwanSchema);

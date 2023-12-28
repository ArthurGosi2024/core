/** @format */
import { IPlayer } from "@server/modules/@types/IPlayer";
import { Schema, model } from "mongoose";

export const playerSchema = new Schema<IPlayer>({
     bank: { type: Number },
     cash: { type: Number },
     license: { type: String, required: true },
     name: { type: String, required: true },
     surname: { type: String, required: false },
     user_id: { type: String, unique: true,  required: false },
});

export const PlayerModel = model<IPlayer>("Player", playerSchema);




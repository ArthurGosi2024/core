/** @format */

import mongoose from "mongoose";

export const connectDatabase = () =>
  mongoose
    .connect("mongodb://localhost:27017/aqua_base")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.error("Erro ao conectar com o MongoDB", err));

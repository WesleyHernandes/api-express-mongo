import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (error) => console.error("Erro de conexão", error));
conexao.once("open", () => console.log("Conexão realizada"));

const app = express();
routes(app);

export default app;

import express from "express";
import { router } from "./routes";

const app = express();

//middleware
app.use(express.json());

app.use(router);

export default app;
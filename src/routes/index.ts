import { Router } from "express";
import { donationsRoutes } from "./donations.routes";
import { helloRoutes } from "./hello.routes";

const router = Router();

router.use("/", helloRoutes);

router.use("/donation", donationsRoutes);

export { router };
import { Router } from "express";

const donationsRoutes =  Router();

donationsRoutes.post("/", (request, response) => {
  const { name } = request.body;
  console.log(name)
})


export { donationsRoutes };
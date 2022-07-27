import { Router } from "express";
import createDonationController from "../modules/devices/useCases/createDonation"

const donationsRoutes =  Router();

donationsRoutes.post("/", (request, response) => {
  return createDonationController().handle(request, response)
})

export { donationsRoutes };
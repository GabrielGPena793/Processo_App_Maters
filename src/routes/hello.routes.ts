import { Router } from "express"

const helloRoutes = Router()

helloRoutes.route("/").get( (request, response) => {
  
  let apiStatus = { alive: true }
  
  response.status(200).send(apiStatus)
  
})

export { helloRoutes };

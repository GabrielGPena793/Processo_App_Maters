import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"
import { AppErros } from "./modules/errors/AppErros";
import { FieldsRequiredError } from "./modules/errors/FieldsRequiredError";
import { router } from "./routes";

const app = express();

//middleware
app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  if (err instanceof FieldsRequiredError) {
    return response.status(err.statusCode).json({
      error: err.isError,
      errorMessage: err.message,
      requiredFields: err.requiredFields
    })
  }

  if (err instanceof AppErros) {
    return response.status(err.statusCode).json({
      error: err.isError,
      errorMessage: err.message,
    })
  }

  return response.status(500).json({
    status: "error",
    errorMessage: `Internal server error - ${err.message}`
  })
})

export default app;
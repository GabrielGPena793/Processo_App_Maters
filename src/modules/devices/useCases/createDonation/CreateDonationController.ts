import { Response, Request } from "express";
import { CreateDonationUseCase } from "./CreateDonationUseCase";


class CreateDonationController {

  constructor(private createDonationUseCase: CreateDonationUseCase){}

  handle(request: Request, response: Response) : Response {
    const donation = request.body;


    this.createDonationUseCase.execute(donation)

    
    return response.status(200).json({ success:true })
  }
}

export { CreateDonationController };
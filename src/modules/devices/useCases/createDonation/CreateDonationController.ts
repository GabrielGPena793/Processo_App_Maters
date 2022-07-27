import { Response, Request } from "express";
import { CreateDonationUseCase } from "./CreateDonationUseCase";


class CreateDonationController {

  constructor(private createDonationUseCase: CreateDonationUseCase){}

  handle(request: Request, response: Response) : Response {
    const donation = request.body;

    try {
      this.createDonationUseCase.execute(donation)
    } catch (err: any) {
      return response.status(400).json({...err});
    }
    
    return response.status(200).json({ success:true })
  }
}

export { CreateDonationController };
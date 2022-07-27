import { CreateDonationController } from "./CreateDonationController";
import { CreateDonationUseCase } from "./CreateDonationUseCase";


export default (): CreateDonationController => {
  const createDonationUseCase = new CreateDonationUseCase();

  const createDonationController = new CreateDonationController(createDonationUseCase)

  return createDonationController;
}
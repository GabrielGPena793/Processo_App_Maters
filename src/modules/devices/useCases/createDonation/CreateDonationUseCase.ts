import { AppErros } from "../../../errors/AppErros";
import { FieldsRequiredError } from "../../../errors/FieldsRequiredError";

interface IObjectKeys {
  [key: string]: string | number | Array<Object> | undefined;
}

type device = {
  type: string;
  condition: string;
};

interface IRequest extends IObjectKeys {
  name: string;
  phone: string;
  email?: string;
  zip: string;
  city: string;
  state: string;
  streetAddress: string;
  number: string;
  complement?: string;
  neighborhood: string;
  deviceCount: number;
  devices: device[];
}

class CreateDonationUseCase {
  execute({
    name,
    phone,
    email,
    zip,
    city,
    state,
    streetAddress,
    number,
    neighborhood,
    complement,
    deviceCount,
    devices,
  }: IRequest) {

    let donation: IRequest = {
      name,
      phone,
      email,
      zip,
      city,
      state,
      streetAddress,
      number,
      neighborhood,
      complement,
      deviceCount,
      devices,
    }


    this.verifyEmptyFields(donation);

    if (email != undefined) {
      this.validateEmail(email);
    }

    if (devices.length != deviceCount) {
      throw new AppErros(`The amount of equipment ${deviceCount} does not match the information of equipment sent ${devices.length}`);
    }

    this.verifyDevicesTypes(devices);
  }

  verifyEmptyFields(donation: IRequest) {
    let requiredFields: string[] = [];

    for (let item in donation) {
      if (!donation[item] && item !== "email" && item !== "complement") {
        requiredFields.push(item);
      }
    }

    if (donation.devices.length === 0) {
      requiredFields.push("devices");
    }

    if (requiredFields.length > 0) {
      throw new FieldsRequiredError("All mandatory fields must be informed", requiredFields);
    }
  }

  validateEmail(email: string): void {
    var regEmail = /\S+@\S+\.\S+/;

    if (!regEmail.test(email)) {
      throw new AppErros("Email invalid!");
    }
  }

  verifyDevicesTypes(devices: device[]) {
    const devicesTypes = [
      "Notebook",
      "Desktop",
      "Netbook",
      "Monitor",
      "Impressora",
      "Scanner",
    ];

    for (let device of devices) {
      if (!devicesTypes.includes(device.type)) {
        throw new AppErros(`${device.type} is not a valid type`);
      }
    }
  }
}

export { CreateDonationUseCase, IRequest };

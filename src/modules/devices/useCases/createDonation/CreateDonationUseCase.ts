interface IObjectKeys {
  [key: string]: string | number | Array<Object>;
}

type device = {
  type: string;
  condition: string;
};

interface IRequest extends IObjectKeys {
  name: string;
  email: string;
  phone: string;
  deviceCount: number;
  devices: device[];
}

class CreateDonationUseCase {
  execute(donation: IRequest) {
    this.verifyEmptyFields(donation);

    this.validateEmail(donation.email);

    if (donation.devices.length != donation.deviceCount) {
      let objectError = {
        error: true,
        errorMessage: `The amount of equipment ${donation.deviceCount} does not match the information of equipment sent ${donation.devices.length}`,
      };
      throw objectError;
    }

    this.verifyDevicesTypes(donation.devices);
  }

  verifyEmptyFields(donation: IRequest) {
    let requiredFields = [];

    for (let item in donation) {
      if (!donation[item]) {
        requiredFields.push(item);
      }
    }

    if (donation.devices.length === 0) {
      requiredFields.push("devices");
    }

    if (requiredFields.length > 0) {
      let ObjectError = {
        error: true,
        requiredFields: requiredFields,
        errorMessage: "All mandatory fields must be informed",
      };

      throw ObjectError;
    }
  }

  validateEmail(email: string): void {
    var regEmail = /\S+@\S+\.\S+/;

    if (!regEmail.test(email)) {
      let objectError = {
        error: true,
        errorMessage: "Email invalid!",
      };
      throw objectError;
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
        let objectError = {
          error: true,
          errorMessage: `${device.type} is not a valid type`,
        };

        throw objectError;
      }
    }
  }
}

export { CreateDonationUseCase, IRequest };

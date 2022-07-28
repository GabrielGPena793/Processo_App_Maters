import { AppErros } from "./AppErros";

export class FieldsRequiredError extends AppErros {

  public readonly requiredFields: string[];

  constructor(message: string, requiredFields: string[]){
    super(message);
    this.requiredFields = requiredFields;
  }
}
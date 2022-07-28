export class AppErros {

  public readonly message: string;

  public readonly statusCode: number;

  public readonly isError: boolean;


  constructor(message: string, statusCode = 400 ){
    this.isError = true;
    this.message = message;
    this.statusCode = statusCode;
  }

}
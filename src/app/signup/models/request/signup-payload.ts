export class SignupPayload {
  public mobile: number;
  public email: string;
  public password: string;
  public personal: object;

  constructor(req) {
    this.mobile = parseInt(req.mobile, 0) ;
    this.email = req.email;
    this.password = req.password;
    this.personal = {
        firstname: req.firstName,
        lastname: req.lastName
    };

  }
}

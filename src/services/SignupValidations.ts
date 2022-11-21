import Validations from "./Validations";

export default class SignupValidations{
  email: string;
  password: string;
  
  constructor (email : string, password: string){
    this.email = email;
    this.password = password;
  }

  checkValidations() {
    const errors: unknown[] = [] ;

    //email validations
    if (!Validations.checkEmail(this.email)) {
        errors['email'] = 'Invalid Email';
    }

    //password Validations
    if (!Validations.minLength(this.password, 6)) {
        errors['password'] = 'password should be of 6 characters';
    }

    return errors;
  }

}

export default class Validations {
    //regex
  static checkEmail(email: string) {
      if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              email,
          )
      ) {
          return true;
      }
      return false;
  }
  
  static minLength(name: string, minLength: number) {
      if (name.length < minLength) {
          return false;
      }
      return true;
  }
}

export class User {
  constructor(userObj) {
    this.id = (userObj && userObj.id) || null;
  }
}

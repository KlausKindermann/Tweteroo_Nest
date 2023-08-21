export class User {
  private username: string;
  private avatar: string;

  constructor(username: string, avatar: string) {
    this.username = username;
    this.avatar = avatar;
  }

  get avatarPrivate() {
    return this.avatar;
  }

  get usernamePrivate() {
    return this.username;
  }
}
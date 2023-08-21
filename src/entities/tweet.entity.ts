import { User } from "./user.entity";

export class Tweets {
  private user: User;
  private tweet: string;

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }
  get messagePrivate() {
    return this.tweet;
  }
  get userPrivate() {
    return this.user;
  }
}
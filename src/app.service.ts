import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { CreateTweetDTO } from './dtos/create-tweet.dto';
import { Tweets } from './entities/tweet.entity';
import { User } from './entities/user.entity';


@Injectable()
export class AppService {

  private tweets: Tweets[];
  private users: User[];

  constructor() {
    this.tweets = [];
    this.users = [];
  }

  createUser(user: CreateUserDTO) {
    const person = new User(user.username, user.avatar);
    return this.users.push(person);
  }

  postTweets(tweet: CreateTweetDTO) {
    let login = false;
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.usernamePrivate === tweet.username) {
        login = true;
        const message = new Tweets(user, tweet.tweet);
        this.tweets.push(message);
      }
    }
    if (login = false) {
      throw new UnauthorizedException('Unauthorized User');
    } else {
      return this.tweets;
    }
  }

  getTweetsById(username: string) {
    const tweets = [];
    for (let i = 0; i < this.tweets.length; i++) {
      const tweet = this.tweets[i];
      if (tweet.userPrivate.usernamePrivate === username) {
        tweets.push({
          username: tweet.userPrivate.usernamePrivate,
          avatar: tweet.userPrivate.avatarPrivate,
          tweet: tweet.messagePrivate,
        });
      }
    }
    return tweets;
  }

  getTweets() {
    const tweets = [];
    if (this.tweets.length === 0) {
      return tweets;
    } else if (this.tweets.length >= 15) {
      for (let i = 1; i <= 16; i++) {
        const tweet = this.tweets[this.tweets.length - i];
        tweets.push({
          username: tweet.userPrivate.usernamePrivate,
          avatar: tweet.userPrivate.avatarPrivate,
          tweet: tweet.messagePrivate,
        });
      }
      return tweets;
    }
  }
}

import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTweetDTO } from './dtos/create-tweet.dto';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller()
export class AppController {

  constructor(private appService: AppService) { }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  createUser(@Body() body: CreateUserDTO) {
    try {
      return this.appService.createUser(body);
    } catch (error) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('tweets')
  @HttpCode(HttpStatus.CREATED)
  postTweets(@Body() body: CreateTweetDTO) {
    try {
      return this.appService.postTweets(body);
    } catch (error) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('tweets')
  getTweets() {
    try {
      return this.appService.getTweets();
    } catch (error) {
      throw new HttpException('BADREQUEST', HttpStatus.BAD_REQUEST);
    }
  }

  @Get('tweets/:username')
  getTweetsById(@Param('username') username: string) {
    try {
      return this.appService.getTweetsById(username);
    } catch (error) {
      throw new HttpException('BADREQUEST', HttpStatus.BAD_REQUEST);
    }
  }
}
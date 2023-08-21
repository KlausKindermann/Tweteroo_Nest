import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from 'src/dtos/create-user.dto';
import { CreateTweetDTO } from './dtos/create-tweet.dto';

@Controller()
export class AppController {

  constructor(private appService: AppService) { }

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  createUser(@Body() body: CreateUserDTO) {
    return this.appService.createUser(body);
  }

  @Post('/tweets')
  @HttpCode(HttpStatus.CREATED)
  postTweets(@Body() body: CreateTweetDTO) {
    return this.appService.postTweets(body);
  }

  @Get('/tweets')
  getTweets(@Query('page') page: string) {
    return this.appService.getTweets(page);
  }

  @Get('/tweets/:username')
  getTweetsById(@Param('username') username: string) {
    return this.appService.getTweetsById(username);
  }
}
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Router.get("users", getUsers)
  /*@Get()
  getUsers() {
    return this.appService.getUsers();
  }

  // function findOne(req: Request, res: Response) => { req.params.id  }
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    console.log(id);
    return id; // usuário correspondente ao id
  }*/

  // joi => name, email =? schema UserSchema ======= DTO (Data Transfer Object)
  //function createUser(req: Request, res: Response) => { req.body as Omit<User, "id"> }
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);
  }
}


import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import User from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[]; // persistencia em memoria

  constructor() {
      this.users.push(new User("ellen", "https://nerdhits.com.br/wp-content/uploads/2021/04/demon-slayer-kimetsu-no-yaiba-criador-time-100.jpg"));
  }

  createUser(userDTO: CreateUserDto) {
    return this.users.push(userDTO.toUser());
  }
}

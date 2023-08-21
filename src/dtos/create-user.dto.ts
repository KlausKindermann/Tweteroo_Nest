import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  username: string;

  @IsUrl()
  @IsNotEmpty({
    message: 'All fields are required!',
  })
  avatar: string;

  get avatarPrivate() {
    return this.avatar;
  }
  get usernamePrivate() {
    return this.username;
  }
}
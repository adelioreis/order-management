import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './user/dto/login-user.dto';
import { UserService } from './user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async validateUser(loginDto: LoginUserDto): Promise<any> {
    const user = await this.userService.login(loginDto);
  }

}

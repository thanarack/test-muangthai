import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterBody } from 'src/interface/register';
import { LoginBody } from 'src/interface/login';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/token/token.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginBody) {
    try {
      const { email, password } = body;
      const user = await this.userService.findByEmail(email);

      if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Invalid email or password');
      }

      const payload = { user_id: user.id };
      const secret = 'test-project-secret-key';
      const expiresIn = '1h';
      const token = await this.tokenService.generateToken(
        payload,
        secret,
        expiresIn,
      );
      const userWithToken = {
        token,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        },
      };
      return userWithToken;
    } catch (e) {
      throw e;
    }
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() body: RegisterBody) {
    try {
      // Check user exists
      const user = await this.userService.findByEmail(body.email);
      if (user) {
        throw new BadRequestException('User already exists');
      }

      // Handle user registration logic here
      await this.userService.create(body);

      // Return user data
      const getUser = await this.userService.findByEmail(body.email);
      return getUser;
    } catch (e) {
      throw e;
    }
  }
}

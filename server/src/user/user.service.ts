import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { RegisterBody } from 'src/interface/register';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(body: RegisterBody): Promise<User> {
    const { password, email, role, name } = body;

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt) as string;

    let user;
    await this.prisma.$transaction(async (tx) => {
      user = await tx.user.create({
        data: {
          email,
          password: hashPassword,
          role,
          name,
        },
      });
    });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

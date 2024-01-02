import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class TokenService {
  generateToken(payload: object, secret: string, expiresIn: string): string {
    return sign(payload, secret, { expiresIn });
  }

  validateToken(token: string, secret: string): object {
    try {
      const payload = verify(token, secret);
      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}

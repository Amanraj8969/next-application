import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Extract JWT from Bearer token
      ignoreExpiration: false,  // Ensure the token hasn't expired
      secretOrKey: configService.get<string>('JWT_SECRET'),  // Get JWT secret from .env
    });
  }

  // This method is called when the token is valid
  async validate(payload: any) {
    console.log('JWT Payload:', payload);  // Log the payload to see if it's being processed
    return { username: payload.username };  // Return the user details extracted from the token
  }
}

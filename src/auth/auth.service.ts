import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private users = [
    {
      username: 'admin',
      password: bcrypt.hashSync('admin123', 10),  // Hash the password for secure storage
    },
  ];

  // Validate the user by comparing the username and password
  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find((u) => u.username === username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Generate the JWT token with a longer expiration time
  async login(user: any) {
    const payload = { username: user.username };

    // Return the JWT token with an expiration time of 1 hour
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '1h' }),  // Set expiration to 1 hour
    };
  }
}

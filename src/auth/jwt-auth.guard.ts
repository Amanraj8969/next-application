import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('JwtAuthGuard canActivate called');  // Log when the guard is triggered

    // Await the result from super.canActivate and ensure it resolves to a boolean
    const result = (await super.canActivate(context)) as boolean;
    
    return result;
  }
}

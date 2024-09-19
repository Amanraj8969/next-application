import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;

    // Remove session login, since we're using JWT and not sessions
    // const request = context.switchToHttp().getRequest();
    // await super.logIn(request); // This is only for session-based authentication

    return result;
  }
}

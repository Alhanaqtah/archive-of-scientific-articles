import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JWTAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();

        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException({ message: 'Invalid token format' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const user = this.jwtService.verify(token);
            req.user = user;
            return true;
        } catch (error) {
            throw new UnauthorizedException({ message: 'Invalid token' });
        }
    }
}

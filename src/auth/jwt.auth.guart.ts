import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

export class JwtAuthGuart implements CanActivate {
  constructor(private readonly jwtServise: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];
      if (bearer != "Bearer" || !token) {
        throw new UnauthorizedException({ meesage: "User not registered" });
      }

      const user = this.jwtServise.verify(token);
	  req.user = user
	  return true
    } catch (error) {
      throw new UnauthorizedException({ meesage: "User not registered" });
    }
  }
}

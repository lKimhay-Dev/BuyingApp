import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Strategy } from 'passport-auth-token';

@Injectable()
export class TokenStrategy extends PassportStrategy(Strategy) {
  constructor(
    private httpService: HttpService,
    private authService: AuthService,
  ) {
    super();
  }

  async validate(token): Promise<any> {
    const googleUserProfileApi = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`;
    try {
      const { data } = await this.httpService
        .get(googleUserProfileApi)
        .toPromise();
      return this.authService.findUserByEmail(data);
    } catch (e) {
      const res = e.response;
      throw new HttpException(res.statusText, res.status);
    }
  }
}

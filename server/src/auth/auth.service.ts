import { HttpService, Injectable } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService, private userService: UsersService) {

    }

    async validateToken(request) {
        let userData: any = {}
        const uProfileUrl = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${request.body.token}`
        await this.httpService.get<any>(uProfileUrl).subscribe(result => {
            userData = result.data
            this.userService.findOne(userData.email).then(result => {                
                if (!result) {
                    const user = new User();
                    user.username = userData.name
                    user.guid = userData.id
                    user.email = userData.email
                    this.userService.create(user)
                }
            })
        })
        console.log(userData);
        
        return userData;
    }
}
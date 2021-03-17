import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) {
    }

    async canActivate() {
        const email = localStorage.getItem('email');
        const { buying_area_id } = await this.userService.getUserByEmail(email).toPromise();
        if (buying_area_id) {
            return true;
        }

        await this.router.navigate(['/sign-up']);
        return false;
    }

}

import { Injectable } from '@angular/core';
import { CanActivate, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { UserService } from '../service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
   }
  canActivate() {
    const token = localStorage.getItem('token')
    const isRegister = localStorage.getItem('isRegister')

    if (token){
        if(isRegister && isRegister === 'true'){
          return true;
        }else{
          this.router.navigate(['/sign-up'])
        }
      }
      else {  
        this.router.navigate(['/login'])
    }
    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
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
    if (token)
      this.authService.authenticate(token).subscribe(_ => {
        const userEmail = localStorage.getItem('email')
        this.userService.getUserByEmail(userEmail).subscribe(res => {
          alert(!res.buying_area_id)
          if (res.buying_area_id == null) {

            alert("sign-up")
            this.router.navigate(['/sign-up'])
          }
          else {
            alert("Home")
            this.router.navigate(['/home'])
          }
        })
      })
      else {  
        this.router.navigate(['/login'])
    }
    return false;
  }
}

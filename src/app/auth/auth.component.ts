import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  login: string;
  password: string;

  constructor(
    /*private _flashMessagesService: FlashMessagesService*/
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signIn() {
    const user = {
      login: this.login,
      password: this.password,
    };
    if (!user.login) {
      // this._flashMessagesService.show('Enter your login', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!user.password) {
      // this._flashMessagesService.show('Enter your password', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    }

    // data - ответ сервера
    this.authService.authUser(user).subscribe((data) => {
      if (!data.success) {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-danger',
        //   timeout: 1000,
        // });
        console.log(data);
      } else {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-success',
        //   timeout: 1000,
        // });
        this.router.navigate(['/dashboard']);
        this.authService.storeUser(data.token, data.user);
        console.log(data);
      }
    });

    console.log(user);
  }
}

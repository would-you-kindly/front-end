import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {
  name: string;
  login: string;
  email: string;
  password: string;

  constructor(
    /*private _flashMessagesService: FlashMessagesService*/
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    };
    if (!user.name) {
      // this._flashMessagesService.show('Enter your name', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!user.login) {
      // this._flashMessagesService.show('Enter your login', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!user.email) {
      // this._flashMessagesService.show('Enter your email', {
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
    this.authService.registerUser(user).subscribe((data) => {
      if (!data.success) {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-danger',
        //   timeout: 1000,
        // });
        this.router.navigate(['/reg'])
      } else {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-success',
        //   timeout: 1000,
        // });
        this.router.navigate(['/auth'])
      }
    })

    console.log(user);
  }
}

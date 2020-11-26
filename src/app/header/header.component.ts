import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    /*private _flashMessagesService: FlashMessagesService*/
    // public, чтобы можно было вызывать его функции из html (с помощью директивы *ngIf)
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logoutUser() {
    this.authService.logout();
    // this._flashMessagesService.show("You are logged out", {
    //   cssClass: 'alert-success',
    //   timeout: 1000,
    // });
    this.router.navigate(['/auth']);
  }
}

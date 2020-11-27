import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  category: string;
  title: string;
  photo: string;
  text: string;

  constructor(
    /*private _flashMessagesService: FlashMessagesService*/
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createPost() {
    const post = {
      category: this.category,
      title: this.title,
      photo: this.photo,
      text: this.text,
      author: JSON.parse(localStorage.getItem('user')).login,
      date: new Date(),
    };
    if (!post.category) {
      // this._flashMessagesService.show('Enter your name', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!post.title) {
      // this._flashMessagesService.show('Enter your login', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!post.photo) {
      // this._flashMessagesService.show('Enter your email', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    } else if (!post.text) {
      // this._flashMessagesService.show('Enter your password', {
      //   cssClass: 'alert-danger',
      //   timeout: 1000,
      // });
      return false;
    }

    // data - ответ сервера
    this.authService.createPost(post).subscribe((data) => {
      if (!data.success) {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-danger',
        //   timeout: 1000,
        // });
      } else {
        // this._flashMessagesService.show(data.message, {
        //   cssClass: 'alert-success',
        //   timeout: 1000,
        // });
        this.router.navigate(['/'])
      }
    });

    // console.log(post);
  }
}

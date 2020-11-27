import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { timeStamp } from 'console';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  // $ - observable переменная (в ней будет ответ сервера)
  post$;
  login;

  constructor(
    private authService: AuthService,
    // Используется, чтобы получить текущий маршрут и вытащить из него id поста
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.login = JSON.parse(localStorage.getItem('user')).login;
      console.log('LOGIN ' + JSON.parse(localStorage.getItem('user')).login);
    } else {
      this.login = null;
    }
    this.post$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.authService.getPostById(params['id']);
      })
    );
  }

  deletePost(id) {
    this.authService.deletePost(id).subscribe(data => {
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
    })
  }
}

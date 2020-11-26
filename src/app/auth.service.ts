import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root',
})

// Отправляет HTTP-запросы на сервер
export class AuthService {
  token: any;
  user: any;

  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Отправляем запрос о регистрации пользователя на сервер и преобразуем ответ в json
    return this.http
      .post('http://localhost:3000/account/reg', user, {
        headers: headers,
      })
      .pipe(map((res) => res.json()));
  }

  authUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Отправляем запрос о регистрации пользователя на сервер и преобразуем ответ в json
    return this.http
      .post('http://localhost:3000/account/auth', user, {
        headers: headers,
      })
      .pipe(map((res) => res.json()));
  }

  storeUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;

    localStorage.clear();
  }

  isAuthenticated() {
    return tokenNotExpired();
  }
}

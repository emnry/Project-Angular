import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor(private http: HttpClient) {
  }

  signUp(user: any): Observable<any> {
    return this.http.post(`http://localhost:3000/signup`, user);

  }

  resetPassword(user: any): Observable<any> {
    return this.http.post(`http://localhost:3000/reset-password`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`http://localhost:3000/login`, user).pipe(
      tap((data: any) => {
          if (data.code === '200') {
            this.loggedIn = true;
            localStorage.setItem('token', data.data);
          }
        }
      ));
  }

  isLoggedIn(): boolean {
    return this.loggedIn || !!localStorage.getItem('token');
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }

}

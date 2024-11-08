import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): string{
    return 'hello';  /* authentication */
  }

  private baseUrl = 'https://mockapi.io/api/v1/users'; // Replace with actual MockAPI URL
  private currentUser = new BehaviorSubject<any>(null);
 

  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, userData);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${credentials.email}`).pipe(
      map(users => {
        const user = users.find(u => u.password === credentials.password);
        if (user) {
          this.currentUser.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/signin']);
  }
}

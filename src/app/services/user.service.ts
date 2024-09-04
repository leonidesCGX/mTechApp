import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user.model'; 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();
  private apiUrl = 'http://localhost:5206/api/users'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => {
       this.users.next(users);
      }),
      catchError((error) => {
        console.error('Error fetching users', error);
        throw error;
      })
    );
  }
}

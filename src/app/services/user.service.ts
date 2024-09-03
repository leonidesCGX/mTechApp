import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model'; // Define this model

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5206/api/users'; // Update URL as needed

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    debugger
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching users', error);
        throw error;
      })
    );
  }
}

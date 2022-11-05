import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const mockUserData : IUser = {
  id: 1,
  username: 'Piyush Goyal',
  email: 'piyushg944@gmail.com',
  password: '#1234Bes',
  country: 'Canada',
  drops: 145
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  getCurrentUser() : IUser{
    return mockUserData;
  };
  // addUser(user: IUser): Observable<IUser>{
  //   return this.http.post<IUser>(environment.baseurl + '/user', user).pipe(catchError(this.handleError));
  // }

  // getUsers(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(environment.baseurl + '/user');
  // }

  // getUserById(id: number): Observable<IUser>{
  //   return this.http.get<IUser>(environment.baseurl + `/user/userId=${id}`).pipe(catchError(this.handleError));
  // }

  // checkForUser(email: string, pin: string): Observable<IUser>{
  //   return this.http.get<IUser>(environment.baseurl + `/user/email=${email}&pin=${pin}`).pipe(catchError(this.handleError));
  // }
}


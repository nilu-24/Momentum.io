import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

let users : IUser[] = [
  {
    id: 1,
    username: 'Piyush Goyal',
    email: 'piyushg944@gmail.com',
    password: '#1234Bes',
    country: 'India',
    drops: 145
  },
  {
    id: 2,
    username: 'Ibrahim',
    email: 'ibrahim@gmail.com',
    password: '#1234Bes',
    country: 'Jordan',
    drops: 300
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getCurrentUser() : IUser{
    var user = users.filter(res => res.email === sessionStorage.getItem("user"));
    return user[0];
  };

  verifyUser(email:string, pass: string){
    var user = users.filter(res => res.email === email && res.password === pass);

    if(user.length > 0){
      return user[0];
    }
    return null;
  }
}


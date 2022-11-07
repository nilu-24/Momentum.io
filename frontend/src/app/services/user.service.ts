import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  constructor(){
    this.currentUser = {
      username: '',
      password: '',
      email: '',
      id: 0,
      drops: 0,
      country: ''
    }
  }

  setCurrentUser(user: IUser){
    this.setCurrentUser(user);
  }

  async updateUser(id: number, user: IUser): Promise<IUser>{
    return await axios.put("http://127.0.0.1:8000/api/user-update/" + id.toString(), user).then((res) => res.data);
  }

  async getUserById(id: number): Promise<IUser>{
    return await axios.get("http://127.0.0.1:8000/api/user-detail/" + id.toString()).then((res) => res.data);
  }

  async getAllUsers(): Promise<IUser[]>{
    return await axios.get("http://127.0.0.1:8000/api/user-list/").then(res => res.data);
  }
}


import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  post: IPost | undefined;

  setCollabPost(post: IPost){
    this.post = post;
  }

  getCollabPost(){
    return this.post;
  }
}

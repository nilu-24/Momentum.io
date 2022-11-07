import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { IPost } from "../interfaces/post.interface";
import axios from "axios";
@Injectable({
  providedIn: "root",
})
export class PostService {
  posts : IPost[] = [];

  async getTrending(): Promise<IPost[]> {
    return await axios.get("http://127.0.0.1:8000/api/post-list/").then((res) => res.data);
  }

  async createNewPost(post: IPost) {
    return await axios.post("http://127.0.0.1:8000/api/post-create/", post).then((res) => res.data);
  }
}

import { IUser } from "../interfaces/user.interface";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPost } from "../interfaces/post.interface";

const mockChallenges : IPost[] = [
  {
    id: 1,
    username: 'Fardin',
    title: 'Car Pooling',
    description: 'Car poolings help to save environment',
    tags: 'environment, cleanEnergy, fossil',
    country: 'bn',
    flag: false,
    votes: 250,
    imageurl: '../../assets/images/world.png',
    un_tag: 7
  },
  {
    id: 1,
    username: 'Piyush',
    title: 'Blood Donation',
    description: 'Blood Donation help to save people',
    tags: 'blood, donation, health',
    country: 'in',
    flag: false,
    votes: 150,
    imageurl: '../../assets/images/world.png',
    un_tag: 9
  },
  {
    id: 1,
    username: 'Ibrahim',
    title: 'Food',
    description: 'Food to eat',
    tags: 'food, foodie, eating',
    country: 'au',
    flag: false,
    votes: 100,
    imageurl: '../../assets/images/world.png',
    un_tag: 2
  },
  {
    id: 1,
    username: 'Fardin',
    title: 'Car Pooling',
    description: 'Car poolings help to save environment',
    tags: 'environment, cleanEnergy, fossil',
    country: 'bn',
    flag: false,
    votes: 250,
    imageurl: '../../assets/images/world.png',
    un_tag: 7
  },
  {
    id: 1,
    username: 'Piyush',
    title: 'Blood Donation',
    description: 'Blood Donation help to save people',
    tags: 'blood, donation, health',
    country: 'in',
    flag: false,
    votes: 150,
    imageurl: '../../assets/images/world.png',
    un_tag: 9
  },
  {
    id: 1,
    username: 'Ibrahim',
    title: 'Food',
    description: 'Food to eat',
    tags: 'food, foodie, eating',
    country: 'au',
    flag: false,
    votes: 100,
    imageurl: '../../assets/images/world.png',
    un_tag: 2
  },

]

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  // constructor(private http: HttpClient, private dialog: MatDialog) {
  // }

  getTrendingChallenges() : IPost[]{
    return mockChallenges.sort((a, b) => b.votes - a.votes);
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


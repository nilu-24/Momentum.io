import { IUser } from '../interfaces/user.interface';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IPost } from '../interfaces/post.interface';

const posts: IPost[] = [
  {
    imageurl: '../../assets/images/carpooling.jpeg',
    id: 1,
    username: 'Fardin',
    title: 'Carpooling',
    description:
      'In Bangladesh, where overpopulation is prevalent, we are carpooling to save space and reduce the carbon emissions. Having fewer cars on the road means reduced Greenhouse Gas (GHG) emissions and improved air quality.',
    tags: 'environment, cleanEnergy, fossil',
    country: 'bd',
    flag: true,
    votes: 250,
    un_tag: 13,
  },

  {
    imageurl: '../../assets/images/blood-donation.jpeg',
    id: 2,
    username: 'Piyush',
    title: 'Blood Donation',
    description:
      'Today, me and some of my friends donated blood for the first time! It feels really good to be a part of a great cause and help save lives. Donating blood also helps in lowering the risk for heart attacks!',
    tags: 'blood, donation, health',
    country: 'in',
    flag: true,
    votes: 150,
    un_tag: 3,
  },

  {
    imageurl: '../../assets/images/food-donation.jpeg',
    id: 3,
    username: 'Ibrahim',
    title: 'Food Donation',
    description:
      'We are organizing a fundraising program for providing food to the needy people of our community. A lot of our friends have joined us, and I hope you all will too! Letâ€™s work together for this noble cause.',
    tags: 'food, donation, hunger',
    country: 'bd',
    flag: true,
    votes: 180,
    un_tag: 2,
  },

  {
    imageurl: '../../assets/images/clothes-donation.jpeg',
    id: 4,
    username: 'Mark',
    title: 'Clothes Donation',
    description:
      'Hey everyone, we are donating winter clothes for the underprivileged people of my village. Please help and support these needy people by donating winter clothes. Your actions will save lives!',
    tags: 'winter, donation, clothes',
    country: 'in',
    flag: true,
    votes: 100,
    un_tag: 1,
  },

  {
    imageurl: '../../assets/images/planting-trees.jpeg',
    id: 5,
    username: 'Sarah',
    title: 'Planting Trees',
    description:
      'My new year resolution is that Iâ€™ve decided to plant a new tree every week for the environment! I hope every one of you will find some time to plant a tree regularly. Trust me, it feels amazing!!!',
    tags: 'trees, saveTheEarth, climateChange',
    country: 'ar',
    flag: true,
    votes: 72,
    un_tag: 15,
  },

  {
    imageurl: '../../assets/images/biking.jpeg',
    id: 6,
    username: 'John',
    title: 'Biking',
    description:
      'I just bought my first bike, and I use it every day for transportation and running errands. I have made so many friends who bike too and it feels great that we are saving the environment while having fun! You should try biking too.',
    tags: 'bikes, exercise, eco-friendly',
    country: 'ca',
    flag: true,
    votes: 181,
    un_tag: 11,
  },

  {
    imageurl: '../../assets/images/beach.jpeg',
    id: 7,
    username: 'Jason',
    title: 'Cleaning the Beach',
    description:
      'Our beach is our pride! However, so many people throw plastic bottles and litter on the beach. So, me and my friends decided to go to the beach every 2 weeks to clean it for a safer environment for marine animals.',
    tags: 'sealife, plastic, environment',
    country: 'id',
    flag: true,
    votes: 219,
    un_tag: 14,
  },

  {
    imageurl: '../../assets/images/coding.jpeg',
    id: 8,
    username: 'Lamia',
    title: 'Coding for Everyone',
    description:
      'I love coding! However, not everyone is as lucky as me to have so many resources to learn. So, I have decided to work with a non-profit to teach coding skills to underprivileged youth. Hoping for a bright future!',
    tags: 'education, coding, tech',
    country: 'np',
    flag: true,
    votes: 384,
    un_tag: 4,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PostService {

  getTrendingIdeas(): IPost[] {
    var ideas = posts.filter(res => res.flag === true)
    return ideas.sort((a, b) => b.votes - a.votes);
  }

  getTrendingChallenges(): IPost[] {
    var ideas = posts.filter(res => res.flag === false)
    return ideas.sort((a, b) => b.votes - a.votes);
  }

  createNewPost(post: IPost){
    posts.push(post);
  }

  getNextIter(){
    return posts.length + 1;
  }
}

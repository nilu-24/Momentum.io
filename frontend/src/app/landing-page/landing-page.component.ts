import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { PostService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  trendingChallenges: IPost[] = [];
  trendingIdeas: IPost[] = [];
  user: IUser | undefined;

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly postService : PostService
    ) {
    this.trendingChallenges = this.postService.getTrendingChallenges().splice(0, 3);
    this.trendingIdeas = this.postService.getTrendingIdeas().splice(0, 3);
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  navigateToChallenges(){
    this.router.navigate(['challenges'])
    .then(() => {
      window.location.reload()
    });
  }
  navigateToIdeas(){
    this.router.navigate(['ideas'])
    .then(() => {
      window.location.reload()
    });
  }

  logout(){
    sessionStorage.clear();

    this.router.navigate([''])
    .then(() => {
      window.location.reload()
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { ChallengesService } from '../services/challenges.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  trendingChallenges: IPost[] = [];
  user: IUser | undefined;

  constructor(private readonly userService: UserService, private readonly challengesService : ChallengesService) {
    this.trendingChallenges = this.challengesService.getTrendingChallenges().splice(0, 3);
    this.user = this.userService.getCurrentUser();
  }

  ngOnInit(): void {
  }

}

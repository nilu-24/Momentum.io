import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { ChallengesService } from '../services/challenges.service';
import { IdeasService } from '../services/ideas.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less']
})
export class PostPageComponent implements OnInit {

  @Input() isChallenge  = true;

  user: IUser | undefined;
  trending: IPost[] = [];

  constructor(
      private readonly userService: UserService,
      private readonly challengesService : ChallengesService,
      private readonly ideasService: IdeasService,
      private readonly route: ActivatedRoute,
      private readonly router: Router
    ) {

    if(this.isChallenge){
      this.trending =  this.challengesService.getTrendingChallenges();
    } else{
      this.trending = this.ideasService.getTrendingIdeas();
    }
    this.user = this.userService.getCurrentUser();
  }

  navigateToChallenges(){
    this.router.navigate(['challenges'])
  }
  navigateToIdeas(){
    this.router.navigate(['ideas'])
  }

  ngOnInit(): void {
    this.route.data.subscribe(result => this.isChallenge = result['isChallenge'])
  }
}

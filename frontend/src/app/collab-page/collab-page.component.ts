import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { CollabService } from '../services/collab.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-collab-page',
  templateUrl: './collab-page.component.html',
  styleUrls: ['./collab-page.component.less']
})
export class CollabPageComponent implements OnInit {
  user: IUser | undefined;
  post: IPost | undefined;

  state: any;

  messages = ['Farhan: Message by user 1', 'Ibrahim: Message by user 2'];
  newMessage = '';

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly collabService: CollabService,
    ) {
    this.user = this.userService.getCurrentUser();
    this.post = this.collabService.getCollabPost();
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

  sendMessage(){
    this.messages.push(this.user?.username + ': ' + this.newMessage);
    this.newMessage = '';
  }

}

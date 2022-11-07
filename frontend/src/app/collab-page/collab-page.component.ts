import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs';
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
  toxicityMessage = 'This message is offensive. Please change';
  notToxic = false;

  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly collabService: CollabService,
    ) {

    let uid = sessionStorage.getItem("user");

    if(uid == null)
      uid = '';

    this.userService.getUserById(parseInt(uid)).then(res => this.user = res);
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

    this.checkForToxicity(this.newMessage);

    if(this.notToxic){
      this.messages.push(this.user?.username + ': ' + this.newMessage);
      this.newMessage = '';
    }

    this.notToxic = false;
  }

  checkForToxicity(m: string){

    this.query({"inputs": m}).then((response : any) => {
      const res = response[0];

      res.forEach((element:any) => {
        if(element.score > 0.90)
        {
          this.notToxic = true;
        }
      });
    });
  }

  async query(data : any) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/unitary/toxic-bert",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  navigateToHome(){
    this.router.navigate(['app'])
    .then(() => {
      window.location.reload()
    });
  }

}

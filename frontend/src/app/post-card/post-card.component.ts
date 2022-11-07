import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __importStar } from 'tslib';
import { IPost } from '../interfaces/post.interface';
import { IUser } from '../interfaces/user.interface';
import { PostService } from '../services/posts.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less']
})
export class PostCardComponent implements OnInit {

  @Input() isChallenge = false;
  @Input() trending : IPost[] = [];
  @Input() user: IUser | undefined;

  postForm : FormGroup;

  constructor(private fb : FormBuilder, private postService: PostService, private userService: UserService) {
    this.postForm = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      tags: this.fb.control(''),
      image: this.fb.control(''),
      country: this.fb.control('')
    })
  }

  ngOnInit(): void {
    this.createPostForm();
  }

  createNewPost(){
    if(!this.user){
      return;
    }

    const post: IPost =
      {
        id: 0,
        imageurl: this.postForm.value.image.substring(12),
        user: this.user.id,
        title: this.postForm.value.title,
        description: this.postForm.value.description,
        tags: this.postForm.value.tags,
        country: this.postForm.value.country,
        flag: !this.isChallenge,
        votes: 0,
        un_tag: 0,
      }

      this.postService.createNewPost(post);
      let newUser = this.user;
      newUser.drops += 10;

      console.log(newUser);
      this.userService.updateUser(this.user.id, newUser);

      this.createPostForm();

      window.location.reload();
  }

  private createPostForm(){
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      image: [''],
      country: ['']
    })
  }

}

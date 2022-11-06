import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../interfaces/post.interface';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less']
})
export class PostCardComponent implements OnInit {

  @Input() isChallenge = false;
  postForm : FormGroup;

  constructor(private fb : FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      tags: this.fb.control(''),
      image: this.fb.control(''),
      city: this.fb.control('')
    })
  }

  ngOnInit(): void {
    this.createPostForm();
  }

  createNewPost(){
    const post: IPost =
      {
        imageurl: this.postForm.value.imageurl,
        id: this.postService.getNextIter(),
        username: this.postForm.value.username,
        title: this.postForm.value.title,
        description:
        this.postForm.value.description,
        tags: this.postForm.value.tags,
        country: this.postForm.value.country,
        flag: !this.isChallenge,
        votes: 0,
        un_tag: 0,
      }

      this.postService.createNewPost(post);
  }

  private createPostForm(){
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      image: [''],
      city: ['']
    })
  }

}

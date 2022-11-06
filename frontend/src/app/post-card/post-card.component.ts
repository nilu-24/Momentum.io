import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.less']
})
export class PostCardComponent implements OnInit {

  postForm : FormGroup;

  constructor(private fb : FormBuilder) {
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
    console.log(this.postForm.value)
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

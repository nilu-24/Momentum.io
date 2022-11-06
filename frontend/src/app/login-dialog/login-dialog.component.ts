import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit{
  registerToggle = false;

  loginForm : FormGroup;
  registerForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) {

    this.loginForm = this.fb.group({
      email: this.fb.control(''),
      password: this.fb.control('')
    });

    this.registerForm = this.fb.group({
      username: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]]
    })
  }

  private createRegisterForm() {
    this.registerForm = this.fb.group({
      username : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
      country: ['', [Validators.required]]
    })
  }

  registerNow(): void{
    this.registerToggle = true;
    console.log(this.register);
  }

  loginNow(): void{
    this.registerToggle = false;
    console.log(this.register);
  }

  close(): void {
    this.dialogRef.close();
  }

  login(): void {
    this.dialogRef.close(this.loginForm.value);
  }

  register(): void {
    this.dialogRef.close(this.registerForm.value);
  }
}


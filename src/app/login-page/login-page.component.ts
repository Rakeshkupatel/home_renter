import { Component } from '@angular/core';
import { FormControl,FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form class="login-form" [formGroup]="loginFormGroup" (submit)="login()">
      <label for = "username"> Username </label>
      <input id="username" type="text" formControlName="username">
      <label for="password"> Password </label>
      <input id="password" type="password" formControlName="password">
      <button type="submit" class="primary"> Login </button>
    </form>
  `,
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginFormGroup =new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
   login(){
    alert(this.loginFormGroup.value.username??''+" "+this.loginFormGroup.value.password??'');
   }
}

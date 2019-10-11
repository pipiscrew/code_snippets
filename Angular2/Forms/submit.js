//component.hrml
      <form class="form-signin" (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="umail" class="sr-only">Email address</label>
        <input type="email" name="umail" class="form-control" placeholder="Email address" required autofocus>
        <label for="upassword" class="sr-only">Password</label>
        <input type="password" name="upassword" id="upassword" class="form-control" placeholder="Password" required>
 
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      
//component.ts
//must have the method declare at html aka onSubmit
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("working");
  }
  
}

      
//app.module.ts
//must have formsmodule

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
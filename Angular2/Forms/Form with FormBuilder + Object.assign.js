//https://malcoded.com/posts/angular-fundamentals-reactive-forms/

//example - https://stackblitz.com/edit/angular-youfqi

//html
<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
	<div class="modal-body">
		<p *ngIf="submitted && f.UserName.errors?.required" class="alert text-center alert-danger">Username required</p>
    <p *ngIf="submitted && f.UserName.errors?.minlength" class="alert text-center alert-danger">The minimum Username length is 3 chars</p>
    <p *ngIf="submitted && f.UserName.errors?.pattern" class="alert text-center alert-danger">Only alphanumeric for Username</p>
		<p *ngIf="submitted && f.Email.errors"  class="alert text-center alert-danger">Email required</p>
    <p *ngIf="submitted && f.Password.errors?.required" class="alert text-center alert-danger">Password required</p>
    <p *ngIf="submitted && f.Password.errors?.pattern"  class="alert text-center alert-danger">Password must be at least 8 characters in length, lowercase letters, uppercase letters, numbers, special characters</p>

		<div class="form-group">
			<label class="control-label">User</label>
			<input formControlName="UserName" class="form-control" placeholder="fill username"/>

		</div>

		<div class="form-group">
			<label class="control-label">Email</label>
			<input formControlName="Email" class="form-control" placeholder="fill email" email="true" />
		</div>

    <div class="form-group">
        <label class="control-label">Password</label>
        <input formControlName="Password" type="password" class="form-control" placeholder="please enter ur password">
    </div>

	</div>
  <button class="btn btn-primary  btn-sm" type="submit">save</button>
</form>


//ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        UserName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[Ͱ-ϾA-Za-z0-9]+$')]],
        Email: ['', Validators.required],
        Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
      });

      //English alphanumeric - ^[A-Za-z0-9]+$
      //Greek+English alphanumeric - ^[Ͱ-ϾA-Za-z0-9]+$
      //Greek regex - https://apps.timwhitlock.info/js/regex   ref -  https://unicode.org/charts/PDF/U0370.pdf
      //password regex - https://stackoverflow.com/a/49442394
      //validation custom class - https://www.tutsmake.com/angular-7-advance-form-validation/
  }

    // convenience getter for easy access to form fields - https://jasonwatmore.com/post/2019/06/14/angular-8-reactive-forms-validation-example
    get f() { return this.registerForm.controls; }


    onSubmit() {
      this.submitted = true;
      
      if (this.registerForm.invalid) {
          return;
      }

      //https://malcoded.com/posts/angular-fundamentals-reactive-forms/
      const x: User = Object.assign({}, this.registerForm.value);

      //old - working way
      // const controls = this.registerForm.controls;
      // let x = Object.keys(controls).reduce((oldVal, key) => {
      //   return { ...oldVal, [key]: controls[key].value };
      // }, {});

      console.log(x);

      // display form values on success
      alert('SUCCESS!! :-)\n\nPress F12 to see console!\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


}

export class User {
    UserID: number;
    Username: string;
    Email: string;
  }

//can't bind to 'formGroup' since it isn't a known property of 'form'
//ref - ReactiveFormsModule - https://stackoverflow.com/a/39152110


//module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

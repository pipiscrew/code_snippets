//html
<form [formGroup]="registerForm" (ngSubmit)="onSubmit()"> <!--HERE-->

  <div class="form-group">
      <label class="control-label">Username</label>
      <input formControlName="UserName" class="form-control" placeholder="Fill username..."/>
  </div>

  <div class="form-group">
    <label class="control-label">Roles</label>
    <div class="form-group" formGroupName="Roles"> <!--HERE-->
      <div class="checkbox">
        <label>
          <input type="checkbox" formControlName="Role1">
          admin user
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" formControlName="Role2">
          super user
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" formControlName="Role3">
          entry user
        </label>
      </div>

      <div class="checkbox">
        <label>
          <input type="checkbox" formControlName="Role4">
          storage user
        </label>
      </div>

      <div class="checkbox">
        <label>
          <input type="checkbox" formControlName="Role5">
          desk user
        </label>
      </div>
    </div>
  </div>
 <br/>
      <br/>
  <div class="modal-footer">
      <button class="btn btn-primary  btn-sm" type="submit">Checked as array</button>
      <br/>
      <br/>
      <button class="btn btn-primary  btn-sm" (click)="getOBJ($event)">as object</button>
  </div>
</form>

//ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {
  registerForm: FormGroup;


  ngOnInit() {
    /*
      formGroupName and formControlName attributes work by finding a control with that particular name within the parent FormGroup.
      src - https://stackoverflow.com/a/50320732
    */
    this.registerForm = new FormGroup({
      UserName:new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[Ͱ-ϾA-Za-z0-9]+$')]),
      Roles:new FormGroup({
        Role1:new FormControl(false),
        Role2:new FormControl(false),
        Role3:new FormControl(false),
        Role4:new FormControl(false),
        Role5:new FormControl(false),
      })

    });
  }


  onSubmit() {

    console.log(this.registerForm.get('Roles').value); // or console.log(this.registerForm.value.Roles);

    //es2017 - Object.entries
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    let selectedPreferences = Object.entries(this.registerForm.value.Roles)
    .map(function(x){
      return x;
    })
    .filter(value => value[1] == true);

    console.log(selectedPreferences);

    alert('Press F12 to see console!\n\n' + JSON.stringify(selectedPreferences, null, 4));

  }

  getOBJ(event){
    event.preventDefault(); //prevent form submission

    /*
    is valid for WebAPI (server side) when declared as :
    
    public Dictionary<string, bool> Roles { get; set; }
    */

    let Roles : { [key: string]: boolean; };
    Roles = {};

    Object.entries(this.registerForm.value.Roles)
                        .map(function(role){
                          return role;
                        })
                        .forEach( function(selectedRole){
                          //selectedRole[1]==true because the data coming as [string , unknown][] by map^
                          Roles[selectedRole[0]] = selectedRole[1]==true;
                        })

    console.log(Roles);

    alert('Press F12 to see console!\n\n' + JSON.stringify(Roles, null, 4));

  }
  
}

//module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
        ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

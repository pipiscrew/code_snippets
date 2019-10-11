//parent.html
  <div class="page-header">
    <h2>test</h2>
    <hr/>
  </div>

  <app-user-modal></app-user-modal>


//modal.html | app-user-modal selector
    <div class="card-body">
    <button class="btn btn-primary" (click)="open(content)">Εισαγωγή Νέου</button>
    <ng-template #content let-c="close" let-d="dismiss">
        <div id="hi" class="modal-header">
            <h4 class="modal-title">Modal title</h4>
            <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <form #myass [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="modal-body">
                <p *ngIf="submitted && updated" class="alert alert-success">Επιτυχής ενημέρωση!</p>
                <p *ngIf="submitted && serverError" class="alert text-center alert-danger">{{ serverErrorDescription }}</p>
                <p *ngIf="submitted && f.Name.errors" class="alert text-center alert-danger">To 'Όνομα Χρήστη' είναι υποχρεωτικό</p>
                <p *ngIf="submitted && f.Name.errors?.pattern" class="alert text-center alert-danger">Χρησιμοποιήστε για 'Όνομα Χρήστη' μόνο αλφαριθμητικά</p>
                <p *ngIf="submitted && f.Name.errors?.minlength" class="alert text-center alert-danger">To 'Όνομα Χρήστη' είναι πρέπει να είναι πάνω από 1 χαρακτήρα</p>
                <p *ngIf="submitted && f.Surname.errors" class="alert text-center alert-danger">To 'Επώνυμο Χρήστη' είναι υποχρεωτικό</p>
                <p *ngIf="submitted && f.Surname.errors?.pattern" class="alert text-center alert-danger">Χρησιμοποιήστε για 'Επώνυμο Χρήστη' μόνο αλφαριθμητικά</p>
                <p *ngIf="submitted && f.Surname.errors?.minlength" class="alert text-center alert-danger">To 'Επώνυμο Χρήστη' είναι πρέπει να είναι πάνω από 1 χαρακτήρα</p>
                <p *ngIf="submitted && f.UserName.errors" class="alert text-center alert-danger">To 'Username' είναι υποχρεωτικό</p>
                <p *ngIf="submitted && f.UserName.errors?.minlength" class="alert text-center alert-danger">To 'Username' είναι πρέπει να είναι πάνω από 3 χαρακτήρες</p>
                <p *ngIf="submitted && f.UserName.errors?.pattern" class="alert text-center alert-danger">Χρησιμοποιήστε για 'Username' μόνο αλφαριθμητικά</p>
                <p *ngIf="submitted && f.Email.errors"  class="alert text-center alert-danger">Το 'email' δεν είναι έγκυρο</p>
                <p *ngIf="submitted && f.Password.errors?.required"  class="alert text-center alert-danger">Ο 'κωδικός' είναι υποχρεωτικός</p>
                <!-- <p *ngIf="submitted && f.Password.errors?.minlength"  class="alert text-center alert-danger">Ο 'κωδικός' πρέπει να είναι 8 χαρακτήρες</p> -->
                <p *ngIf="submitted && f.Password.errors?.pattern"  class="alert text-center alert-danger">Ο 'κωδικός' πρέπει να είναι 8 χαρακτήρες να είναι πεζά/κεφαλαία και να έχει τουλάχιστον 1 σύμβολο και 1 νούμερο</p>
                <p *ngIf="submitted && f.isActive.errors"  class="alert text-center alert-danger">Η 'Κατάσταση' δεν είναι έγκυρη</p>
                <p *ngIf="submitted && f.EmailConfirmed.errors"  class="alert text-center alert-danger">Η 'Κατάσταση email' δεν είναι έγκυρη</p>

                <div class="form-group">
                        <label class="control-label">Όνομα Χρήστη</label>
                        <input formControlName="Name" class="form-control" placeholder="Συμπληρώστε το Όνομα Χρήστη..."/>
                </div>

                <div class="form-group">
                        <label class="control-label">Επώνυμο Χρήστη</label>
                        <input formControlName="Surname" class="form-control" placeholder="Συμπληρώστε το Επώνυμο Χρήστη..."/>
                </div>

                <div class="form-group">
                    <label class="control-label">Username</label>
                    <input formControlName="UserName" class="form-control" placeholder="Συμπληρώστε το Username..."/>
                </div>
        
                <div class="form-group">
                    <label class="control-label">Email</label>
                    <input formControlName="Email" class="form-control" placeholder="Συμπληρώστε το Email Χρήστη..." email="true" />
                </div>
        
                <hr />
                <h4>Κανόνες</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="well">
                            <p>Ο κωδικός πρόσβασης πρέπει να συμβαδίζει με τους ακόλουθους κανόνες:</p>
                            <ul>
                                <li>Μήκους τουλάχιστον 8 χαρακτήρες</li>
                                <li>Τουλάχιστον 1 σύμβολο(π.χ. $@$!%*#?&)</li>
                                <li>Τουλάχιστον 1 νούμερο</li>
                                <li>Τουλάχιστον 1 λατινικό γράμμα</li>
                            </ul>
                            <p>Το όνομα χρήστη πρέπει να συμβαδίζει με τους ακόλουθους κανόνες:</p>
                            <ul>
                                <li>Μήκους μέχρι 10 χαρακτήρες</li>
                                <li>Να περιέχει μόνο λατινικούς χαρακτήρες, αριθμούς και τα σύμβολα _ @</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">Κωδικός</label>
                            <input formControlName="Password" type="password" class="form-control" placeholder="Συμπληρώστε τον Κωδικό Χρήστη...">
                        </div>
        
                        <div class="form-group">
                            <label class="control-label">Κατάσταση</label>
                            <select formControlName="isActive" class="form-control">
                                <option value=true>Ενεργός</option>
                                <option value=false>Ανενεργός</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Κατάσταση Email</label>
                            <select formControlName="EmailConfirmed" class="form-control">
                                <option value=true>Επαληθευμένο</option>
                                <option value=false>Μη επαληθευμένο</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ρόλοι</label>
                            <div class="form-group" formGroupName="Roles">
                                 <div class="checkbox">
                                    <label>
                                        <input type="checkbox" formControlName="Customer">
                                        Πελάτης
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" formControlName="Admin">
                                        Διαχειριστής
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" formControlName="Moderator">
                                        Καταχωρητής
                                    </label>
                                </div>
        
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" formControlName="ReportRequestsAdmin">
                                        Αξιολογητής Αιτημάτων Έρευνας
                                    </label>
                                </div>
        
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" formControlName="MISUser">
                                        Χρήστης MIS
                                    </label>
                                </div>
        
                            </div>
        
        
                        </div>
        
                    </div>
                </div>
        
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary  btn-sm" type="submit">Αποθηκευση</button>
            </div>
        </form>
    </ng-template>
</div>


//modal.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { User } from '../users-common/users-model';
import { UsersApiService } from '../users-common/users-service'


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})

export class UserModalComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  updated: boolean = false;
  modalRef: NgbModalRef;
  serverError: boolean = false;
  serverErrorDescription : string;

  //closeResult: string;

  constructor(private apiService: UsersApiService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      Name:new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[Ͱ-ϾA-Za-z0-9]+$')]),
      Surname:new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[Ͱ-ϾA-Za-z0-9]+$')]),
      UserName:new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[Ͱ-ϾA-Za-z0-9]+$')]),
      Email:new FormControl('', Validators.required),
      Password:new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      isActive:new FormControl('', Validators.required),
      EmailConfirmed:new FormControl('', Validators.required),
      Roles:new FormGroup({
        Customer:new FormControl(false),
        Admin:new FormControl(false),
        Moderator:new FormControl(false),
        ReportRequestsAdmin:new FormControl(false),
        MISUser:new FormControl(false),
      })

    });
  }

  //button clicked
  open(content) {

    //avoid modal close by ESC or by clicking outside the modal - https://stackoverflow.com/a/41590107
    //https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/modal/modal-config.ts
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    };

    this.modalRef = this.modalService.open(content, ngbModalOptions);

    this.modalRef.result.then((data) => {
      this.updated = false;
      this.serverError = false;
      this.submitted = false;
      this.registerForm.reset();
    }, (reason) => {
      this.updated = false;
      this.serverError = false;
      this.submitted = false;
      this.registerForm.reset();
    });

  }


  // convenience getter for easy access to form fields by HTML
  get f() { return this.registerForm.controls; }



  onSubmit() {
    this.submitted = true;
    
    let el = document.getElementById('hi');
    el.scrollIntoView();
    
    if (this.registerForm.invalid) {
      return;
    }

    let user: User = Object.assign({}, this.registerForm.value);
    user.Roles = {};
    Object.entries(this.registerForm.value.Roles)
                        .map(function(role){
                          return role;
                        })
                        .forEach( function(selectedRole){
                          user.Roles[selectedRole[0]] = selectedRole[1]==true;
                        })

    this.apiService.createUser(user).subscribe(
      res => {
        this.updated = true;
        
        //this.modalRef.close();
      },
      err => {        
        if (err.error.Message)
        {
          var errMessage = err.error.Message;

          switch (errMessage) {
            case "USERALREADYEXISTS" :
                this.serverErrorDescription = "Ο χρήστης υπάρχει ήδη";
                break;
            default : 
                this.serverErrorDescription = "Σφάλμα κατά την επικοινωνία με τον εξυπηρετητή";
                break;
           }
          
        }
        this.serverError = true;
      }
    );
  }
}

//module.ts
import { UsersOverviewComponent } from './../../../app/Entities/Users/users-overview/users-overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserRoutes } from './users-common/users-routes';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UserModalComponent } from './user-modal/user-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersApiService } from './users-common/users-service';

@NgModule({
  declarations: [UsersOverviewComponent,UserViewComponent,UserModalComponent],
  imports: [
    CommonModule,
    UserRoutes,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers:[UsersApiService]
})
export class UsersModule { }


//package.json
  "dependencies": {
    "@angular/animations": "8.0.0",
    "@angular/common": "8.0.0",
    "@angular/compiler": "8.0.0",
    "@angular/core": "8.0.0",
    "@angular/forms": "8.0.0",
    "@angular/platform-browser": "8.0.0",
    "@angular/platform-browser-dynamic": "8.0.0",
    "@angular/router": "8.0.0",
    "@ng-bootstrap/ng-bootstrap": "4.2.1",
    "chart.js": "2.7.3",
    "class-transformer": "^0.2.3",
    "core-js": "2.5.7",
    "font-awesome": "4.7.0",
    "ng2-charts": "2.3.0",
    "ng2-completer": "^3.0.2",
    "ng2-smart-table": "^1.5.0",
    "rxjs": "6.5.2",
    "tslib": "^1.9.0",
    "yarn": "1.16.0",
    "zone.js": "~0.9.1"
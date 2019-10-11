<form [formGroup]="registerForm" (ngSubmit)="onSubmit()"> <!--HERE-->

  <div class="form-group">
      <label class="control-label">Username</label>
      <input formControlName="UserName" class="form-control" placeholder="Fill username..."/>
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
  onSubmit() {

    console.log(this.registerForm.get('UserName').value); // or console.log(this.registerForm.value.Roles);

}

  getOBJ(event){
    event.preventDefault(); //prevent form submission
  }
  
  //or
    onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
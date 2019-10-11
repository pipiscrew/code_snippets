//set HTML element value
  ngOnInit() {
    
    this.recoverForm = new FormGroup({
      username: new FormControl('', Validators.required),
      newpassword: new FormControl('',[ Validators.required])
    });

    this.recoverForm.get("username").setValue("Sadf");
//or
//  this.recoverForm.patchValue({ username : "test" });
  }
//https://angular.io/guide/form-validation
//cutted from https://stackoverflow.com/a/51606362 w/ formBuilder
//https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2  w/ formBuilder
passwordMatch - w/o formBuilder used

  ngOnInit() {

    this.recoverForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl()
    }, this.checkPasswords );
  }

  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
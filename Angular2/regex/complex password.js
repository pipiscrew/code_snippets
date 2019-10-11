//https://www.tutsmake.com/angular-7-advance-form-validation/

Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[!@#$&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$')]]
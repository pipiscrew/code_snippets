//https://netbasal.com/angular-reactive-forms-tips-and-tricks-bb0c85400b58
//Control Validation
	export class AppComponent  {
	  control = new FormControl(null, dummyValidator);
	}
	
	function dummyValidator(control: FormControl) {
	  console.log('checking...')
	  return null;
	}
	
	// Complex validation requirements — updating such a form on every keystroke could become too costly.
	// The way we get around this is by using the updateOn property. We can tell Angular that we only
	// want to run the validation function upon submit or blur. 
	
	export class AppComponent {
	
	  control = new FormControl(null, {
	    validators: Validators.minLength(4),
	    updateOn: 'blur'
	  });
	
	}
	
//Control Disabling
	/*
	As you may know, when we need to disable or enable a control we can call the control.disable() or control.enable() methods.
	
	That’s helpful, but sometimes we want to tell Angular that this control is disabled on the initialization face. We can achieve this by passing an object to our FormControl constructor.
	*/
	new FormGroup({
	  name: new FormControl({ disabled: true, value: null }),
	  email: new FormControl()
	})
	
	/* But there’s one catch there. The value property will omit controls that are disabled. So, in the above
	 example, we’ll only get the email control value. In most cases, this is not the desired behavior. In order to get the complete
	 form’s values, we can use the  method.*/
 
 	FormGroup.getRawValue();
 	
 	
 	
 //Control Getters and Setters
 //Angular provides the group with a get() method, and I find it to be a more preferable option.
	 group = new FormGroup({
	  name: new FormControl()
	})
	
	ngOnInit() {
	//const name = this.group.controls.name;
	  const name = this.group.get('name')
	}
 
 
 
 //Control set value
 //https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
	 (<FormControl>this.registerForm.get('UserName'))
	    .setValue('Jodhn', { onlySelf: true });
	    
	    //or
	    
	(<FormControl>this.myForm.controls['name'])
	    .setValue('John', { onlySelf: true });
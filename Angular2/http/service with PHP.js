//http://www.pipiscrew.com/2017/03/angular2-adding-service-to-interact-with-a-php-web-service/

//component.html
	<form (ngSubmit)="tryLogin(myForm.value)" #myForm="ngForm">
		<div layout="column">
			<div flex>
				<md-input-container>
				  <input mdInput placeholder="Username" name="username" ngModel required>
				</md-input-container>
			</div>
			<div flex>
				<md-input-container>
				  <input mdInput placeholder="Password" name="password" ngModel required>
				</md-input-container>
			</div>
		</div>
		<button md-raised-button color="accent" type="submit">Log in</button>
	</form>

//component.ts
	import { Component } from '@angular/core';
	import { WebService } from './service';
	
	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css'],
	  providers: [WebService]
	})
	
	export class AppComponent {
	  title = 'app works!';
	  
	  constructor(private webService: WebService) { }
	  
	  tryLogin(form_data: any){
		  
		this.webService.loginUser(form_data).map(res => res.json()).subscribe((data)=> console.log(data), (err) => console.log("error occured", err));
		
	    console.log(form_data);
	    console.log(form_data.username);
	  }
	}

//service.ts
	import { Injectable } from '@angular/core';
	import { Http, Headers } from '@angular/http';
	import 'rxjs/Rx';
	
	@Injectable()
	export class WebService {
		
		constructor (private http: Http) {}
		
		public loginUser(f : any) {
			
			let body = JSON.stringify(f);
			
			let headers = new Headers();
			headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			
			return this.http.post("http://localhost/login.php", body, {headers});
		  }
	}
	
//or @ service.ts
	public loginUser(user:string, password:string) {
	
	//@ component.ts
	this.webService.loginUser(form_data.username, form_data.password)..
	
	
//login.php
	// http://php.net/manual/en/function.key.php
	// http://stackoverflow.com/a/467187  --  What is the max key size for an array in PHP? - A quick test got me a key of 128mb no problem.
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$_POST = json_decode(key($_POST), true);
		var_dump($_POST);
	}

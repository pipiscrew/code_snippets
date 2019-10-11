/*
http://restlet.com/company/blog/2016/08/29/whats-new-in-the-http-module-of-angular-2/
https://angular.io/docs/ts/latest/api/http/index/URLSearchParams-class.html

angular2 by default understand the object and pass the proper header type

for example :
if the object created by JSON.stringify will add 
	'Content-Type': 'application/json'
	^Warning - this is not compatible with PHP - http://stackoverflow.com/a/24140930
	
if we use URLSearchParams will add 
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	^And we can use at PHP as usual
*/

//service.ts
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WebService {
	
	constructor (private http: Http) {}
	
	public loginUser(user:string, password:string) {
		/*
		let g = {
			'name' : user,
			'password' : password
		}
		let body = JSON.stringify(g);
		*/
		
		let body = new URLSearchParams();
		body.set('name', user);
		body.set('password', password);
		
		return this.http.post("http://localhost/login.php", body);
	  }
}


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
	    
	  constructor(private webService: WebService) { }
	  
	  tryLogin(form_data: any){
		  
		this.webService.loginUser(form_data.username, form_data.password).map(res => res.json()).subscribe((data)=> console.log(data), (err) => console.log("error occured", err));
		
	    console.log(form_data);
	    console.log(form_data.username);
	  }
	}

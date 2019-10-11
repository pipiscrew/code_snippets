//observable way

	//service.ts
	public loginUser() {
		return this.http.get("http://localhost/login.php");
	  }
	  
	//component.ts
	this.webService.loginUser().subscribe((data)=> console.log(data), (err) => console.log("error occured", err));

//convert observable to promise if you want something to be returned
//(as promises are not lazy) http://stackoverflow.com/a/38785303
//http://stackoverflow.com/a/40111331

//service.ts
	import { Injectable } from '@angular/core';
	import { Http,Headers,Response,RequestOptions } from '@angular/http';
	import 'rxjs/Rx';
	
	@Injectable()
	export class WebService {
		
		constructor (private http: Http) {}
		
		public loginUser() {
			return this.http.get("http://localhost/login.php").toPromise();
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
	  title = 'app works!';
	  
	  constructor(private webService: WebService) { }
	  
	  tryLogin(form_data: any){
		  
		this.webService.loginUser().then((data)=> console.log(data), (err) => console.log("error occured", err));
		//or
		//this.webService.loginUser().then(response=> {	console.log(response.jsom);				});
		
	    console.log(form_data);
	    console.log(form_data.username);
	  }
	}

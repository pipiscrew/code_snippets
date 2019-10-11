//all observable operators
//https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/categories.md

//http://moduscreate.com/observables-and-promises/

//return JSON with map (doesnt work with promise)
this.webService.loginUser().map(res => res.json()).subscribe((data)=> console.log(data), (err) => console.log("error occured", err));

/* more options with observable 
        this.getQuote()
            .retry(2) // in case of error, try 1 more time
            .repeat(3) // do this 3 times
            .map(res => res.json()) // convert response to json
            .filter(res => res.length > 0) // drop empty array responses
            .map(res => res[0].content.replace(/\<.*?\>/g, ''))
            .subscribe(quote => {
                this.qlist.push(quote);
            }, e => console.log(e.message));
    }
*/

//service.ts
	import { Injectable } from '@angular/core';
	import { Http,Headers,Response,RequestOptions } from '@angular/http';
	import 'rxjs/Rx';
	
	@Injectable()
	export class WebService {
		
		constructor (private http: Http) {}
		
		public loginUser() {
			return this.http.get("http://localhost/login.php");
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
		  
		this.webService.loginUser().subscribe((data)=> console.log(data), (err) => console.log("error occured", err));
		
	    console.log(form_data);
	    console.log(form_data.username);
	  }
	}

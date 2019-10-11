//http://stackoverflow.com/questions/39408413/angular2-http-post-how-to-send-authorization-header


import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
 
@Injectable()
export class WebService {
	
	constructor (private http: Http) {}
	
	public loginUser(f :any) {
		
		let body = JSON.stringify(f);
		
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		headers.append("Authorization","Basic YW5ndWxhci13YXJlaG91c2Utc2VydmljZXM6MTIzNDU2");
		
		return this.http.post("http://localhost/login.php", body, {headers});
	  }
}


//when play on diff server 
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, x-requested-with, authorization');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, x-requested-with, authorization');

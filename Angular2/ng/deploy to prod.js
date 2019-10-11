//NEVER USE FOLDER WITH NUMBER, PHP SESSION DOESNT WORK!!!

//on the project root where package.json exists, execute 

ng build --prod 

//and fix it by hand


//will be a dist folder on the same folder

warning :
1-
//if you will deploy to a non root folder aka http://example.com/sd

//you have to set it at base url tag at index.html, example for http://example.com/an/login/ must be :

  <title>AngularProject</title>
  <base href="/an/login/">

//or use :

ng build --prod --base-href /an/login/

2-
//src - https://medium.com/@balramchavan/separating-production-and-development-http-urls-using-environment-ts-file-in-angular-4c2dd0c5a8b0
apart from baseURL, the httpclient at typescipt as for example, this working on debug or on www root :
  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

but when the project uploaded to http://example.com/sd

will search for http://example.com/api/database.php and not inside to subfolder sd!


the solution is :
by default the folder environments, 

AngularProject\src\environments

contains the environments.ts + environments.prod.ts

when you execute the build replaces the environments.ts with the prod.ts!

so, will have to set always #baseUrl property# there!

//environments.ts
export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200'
};


//environment.prod.ts
export const environment = {
  production: true,
  baseUrl: 'https://pipiscrew.com/an/login'
};

then on code we using always :

import { environment } from 'src/environments/environment';

export class UserService {
	
	private baseUrl = environment.baseUrl;
	
	getSomeData() {
	return this.http.get<myData>(this.baseUrl + '/api/database.php')
	}
  

tested&working + with #proxy.config.json# all working flawless!
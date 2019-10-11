//http://stackoverflow.com/a/37152720/1320686

import { LoginService } from './login/login.service';
import { AuthGuard } from './app.routing.guard.service';

//app.module.ts
providers: [AuthGuard, LoginService],

//app.routing.guard.service.ts can reference login.service.ts
import { LoginService } from './login/login.service';
	constructor(private loginService: LoginService) {}
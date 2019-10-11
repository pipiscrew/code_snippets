//https://thinkster.io/tutorials/angular-2-http

//service.ts
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    .map((res:Response) => res.json());
  }

}

//component.ts
import { Component } from '@angular/core';
import { UserService } from './shared/index';

@Component({
  selector: 'home-page',
  template: `
  <div>
    <button (click)="loadUser()">Load profile</button>
    {{ profile | json }}
  </div>
  `
})

export class HomeComponent {
  constructor(private userService: UserService) {}
  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
}
//https://angular.io/docs/ts/latest/guide/router.html
//example - https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

//live in app.module.ts

//a route can be define as :
import { RouterModule }   from '@angular/router';
import { HeroesComponent }     from './heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	MaterialModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
  ])],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],


/*
This route definition has the following parts:

path: the router matches this route's path to the URL in the browser address bar (heroes).
component: the component that the router should create when navigating to this route (HeroesComponent).
*/

// adding a <router-outlet> element to the bottom of the template. RouterOutlet is one of the directives
// provided by the RouterModule. The router displays each component immediately below the <router-outlet>
//as we navigate through the application.

     <h1>{{title}}</h1>
     <a routerLink="/heroes">Heroes</a>
     <router-outlet></router-outlet> 
     
//tip having multiple routes using the same router-outlet
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
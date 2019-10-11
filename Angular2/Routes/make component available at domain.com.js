import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroService }         from './hero.service';
import { RouterModule }   from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	MaterialModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
	  {
		  path: 'dashboard',
		  component: DashboardComponent
	  },
	  {
		  path: '',
		  redirectTo: '/dashboard',
		  pathMatch: 'full'
	},
  ])],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}

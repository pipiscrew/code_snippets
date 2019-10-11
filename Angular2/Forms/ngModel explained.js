//http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/

/*
When ngModel is without attribute value is #one-way data binding#

examples for #two-way data binding#
	Example 1: <input [(ngModel)]="person.firstName" name="first">
	Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">
*/


//module.ts must import :
import { FormsModule } from '@angular/forms';


//component.html
	<h1>
	  {{title}}
	</h1>
	
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
	
	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
	})
	export class AppComponent {
	  title = 'app works!';
	  
	  tryLogin(data: any){
	    console.log(data);
	    console.log(data.username);
	  }
	}


//https://gist.github.com/greatb/c791796c0eba0916e34c536ab65802f8

//cookie.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }

  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = name + "=";
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s\+/g, "");
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return "";
  }

  public deleteCookie(name) {
    this.setCookie(name, "", -1);
  }

  public setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

}

//x.component.ts
import { CookieService } from './cookie.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CookieService]
})
 
export class AppComponent {
    constructor(private cookieService : CookieService) { }
     
    save_json(){
        let g = JSON.stringify(this.canvas);
 
        if (g!=null) {
            this.cookieService.setCookie("default", g, 255);
 
            alert ("My lord, saved!");
        }
    }
 
    load_json(){
       let json= this.cookieService.getCookie("default");
         
        //check if record exist!
        if (json!=null && json) {
              var self = this; //scope variable
             
              this.canvas.loadFromJSON(json, function(){ //canvas is a component, for the shake of example
                 self.canvas.renderAll(); //catch it at callback
                 
                 alert ("My lord, loaded!");
              });
        } else {
            alert("No saved record found!");
        }
    }
 
    del_record(){
        if (confirm('This action delete the saved record, are you sure ?')) {
             this.cookieService.deleteCookie("default");
             alert ("My lord, deleted!");
        }
    }
}

//x.component.html
<button type="button" (click)="save_json()">Save</button>
<button type="button" (click)="load_json()">Load</button>
<button type="button" (click)="del_record()">Delete Record</button>
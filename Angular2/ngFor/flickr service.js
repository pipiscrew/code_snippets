//x.component.html
	<ul>
	  <li *ngFor="let item of flickrOBJ">
		<img src="{{item.url_t}}" (click)="add_picture(item.url_t)">
	  </li>
	</ul>
	<button type="button" (click)="callFlickr()">Get new images!</button>

//flickr.service.ts
	import { Injectable } from '@angular/core';
	import { Http } from '@angular/http';
	import 'rxjs/Rx';
	
	@Injectable()
	export class FlickrService {
	constructor (private http: Http) {}
	
	    
	public getImages() {
	        return this.http.post("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=5&format=json&nojsoncallback=1&extras=url_t&api_key=0eb28a07a69f09f148ce289", "");
	    }
	    
	}

//x.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FlickrService } from './flickr.service';
import { CookieService } from './cookie.service';

declare var fabric: any;
declare var jsPDF: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrService, CookieService]
})

export class AppComponent implements OnInit,AfterViewInit {
	private canvas;

	private flickrOBJ: any[] = [];

	title = "flickr annotation app!";

	constructor(private flickrService: FlickrService, private cookieService : CookieService) { }

	
	//pictures click - add picture to canva!
	add_picture(img_url: string ){
		console.log(img_url);

		var self = this; //scope variable
		
		fabric.Image.fromURL(img_url, function(image) {
			
			image.set({
				left: self.getRandomInt(100, 300),
				top: self.getRandomInt(10, 300),
				angle: self.getRandomInt(1, 100)
			}).setCoords();

			self.canvas.add(image);
		});
	  
		this.canvas.renderAll();   
	}

	
	//clear canva button click
	clearCanva(){
		if (confirm('This action will clear the objs, are you sure ?')) {
		  this.canvas.clear();
		}
	}


	//save canva button click
    save_pdf(){
		this.canvas.getContext('2d');
		var imgData = this.canvas.toDataURL('png');
		var pdf = new jsPDF('p', 'mm', [297, 210]);
		pdf.addImage(imgData, 'JPEG', 5, 5);
		var namefile = "test";
		pdf.save(namefile + ".pdf");
    }

	
	//save canva to cookie button click
    save_json(){
        let g = JSON.stringify(this.canvas);

        if (g!=null) {
            this.cookieService.setCookie("default", g, 255);

            alert ("My lord, saved!");
        }
    }

	
	//load canva by cookie button click
    load_json(){
       let json= this.cookieService.getCookie("default");
        
        //check if record exist!
        if (json!=null && json) {
            var self = this;
            
            this.canvas.loadFromJSON(json, function(){
              self.canvas.renderAll();
                
                alert ("My lord, loaded!");
            });
        } else {
            alert("No saved record found!");
        }
    }

	
	//delete cookie button click
    del_record(){
        if (confirm('This action delete the saved record, are you sure ?')) {
             this.cookieService.deleteCookie("default");
             alert ("My lord, deleted!");
        }
    }

	
	//procedure to fill the class array tied with ngFor @ front
    callFlickr() {
        this.flickrService.getImages().subscribe((data) => {
          console.log(data['_body']);
                                                                console.log(JSON.parse(data['_body']).photos.photo);
                                                                this.flickrOBJ = (JSON.parse(data['_body']).photos.photo);
                                                            }, (err) => console.log("error occured", err));

    }
	

    //generates random int (used by add_picture method)
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
	
    //on load ask flickr for images
    ngOnInit(){
        this.callFlickr();
    }

	
	//instantiate the canva!
	ngAfterViewInit() {
		
		this.canvas = new fabric.Canvas('canvas', {
		  preserveObjectStacking: true,
		  backgroundColor:"red"
		});
		
	}
}



//http://www.pipiscrew.com/2017/03/use-of-javascript-libraries-to-angular-component/

1-Declare the javascript to index.html example :

	//index.html
	<script src="assets/jspdf.js"></script>

2-At the x.component.ts
	import { Component } from '@angular/core';
	
	//http://stackoverflow.com/a/40750232
	declare var jsPDF: any;
	
	export class AppComponent {
	    save_pdf(){
			 var imgData = this.canvas.toDataURL('png'); //another component
		
		     //here understands the jsPDF from the loaded JS
			 var pdf = new jsPDF('p', 'mm', [297, 210]);
			 pdf.addImage(imgData, 'JPEG', 5, 5);
			 pdf.save("test.pdf");
	    }
	}

//Another thing to point out here is, when we instantiate the class variable. 
//We using the ngAfterViewInit 

//The x.component.ts become :
import { Component, AfterViewInit } from '@angular/core';
declare var fabric: any;

export class AppComponent implements AfterViewInit {
    private canvas;

    //instantiate the canva!
    ngAfterViewInit() {
	    //https://embed.plnkr.co/y2WwmF2Y80cFNlatR7rb/
	    this.canvas = new fabric.Canvas('canvasELEMENT', {
		    preserveObjectStacking: true,
		    backgroundColor:"red"
	    });
    }
}


//The x.component.html
<canvas id="canvasELEMENT" width="600" height="600"></canvas>


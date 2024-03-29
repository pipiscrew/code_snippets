//http://js.syncfusion.com/demos/web/reportviewer/InvoiceDemo.html
//http://js.syncfusion.com/demos/web/themes/default-responsive.css

//default-responsive.css
@media (min-width: 1920px){
	.row .cols-sample-area{
	  width: 72.956%;
	  *width: 72.956%;		
	}	
	.row .cols-sample-area{
	  min-height:406px;		
	}
	.row .cols-prop-area{	   
		height: 100%;		
		min-height: 406px;		
		width: 24.9146%;
	}		
	.row [class*="col-md-3"] {
		width:46.933667%;
		margin-left:0px;
	}
	
}
@media (min-width: 1024px) and (max-width: 1920px){
	
	.row .cols-sample-area{
	  width: 72.956%;
	  *width: 72.956%;		
	}	
	.row .cols-sample-area{
	  min-height:406px;		
	}
	.row .cols-prop-area{	   
		height: 100%;		
		min-height: 406px;
		width: 24.9146%;
		
	}		
	.cols-prop-area  [class^="col-md-"] {
		width:46.933667%;
		margin-left:0px;
	}	
	
}

@media (min-width: 480px) and (max-width: 1023px){
	.row .cols-sample-area,.row .cols-prop-area{
		margin-left:0px;
		 width: 100%;
		*width: 100%; 
		margin-left:0px;
		
	}
	.cols-prop-area [class*="col-md-3"]{
		width:46.933667%;		
		margin-left:0px;
        
	}
    .prop-grid.keyboard  [class^="col-md-"]{
	height: 30px;
    min-height:30px;	
}

}

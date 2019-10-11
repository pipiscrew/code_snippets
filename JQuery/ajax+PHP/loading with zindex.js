//http://www.codeproject.com/Tips/701197/A-master-page-level-spinner-animation

<div id="SpinnerContainer"></div> 
<div id="Spinner" style="background:url(images/spinner.gif) no-repeat center #fff;"></div> 

 div#SpinnerContainer
        {
            position: absolute;    
            display: none;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: #fff;
            opacity:0.4;
            filter:alpha(opacity=40); /* For IE8 and earlier */
            z-index: 1000; /* Important to set this */
        } 
        
 div#Spinner
        { 
            position: absolute;
            display: none;
            width:50px;
            height: 50px;
            top: 48%;
            left: 48%;            
            z-index:1001;
            overflow: auto;
        } 
        
        
        function ToggleSpinnerBlock(Visible) {
            var displayValue = Visible ? "block" : "none";
            document.getElementById("SpinnerContainer").style.display = displayValue;
            document.getElementById("Spinner").style.display = displayValue;
            
            var isIE = navigator.userAgent.indexOf('MSIE') > 0;
            if (Visible && isIE) {
                $('#Spinner').css("backgroundImage", "");
                setTimeout("AppendSpinnerImageForIE();", 10);
            }
        } 
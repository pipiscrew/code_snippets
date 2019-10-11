$(function() {
  // Handler for .ready() called.
});


Which is equivalent to calling:
$( document ).ready(function() {
  // Handler for .ready() called.
});


//jo JQ
      window.onload = function(){
		//your code here
        }
        
//no jQ
window.addEventListener('load', function() {
//your code here
});

//no JQ
//Weighing in at 62 characters. The shortest DOMReady code, ever.
function r(f){/in/(document.readyState)?setTimeout(r,9,f):f()}
//http://www.dustindiaz.com/smallest-domready-ever
//And of course one final note, nothing will be able to beat the built-in DOM event at 47 characters (although it won't fire after being loaded once).
document.addEventListener('DOMContentLoaded',f)


//////////////////////EXAMPLE WITH INTERVAL 
      
      window.onload = function(){
		  var g1 = new JustGage({
			id: "g1", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Custom Width",
			label: "",    
			gaugeWidthScale: 0.2          
		  });
		  
		  var g2 = new JustGage({
			id: "g2", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Custom Shadow",
			label: "",    
			shadowOpacity: 1,
			shadowSize: 0,
			shadowVerticalOffset: 10        
		  });
		  
		  var g3 = new JustGage({
			id: "g3", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Custom Colors",
			label: "",  
			levelColors: [
			  "#00fff6",
			  "#ff00fc",
			  "#1200ff"
			]          
		  });
		  
		  var g4 = new JustGage({
			id: "g4", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Hide Labels",
			showMinMax: false       
		  });
		 
		  
		  var g5 = new JustGage({
			id: "g5", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Animation Type",
			label: "",  
			startAnimationTime: 2000,
			startAnimationType: ">",
			refreshAnimationTime: 1000,
			refreshAnimationType: "bounce"                
		  });
		  
		  var g6 = new JustGage({
			id: "g6", 
			value: getRandomInt(0, 100), 
			min: 0,
			max: 100,
			title: "Minimal",
			label: "",  
			showMinMax: false,
			gaugeColor: "#fff",
			levelColors: ["#000"],
			showInnerShadow: false,        
			startAnimationTime: 1,
			startAnimationType: "linear",
			refreshAnimationTime: 1,
			refreshAnimationType: "linear"          
		  });
		  
        setInterval(function() {
          g1.refresh(getRandomInt(0, 100));
          g2.refresh(getRandomInt(0, 100));          
          g3.refresh(getRandomInt(0, 100));
          g4.refresh(getRandomInt(0, 100));
          g5.refresh(getRandomInt(0, 100));          
          g6.refresh(getRandomInt(0, 100));
        }, 2500);
      };
    </script>
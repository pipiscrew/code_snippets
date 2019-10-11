//http://stackoverflow.com/questions/8873508/how-can-i-check-if-the-mouse-exited-the-browser-window-using-javascript-jquery

//simple:
document.onmouseout = function() {
  alert('out');
};

//Or jQuery style:
$(document).mouseout(function() {
  alert('out');
});

jQuery(document).mouseleave(function(){console.log('out')})

jQuery(document).mouseenter(function(){console.log('in')});

//ex
			$(function ()
				{
					$("#bonus").mouseover(function(){
	    				$("#bonustooltip").show();
					});
					
					$("#bonus").mouseout(function(){
	    				$("#bonustooltip").hide();
					});
					
				 <span id="bonus">Bonus</span>
				 <div id="bonustooltip" style="display: none">
					 3.5 - 150<br>
					 4.5 - 200<br>
					 5.1 - 250<br>
					 6 - Double Dragon <br>
					 7 - Sum UP<br>				 
				 </div>
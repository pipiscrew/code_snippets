<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<script type='text/javascript' src='jquery-1.11.0.min.js'></script>
<script>
	function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
	    ev.preventDefault();

		//prevent overwrite image, if dropped item (dest), hasnt init image, abort..
	    if ($("#"+ev.target.id).attr("src")!="00.png")
	    	return;
	    
	    //get the draggable element to a variable
	    var data = ev.dataTransfer.getData("text");

		//get by draggable variable the image source
	    var drag_src_photo = $("#"+data).attr("src");
	    
	    //set the image to dropped item (dest)
		$("#"+ev.target.id).attr("src",drag_src_photo);	  
		

		//working also console.log(ev.srcElement.id);

	    //ev.target.appendChild(document.getElementById(data));
	     document.getElementById(data).remove();
	}
</script>
		<script type="text/javascript">
	
			$(function() {
				

			});
		</script>
	</head>
	
	<body>
		
		<!--image dimension : 794px x 770px-->
		<img src='App_BGpng.jpg'>
		
		<img src="01.png" id="drag1" style="position: fixed;top:70px;left:25px;"  draggable="true" ondragstart="drag(event)">
		<img src="02.png" id="drag2" style="position: fixed;top:70px;left:155px;" draggable="true" ondragstart="drag(event)">
		<img src="03.png" id="drag3" style="position: fixed;top:70px;left:285px;" draggable="true" ondragstart="drag(event)">
		<img src="04.png" id="drag4" style="position: fixed;top:70px;left:420px;" draggable="true" ondragstart="drag(event)">
		<img src="05.png" id="drag5" style="position: fixed;top:70px;left:550px;" draggable="true" ondragstart="drag(event)">
		<img src="06.png" id="drag6" style="position: fixed;top:70px;left:680px;" draggable="true" ondragstart="drag(event)">
		
		
		<img src="00.png" id="drop1" style="position: fixed;top:378px;left:675px;" ondrop="drop(event)" ondragover="allowDrop(event)">
		<img src="00.png" id="drop2" style="position: fixed;top:396px;left:556px;" ondrop="drop(event)" ondragover="allowDrop(event)">
		<img src="00.png" id="drop3" style="position: fixed;top:445px;left:445px;" ondrop="drop(event)" ondragover="allowDrop(event)">
		<img src="00.png" id="drop4" style="position: fixed;top:547px;left:386px;" ondrop="drop(event)" ondragover="allowDrop(event)">
		<img src="00.png" id="drop5" style="position: fixed;top:663px;left:380px;" ondrop="drop(event)" ondragover="allowDrop(event)">
	</body>
</html>
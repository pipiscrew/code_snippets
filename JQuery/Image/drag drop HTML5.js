//http://www.w3schools.com/html/html5_draganddrop.asp

<script>
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true"
ondragstart="drag(event)" width="336" height="69">

</body>

//tweaked version


<script>

var arr = new Array();

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev,fl) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("textsrc", fl);
}

function drop(ev,el) {
    ev.preventDefault();
    
    var source_el =  ev.dataTransfer.getData("text");
    var data = ev.dataTransfer.getData("textsrc");



    $("#"+source_el).hide();

    
    $("#"+el).attr("src",'images/'+data+".png");
    
    arr.push({p: el, f:data});
    
    if (arr.length == 6)
    {
    	var x=0;
    	for(var no in arr)
    	{	if(arr[no]["p"]=="beatific_time1" && arr[no]["f"]=="05-114x114")
    			x+=1;
    		if(arr[no]["p"]=="beatific_time2" && arr[no]["f"]=="02-114x114")
    			x+=1;
    		if(arr[no]["p"]=="beatific_time3" && arr[no]["f"]=="04-114x114")
    			x+=1;  
    		if(arr[no]["p"]=="beatific_time4" && arr[no]["f"]=="03-114x114")
    			x+=1;    
    		if(arr[no]["p"]=="beatific_time5" && arr[no]["f"]=="06-114x114")
    			x+=1;  
    		if(arr[no]["p"]=="beatific_time6" && arr[no]["f"]=="01-114x114")
    			x+=1;  
    	}
    	

    
    	if (x==6)
    	 	{
    	 		//alert("swsto");
    	 	vote();
    	 	}
    	else 
    	{
    		$("#drag1,#drag2,#drag3,#drag4,#drag5,#drag6").show();
    		$("#beatific_time1,#beatific_time2,#beatific_time3,#beatific_time4,#beatific_time5,#beatific_time6").attr("src","images/114x114_gray.png");
    		//alert("la8os");
    	}
    	
    	
    	//console.log(x,arr);
    	
    	arr.length = 0;
    	
    	
    }
    
}
</script>
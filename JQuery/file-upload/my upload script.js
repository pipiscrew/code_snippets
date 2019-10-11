<script type='text/javascript' src="jquery.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>

<style>
.btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}
.dropstyle {
	    background-color: #DDDDDD;
	    
}
.dropstyle:hover,.dropstylehover {
	    background-color: #CCCCCC;
	    border:1px dashed #000000;
}
</style>

<span class="btn btn-primary btn-file" id="drop_zone">
    Browse or Drop a file <input type="file" multiple>
</span>

<br>

<output id="list"></output>

<script>

	$(function() {
		
	     $("input:file").change(function (){
	     	console.log("A");
	     	var files = $(this).prop("files")

	       	handleFileSelect(files, true);
	     });		

    });
    
  function handleFileSelect(evt,is_file_choose) {
  	$("#drop_zone").removeClass("dropstylehover");
  	console.log("B");
  	var files;
  	
  	//when files dropped
  	if (!is_file_choose){
	    evt.stopPropagation();
	    evt.preventDefault();

	    files = evt.dataTransfer.files; // FileList object.
	}
	else {
		files = evt
	}
	
	// files is a FileList of File objects. List some properties.
	var output = [];

    for (var i = 0, f; f = files[i]; i++) {
	  
      output.push('<li><span style="margin-right:5px" id="prog_'+i+'">0%</span><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', 
                  '</li>');
                  
                  uploadFile(files[i],i,"myass.jpg");
    }
    
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

	function handleDragLeave(e){
		console.log('handleDragLeave');
		$("#drop_zone").removeClass("dropstylehover");
	}

  function handleDragOver(evt) {
  	console.log('handleDragOver');
    evt.stopPropagation();
    evt.preventDefault();
    
    $( "#drop_zone").addClass("dropstylehover");
    
    evt.dataTransfer.dropEffect = 'move'; // Explicitly show this is a copy.
  }

	// upload file
	function uploadFile(file, array_pos, ftp_filename) {

	    // prepare XMLHttpRequest
	    var xhr = new XMLHttpRequest();
	    xhr.open('POST', "upload.php");
	    xhr.setRequestHeader("X-File-Name", array_pos);

	    xhr.onload = function() {
	    	    if (this.status == 200) {
			      console.log("done",this.responseText);
			    }
	    	console.log('onload');
//	        result.innerHTML += this.responseText;
//	        handleComplete(file.size);
	    };
	    xhr.onerror = function() {
	    	console.log('onerror');
//	        result.textContent = this.responseText;
//	        handleComplete(file.size);
	    };
	    xhr.upload.onprogress = function(e) {
	    	 if (e.lengthComputable) {
		    	var percentComplete = (e.loaded / e.total) * 100;
		    	$("#prog_"+array_pos).html(parseFloat(percentComplete).toFixed(2) + "%");
		    	// so its available here because of closures
		    }
	    	console.log(file); 
	    	console.log('onprogress',e);
	       // handleProgress(event);
	    }
	    xhr.upload.onloadstart = function(event) {
	    	console.log('onloadstart');
	    }
	    

	    // prepare FormData
	    var formData = new FormData();  
	    formData.append('myfile', file); 
	    formData.append('ftp_filename', ftp_filename); 
	    xhr.send(formData);
	}

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('dragleave', handleDragLeave, false);
  dropZone.addEventListener('drop', handleFileSelect, false); //also onChange, bug on multiple uploads must have this event
  
</script>



//upload.php
<?php
//var_dump($_FILES);
//var_dump($_POST);


//exit;

$filename = $_POST["ftp_filename"];
//the data got 
//array(1) { ["myfile"]=> array(5) { 
//["name"]=> string(6) "70.jpg"
//["type"]=> string(10) "image/jpeg" 
//["tmp_name"]=> string(18) "/var/tmp/php7HREDP" 
//["error"]=> int(0) ["size"]=> int(15229) } }

	$target_dir = "upload/";
	$target_file = $target_dir . $filename;//. basename($_FILES["myfile"]["name"]);
	
	if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target_file)) {
		echo "uploaded";
	} else {
	    echo "Sorry, there was an error uploading your file.";
	}
	
?>
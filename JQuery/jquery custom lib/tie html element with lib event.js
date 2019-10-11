<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">

<script type='text/javascript' src="jquery.min.js"></script>
<script type='text/javascript' src="upload.js"></script>

<span class="btn btn-primary btn-file" id="drop_zone">
    Browse or Drop a file <input type="file" id="drop_zone_fl" multiple>
</span>

<script>

	$(function() {
		$("#drop_zone_fl").upload();
	})
</script>

//upload.js
(function( $ ) {
 
  $.fn.upload = function() {
 
    // Plugin code
    return this.each( function() {
 
 	     $( this ).change(function (){
	     	console.log("A");
	     	var files = $(this).prop("files")
			console.log(files);
	       	//handleFileSelect(files, true);
     });	

	//change properties on init
	//      $( this )
	//        .data( 'original-colour', $( this ).css( 'color' ) ) //Get a reference of the original colour.
	//        .css( 'color', 'red' ); // Set the new colour to Red!
 
    });
 
  }
 
})( jQuery );
//http://www.pipiscrew.com/2015/07/jq-jquery-plugin-implement-callback/
//http://stackoverflow.com/a/6016404
//http://www.codechewing.com/library/how-to-add-callback-functions-to-jquery-plugin/

(function( $ ) {
 
$.fn.upload = function(options ) {

	var opts = $.extend({}, $.fn.upload.defaults, options);

	function uploadFile(file, array_pos, ftp_filename, overwrite) {

	    // prepare XMLHttpRequest
	    var xhr = new XMLHttpRequest();
	    xhr.open('POST', "upload.php");

	    xhr.onload = function() {
			if (this.status == 200) {
				// Fire the setup callback
				$.isFunction( opts.completed) && opts.completed.call( this, d.filename );
			}
			else {
				$.isFunction( opts.error) && opts.error.call( this);
			}
		}				
	}

	$.fn.upload.defaults = {
		single : 1,
		overwrite: 0,
		ftp_filename: 0,
		completed : null,
		error : null
	};	
}
 
})( jQuery );


//use of
	$("#product_drop_fl").upload({
		single: 1,
		overwrite : 1,
		completed : function(e) {
			$("#product_drop_fl_image").attr("src",e);
		},
		error : function() {
			$("#product_drop_fl_image").attr("src","404.jpg");
		}
	});
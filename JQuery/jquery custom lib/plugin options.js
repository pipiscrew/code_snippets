//http://www.learningjquery.com/2007/10/a-plugin-development-pattern

(function( $ ) {
$.fn.upload = function(options ) {

	var defaults = {
		single : "makis",
		ftp_filename : 0
	};

	var opts = $.extend(defaults, options);
	.
	.
	console.log(opts.single);
	
})( jQuery );

@html
	$('#myDiv').upload({
	  single: 'blue'
	});
	

////////////////////////
//OR
////////////////////////

$.fn.upload = function(options ) {

	var opts = $.extend({}, $.fn.upload.defaults, options);
	
	$.fn.upload.defaults = {
		single : true,
		ftp_filename : 0
	};
	
// this need only be called once and does not
// have to be called from within a 'ready' block
$.fn.hilight.defaults.foreground = 'blue';
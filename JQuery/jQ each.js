//http://stackoverflow.com/questions/1799284/how-to-break-exit-from-a-each-function-in-jquery

			for (var i = 0; i < jsonArray.length; i++)
				this.children('a').each( function(index, element){
					if ($(this).attr('data-name')==jsonArray[i][idColName])
					{	
						$(this).addClass('list-group-item active');
						return false; //exit for each
					}
				});
				
				
// Returning 'true' from within the loop skips to the next iteration (this is like using a 'continue' with a normal loop).
// Returning 'false' from within the each function completely stops the loop through all of the elements 
// (this is like using a 'break' with a normal loop).



//http://learn.jquery.com/using-jquery-core/iterating/
//as selector
	$( "li" ).each( function( index, element ){
	    console.log( $( this ).text() );
	});
	
//http://api.jquery.com/jquery.each/
//as vars
	jQuery.each( arr, function( i, val ) {
	  $( "#" + val ).text( "Mine is " + val + "." );
	 
	  // Will stop running after "three"
	  return ( val !== "three" );
	});
	
	$.each( [ "a", "b", "c" ], function( i, l ){
	  alert( "Index #" + i + ": " + l );
	});
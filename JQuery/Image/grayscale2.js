<style>
/*http://css-tricks.com/almanac/properties/d/display/*/

	.bw {
		display: inline-block;
	}

/*http://designshack.net/articles/css/joshuajohnson-2/*/	
	.bw:hover {
	  -webkit-filter: grayscale(100%);
	  cursor: pointer;
	}	
</style>


	<div class="bw">
		<img src="img/crud_add24.png">
	</div>

	<div class="bw">
		<img src="img/crud_delete24.png">
	</div>
	
	
	
	
//////////tut
  display: inline;        /* Default of all elements, unless UA stylesheet overrides */
  display: inline-block;  /* Characteristics of block, but sits on a line */
  display: block;         /* UA stylesheet makes things like <div> and <section> block */
  display: run-in;        /* Not particularly well supported or common */
  display: none;          /* Hide */
//select the tab
$('a[href=#competitionDetail]').tab('show');


//html
				<ul class='nav nav-tabs' id='tabContainerCOMP'>
					<li class='active'>
						<a href='#competitionDetail' data-toggle='tab'>Details</a>
					</li>
					<li>
						<a href='#competitionCauses' data-toggle='tab'>Causes</a>
					</li>
				</ul>
				
			//restore to 1st tab!
			$('#tabContainerCOMP a:first').tab('show');
			
//--------------------OLD			
//for second
//http://stackoverflow.com/questions/4784404/get-value-of-4-divs-by-first-second-nth-jquery
$('#tabContainerCOMP a:nth-child(1)').tab('show');




//http://api.jquery.com/nth-child-selector/
<div>
  <ul>
    <li>John</li>
    <li>Karl</li>
    <li>Brandon</li>
  </ul>
</div>
$( "ul li:nth-child(2)" ).append( "<span> - 2nd!</span>" );
		<div id="stat_avg" title="Votes average">
			<div id="sp_avg">
				0.0
			</div>
		</div>
		
		
		//add linebreak to title with \n
		$tooltip = get_month_back(date('m'),date('Y'),12) . '\n - \n' . $mysql_of_this_end_month . "23:59";
		

//http://stackoverflow.com/a/987974
//set jQuery (v1.6+)
$('#yourElementId').prop('title', 'your new title');

//get jQuery (v1.6+)
var elementTitle = $('#yourElementId').prop('title');


//plain JS
document.getElementById('yourElementId').title = 'your new title';
var elementTitle = document.getElementById('yourElementId').title;


		
//set jQuery (versions <1.6)
$('#yourElementId').attr('title', 'your new title');

//get jQuery (versions <1.6)
var elementTitle = $('#yourElementId').attr('title');

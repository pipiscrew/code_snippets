//http://stackoverflow.com/questions/9952320/highlighting-the-clicked-row-of-a-striped-html-table
//http://jsfiddle.net/iambriansreed/xu2AH/127/

		<style>
			.table-striped tbody tr.highlight td {
				background-color: #B0BED9;
			}
		</style>


			$(function() {

				//set selected row
				$('#productsTBL').on('click', 'tbody tr', function(event) {
					console.log("fgh");
					$(this).addClass('highlight').siblings().removeClass('highlight');
				});
			});
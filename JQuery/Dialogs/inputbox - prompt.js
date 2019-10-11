//http://www.w3schools.com/js/js_popup.asp
			$('#n_post_manage').on('click', function(e) {
				e.preventDefault();
				 var posts_week = prompt("Please write posts/week", "PipisCrew");
				 
				 if (!posts_week || (!parseInt(posts_week)))
				 	return;
				 	
				 	
				 var budget_month = prompt("Please write cost/month", "PipisCrew");
				 
				 if (!budget_month || (!parseInt(budget_month)))
				 	return;
				 	
				$('#post_manage').append($('<option>', {
				    value: budget_month,
				    text: posts_week
				}));
				
			});
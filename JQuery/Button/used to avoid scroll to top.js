//http://stackoverflow.com/a/13003063

				$(document).on("click", ".prod_link", function(e) {
					e.preventDefault();
				});
				
				
<h4><a href='#'  class='prod_link' onclick='view_product({id})'>{name}</a></h4>
<a href='#' class='prod_link' onclick='view_product({id})'><img style="min-height:142px;max-height:142px" src='{pic_name}' alt='{name}'></a>
//ex0
//reference to search box as :
$('.search input').val('');

//ex1
			var bySelect = true;			
			$(function ()
				{
					$('#category').on('change', function() {
					  bySelect = true;
					  $('#movies_tbl').bootstrapTable('refresh');
					});
				})
				
				
				//bootstrap-table
				function queryParamsMOVIES(params)
				{
					var searchstr="";
					
					if (!bySelect)
						searchstr = $("input.form-control").val();
						
					bySelect = false;
					
					var q = {
						"limit": params.limit,
						"offset": params.offset,
						"search": searchstr, //params.search,
						"name": params.sort,
						"category" : $("#category").val(),
						"order": params.order
					};
 
					return q;
				}
				//bootstrap-table
				function queryParamsLOGGER(params)
				{
					if ($("#start_date").val().trim().length > 0 && $("#end_date").val().trim().length == 0)
					{
						alert("Please fill 'end date'");
						return false;
					}
					else if ($("#end_date").val().trim().length > 0 && $("#start_date").val().trim().length == 0)
					{
						alert("Please fill 'start date'");
						return false;
					}
					
					var q = {
						"limit": params.limit,
						"offset": params.offset,
						"search": params.search,
                        //
                        "start_date" : $("#start_date").val(),
                        "end_date" : $("#end_date").val(),
                        //
                        
						"name": params.sort,
						"order": params.order
					};
 
					return q;
				}
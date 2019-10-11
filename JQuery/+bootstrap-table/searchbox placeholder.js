//https://github.com/wenzhixin/bootstrap-table-examples/issues/42

			$(function ()
				{
					$('#feeds_tbl').bootstrapTable();
					
					var $search = $('.fixed-table-toolbar .search input');
					$search.attr('placeholder', 'use comma for keywords');
				}); //jQ ends
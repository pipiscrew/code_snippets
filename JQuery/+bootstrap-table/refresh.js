//on combo change
	$('#filter_userid').on('change', function() {
		//bootstrap table refresh
		$('#pay_pend_tbl').bootstrapTable('refresh');
	});
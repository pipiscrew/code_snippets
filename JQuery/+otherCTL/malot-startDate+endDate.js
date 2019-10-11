//restrict month
	function twoDigits(d) {
	    if(0 <= d && d < 10) return "0" + d.toString();
	    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
	    return d.toString();
	}
	
	function getLastDateOfMonth(Year,Month){
 		var d = new Date((new Date(Year, Month+1,1))-1);
 		
		var str_date = twoDigits(d.getDate()) + "-" + twoDigits(d.getMonth() + 1) + "-" + d.getFullYear();
		return str_date; 		
	}
	
	function misc_add_new(month_no){
		$("#lblTitle_EXPENSES_two").val("New Miscellaneous");
		
		$('[name=misc_daterec_two]').datetimepicker('setStartDate', '<?=date("Y")?>-'+month_no+'-01');
		$('[name=misc_daterec_two]').datetimepicker('setEndDate', getLastDateOfMonth(<?=date("Y")?>,month_no-1));
		$('[name=misc_daterec_two]').val('01-'+twoDigits(month_no)+'-<?=date("Y")?>');
		
		$("#modalEXPENSES_two").modal('toggle');
	}
	
	<div class='form-group'>
		<label>Date :</label><br>
		<input type="text" name="misc_daterec_two" class="form-control" data-date-format="dd-mm-yyyy" readonly class="form_datetime">
	</div>
				
	
//restrict - use the same day from time1 till time2
		$('[name=end_datetime]').datetimepicker({
	        weekStart: 1,
			autoclose: 1,
			startView: 1, //<-always show as time <- startView: <?= ($show_dtp?2:1) ?>,
			minView: 0,
			maxView: 1,
			forceParse: 1,
			startDate : '<?= $dtp_start; ?> <?= $dtp_start_time; ?>',
			endDate : '<?= $dtp_start; ?> 23:59',
			initialDate : '<?= $dtp_start; ?>'
	    });
	    
//init a date
		$('[name=end_datetime]').datetimepicker({
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 0,
			maxView: 1,
			forceParse: 1,
			initialDate : '1999-01-20'
	    });
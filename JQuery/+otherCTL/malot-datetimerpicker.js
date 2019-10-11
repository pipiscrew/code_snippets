//http://malot.fr/bootstrap-datetimepicker/

//when is timerpicker
		$('[name=end_datetime]').datetimepicker({
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			
			startView: 1,
			
			minView: 0,
			forceParse: 1
	    });
	    
//when is date
		$('[name=end_datetime]').datetimepicker({
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,

			startView: 2,
			minView: 2,
			
			forceParse: 1
	    });
	    
//when is datetimerpicker
		$('[name=end_datetime]').datetimepicker({
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			
			startView: 2,
			
			minView: 0,
			maxView: 1,
			forceParse: 1
	    });
	    
					<div class='form-group'>
						<label>Datetime :</label><br>
						<input type="text" name="end_datetime" class="form-control" data-date-format="dd-mm-yyyy hh:ii" readonly class="form_datetime">
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
    
//fill months
	var month = new Array();
	month.push("");
	month.push("January");
	month.push("February");
	month.push("March");
	month.push("April");
	month.push("May");
	month.push("June");
	month.push("July");
	month.push("August");
	month.push("September");
	month.push("October");
	month.push("November");
	month.push("December");

	var combo_month_rows = "";
	for(var no in month)
		combo_month_rows += "<option value='" + no + "'>" + month[no] + "</option>";
			
	$("#filter_month").html(combo_month_rows);
	$("#filter_month").change(); //select row 0 - no conflict on POST validation @ PHP
	
	$('#filter_month').on('change', function() {
	  console.log( this.value ); // or $(this).val()
	});
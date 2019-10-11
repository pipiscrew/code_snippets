//on value change
$('[name=send_ppl_website]').on('input',function(e){
	calculate_percentage(this.name);
});


//change
//Note that change will only fire when the input element has lost focus
//http://stackoverflow.com/a/12612395
$('[name=send_ppl_website]').change(function() { 
	console.log($('[name=send_ppl_website]').val());
});


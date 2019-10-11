//http://stackoverflow.com/questions/4187146/display-two-decimal-places-no-rounding

function toFixed(num, fixed) {
    fixed = fixed || 0;
    fixed = Math.pow(10, fixed);
    return Math.floor(num * fixed) / fixed;
}

//fixed for infinity
			function toFixed(num, fixed) {
				fixed = fixed || 0;
				fixed = Math.pow(10, fixed);
				return (Math.floor(num * fixed) / fixed) == 'Infinity' ? null : (Math.floor(num * fixed) / fixed);
			}
			
			
//OR (default round up)
var res = Math.round($(this).val() / companyCreditValue);
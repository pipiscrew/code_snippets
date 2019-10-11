//return string
parseFloat(yourString).toFixed(2);
parseFloat(yourString).round(2);
parseFloat(yourString).toPrecision(3)

//return string
parseInt(yourString);

//solution
var avg = parseFloat(sum / count);
parseFloat(avg.toFixed(2));

//in function
				function parseFL(no) {
					var tmp = parseFloat(no);
					return parseFloat(tmp.toFixed(1))
				}
//http://stackoverflow.com/questions/1996747/add-new-value-to-an-existing-array-in-javascript

var arr = new Array();
arr.push('value1');
arr.push('value2');


//loop
				for (var causeNo = 0; causeNo < arr.length; causeNo++)
					addNode('https://' + baseURL + '/causes/' + arr[causeNo] + '/competitions/' + newID, record, companyCountry + endDate);
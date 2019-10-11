//http://stackoverflow.com/questions/6298169/how-to-create-a-map-object-in-a-javascript

//Don't use an array if you want named keys, use a plain object.

var a = {};
a["key1"] = "value1";
a["key2"] = "value2";

//Then:

if ("key1" in a) {
   // something
} else {
   // something else 
}


//ex as array
					var causeItems = {};
					var causeitem;

					for (var causeNo = 0; causeNo < selectedCauses.length; causeNo++) {
						causeitem = {};
						causeitem['text'] = selectedCauses[causeNo][1];
						console.log(selectedCauses[causeNo][0] + selectedCauses[causeNo][1]);
						causeItems[selectedCauses[causeNo][0]] = causeitem;
					}
					


//example with array
			function companies_category_listwhere_cb(e) {
				var arr = [];
				var obj;
				
				for (var it = 0; it < e.length; it++) {
					obj = {};
					obj['value'] = e[it]["companyid"];
					obj['content'] = e[it]["comp_title"];

					arr[it] = obj;
				}
			}
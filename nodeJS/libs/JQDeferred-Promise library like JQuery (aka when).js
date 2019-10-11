//	https://github.com/jaubourg/jquery-deferred-for-node
//  https://npmjs.org/package/JQDeferred

	//var Deferred = require( "JQDeferred" );
	//Deferred.when(add2DB.setWithPriority(itemOBJ, priority)).done(function(x) {
	//	//console.log(new Date() + "added!");
	//});

		kato sample : https://gist.github.com/katowulf/5836a2209a1d70ec0ac3
		JQDeferred(function(def) {
		    add2DB.setWithPriority(itemOBJ, priority, function(err) {
		        if( err ) { def.reject(); }
		        else { def.resolve(); }
		    })
		}).done(function() {
		    /* run deferred code here */
		});
		
		


//asynchronous call - query with callback

function getCompetitionBIDS(compNodeKey) {
	var def = Deferred();
	
	var read2DB = new Firebase("https://" + baseURL + "/competitionsBIDS");
	
	read2DB.child(compNodeKey + "/18").once('value', function(snap) {
		def.resolve(snap);
	});
	
	return def.promise();
}

//callback
getCompetitionBIDS("-JDQ0Ba4ZfC1CJxHduNZ").done(function(e){
	console.log(e.val().causeref); //working
});
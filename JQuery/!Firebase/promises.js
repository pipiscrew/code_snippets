//https://gist.github.com/katowulf/5006634#file-firebase_promise_wrapper-js-L62
//http://stackoverflow.com/questions/11636731/handling-asynchronous-calls-firebase-in-functions
//JQuery REQ

				function CompanyCompetitionASKapprovalSTATUS(compID) {
					var db4 = new Firebase('https://' + baseURL + '/companies/' + userID + '/comp/' + compID); // + "/approved");
					
					var def = $.Deferred();

					db4.once('value', function(snapshot) {
						def.resolve(snapshot);
					});

					return def.promise();
				}
				
//OR (is the same)

				function CompanyCompetitionASKapprovalSTATUS(compID) {
					return $.Deferred(function(def) {
						new Firebase('https://' + baseURL + '/companies/' + userID + '/comp/' + compID).once('value', function(snapshot) {
								def.resolve(snapshot);
							});	
					});	
				}
				
				
//the call
					CompanyCompetitionASKapprovalSTATUS($(this).attr('data-name')).then(function(snap) {
						console.log(snap.name());
					});
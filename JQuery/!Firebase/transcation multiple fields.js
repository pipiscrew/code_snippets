					var db = new Firebase('https://x.firebaseio.com/mynode/-JFXdllZKp2AE9uJOZlN/stats');
					db.transaction(function(rec) {
					   // If test1 or test2 has never been set, will be setted!
					   
					   if (rec!=null){
						    rec["test1"]="pipiscrew";
						    rec["test2"]=1;
					   }
					    return rec;
					});
					
//with validation

					var dbCause = new Firebase('https://' + baseURLC + '/causes/' + cause_id + '/stats/');
					dbCauseEntries.transaction(function(cause) {
					   // If entries_competition has never been set, currentRank will be null.
					   var entries;
					   var goal;
					   
					   if (rec!=null){
					   		entries = cause["entries_competition"];
					   		goal = cause["goal_competition"];
					   		
					   		if (entries==null)
					   			entries = 0;
							else 
								entries = parseInt(entries);
								
					   		if (goal==null)
					   			goal = 0;
					   		else
					   			goal = parseFloat(goal);
					   			
					   		entries += 1;
					   		goal += comp_cost;
					   						   			
						    cause["entries_competition"] = entries;
						    cause["goal_competition"] = goal;
						    
						}

					    
					 	return cause;
					}, function(error, committed, snapshot) {
						
						if (committed){

							mae2(cause_id,3);

					 }	
					});
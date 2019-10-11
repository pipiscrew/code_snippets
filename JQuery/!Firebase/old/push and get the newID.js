//https://www.firebase.com/docs/javascript/firebase/push.html

//quick
			var epidoseVOTE = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/t1/votes/23,95");

			var newID = epidoseVOTE.push({
				user : "user1",
				vote : 5,
				comment : "this is a comment1",
				date : "20130601"

			}).toString();

			console.log(newID);
			console.log(newID.substring(newID.lastIndexOf("/")+1,newID.length));
			
//with variable
			var epidoseVOTE = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/t1/votes/23,95");
			var newMessageRef = epidoseVOTE.push();
			
			newMessageRef.set({
				user : "user1",
				vote : 5,
				comment : "this is a comment1",
				date : "20130601"

			});

			var newID = newMessageRef.toString();
			
			console.log(newID);
			console.log(newID.substring(newID.lastIndexOf("/")+1,newID.length));
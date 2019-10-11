//http://stackoverflow.com/questions/13400254/firebase-snapshot-reference-wont-return-data

var winner = "somebody";
var playersListRef = new Firebase('https://myfirebase.firebaseIO.com/players') 
var winnerRef =  playersListRef.child(winner);

// You use a firebase reference to write data.
winnerRef.setPriority('1300');

// You can also use a firebase reference to attach a callback for reading data.
winnerRef.once('value', function(winnerSnapshot) {
  // Inside your callback, you get a DataSnapshot that gives you access to the data.
  var priority = winnerSnapshot.getPriority();
});
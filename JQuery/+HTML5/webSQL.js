//http://www.html5rocks.com/en/tutorials/webdatabase/todo/

//futher:
//http://www.mobilehtml5.com/post/401111526/tutorial-your-first-mobile-html5-app-offline-storage

//////////////////////
// On November 18, 2010, the W3C announced that Web SQL database is a deprecated specification.
//////////////////////

var html5rocks = {};
html5rocks.webdb = {};

//**Opening the database
html5rocks.webdb.db = null;

html5rocks.webdb.open = function() {
  var dbSize = 5 * 1024 * 1024; // 5MB
  html5rocks.webdb.db = openDatabase("Todo", "1", "Todo manager", dbSize);
}

html5rocks.webdb.onError = function(tx, e) {
  alert("There has been an error: " + e.message);
}

html5rocks.webdb.onSuccess = function(tx, r) {
  // re-render the data.
  // loadTodoItems is defined in Step 4a
  html5rocks.webdb.getAllTodoItems(loadTodoItems);
}

//**Creating a table
html5rocks.webdb.createTable = function() {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS " +
                  "todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on DATETIME)", []);
  });
}

//**Adding data to a table
html5rocks.webdb.addTodo = function(todoText) {
  var db = html5rocks.webdb.db;
  db.transaction(function(tx){
    var addedOn = new Date();
    tx.executeSql("INSERT INTO todo(todo, added_on) VALUES (?,?)",
        [todoText, addedOn],
        html5rocks.webdb.onSuccess,
        html5rocks.webdb.onError);
   });
}
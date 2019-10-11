//https://www.firebase.com/docs/writing-data.html
var enableEdit = new Firebase('https://csp.firebaseio.com/events/' + eventname + "/episodes/" + $(this).data('name'));

enableEdit.child('enabled').set(data.value ? "1" : "0");
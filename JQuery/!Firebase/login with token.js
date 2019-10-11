//https://www.firebase.com/docs/security/custom-login.html
//http://jsfiddle.net/katowulf/D4YL8/embedded/result/
//http://fiddle.jshell.net/katowulf/D4YL8/show/light/

<script src="https://cdn.firebase.com/v0/firebase.js"></script>
<script type='text/javascript' src="https://cdn.firebase.com/v0/firebase-token-generator.js"></script>

var tokenGenerator = new FirebaseTokenGenerator("K7pZod3BKGbBqMv7FgknDuiXbfnfs4f7hHce5FLi");
var token = tokenGenerator.createToken({isModerator: true});

var dataRef = new Firebase("https://testarea.firebaseio.com/");

dataRef.auth(token, function(error) {
  if(error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Login Succeeded!");
  }
});
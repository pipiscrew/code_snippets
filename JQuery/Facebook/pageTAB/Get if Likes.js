***all methods needs read *user likes*

//http://stackoverflow.com/questions/5093398/how-to-check-if-a-user-likes-my-facebook-page-or-url-using-facebooks-api
FB.api("me/likes/SOME_ID", function(response) {
    if ( response.data.length === 1 ) { //there should only be a single value inside "data"
        console.log('You like it');
    } else {
        console.log("You don't like it");
    }
});


Alternatively, replace me with the proper UserID of someone else 
(you might need to alter the permissions below to do this, like friends_likes)
 As noted, you need more than the basic permission:

FB.login(function(response) {
    //do whatever you need to do after a (un)successfull login         
}, { scope: 'user_likes' });
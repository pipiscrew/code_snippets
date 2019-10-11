//http://stackoverflow.com/questions/23958890/is-there-a-difference-between-facebook-profile-id-and-uid
Since April the 30th 2014 new Facebook apps use version 2.0 of the Facebook graph API.
The significance of this is that the user ID you see returned in your app is "app-scoped".
App-scoped means that this is indeed a different ID to your "canonical"/global ID.
Your app will always see the same ID for a given user, but a different app will see a
different ID for the same user.

I'm afraid there's no way to go from an app-scoped ID (the longer ID you are seeing)
to a user's profile. The idea behind this is to protect people's privacy.
There's also no way to go from a profile URL to an app-scoped ID.

https://developers.facebook.com/docs/games/migrate#appscope
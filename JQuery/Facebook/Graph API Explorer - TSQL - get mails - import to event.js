//https://developers.facebook.com/tools/explorer
//http://developer.appcelerator.com/question/158816/graph-api-authorization-problem
//use FQL Query

Q - gets all people invited to 1509203615959928 event :
//1st
SELECT eid,  inviter_type,inviter, rsvp_status ,start_time, uid FROM   event_member  where eid=1509203615959928

//2nd
select first_name from user
where uid in (
SELECT eid,  inviter_type,inviter, rsvp_status ,start_time, uid FROM   event_member  where eid=1509203615959928)

//warning when not using LIMIT^ returns only the first 500rows
//so adding  limit 1000 return all recs

//the response is like :
    {
      "eid": "1509203615959928", 
      "inviter_type": "", 
      "inviter": null, 
      "rsvp_status": "attending", 
      "start_time": "2014-07-18", 
      "uid": "262791530591825"
    }, 
    

the uid is the user, so then hit 
http://graph.facebook.com/262791530591825

//the response is 
{
   "id": "262791530591825",
   "first_name": "Dimitris",
   "gender": "male",
   "last_name": "Malatestas",
   "link": "https://www.facebook.com/dimitris.malatestas.1",
   "locale": "el_GR",
   "name": "Dimitris Malatestas",
   "username": "dimitris.malatestas.1"
}

when we sent email to dimitris.malatestas.1@facebook.com an email goes to user email (the one used to registered to facebook)!!


/////TABLES + FIELDS
https://developers.facebook.com/docs/reference/fql/

//limit problem get by pagination
//http://stackoverflow.com/questions/9581243/facebook-fql-like-table-retuns-max-100-rows
SELECT object_id FROM like WHERE user_id = me() LIMIT 0,100
SELECT object_id FROM like WHERE user_id = me() LIMIT 100,100
SELECT object_id FROM like WHERE user_id = me() LIMIT 200,100
SELECT object_id FROM like WHERE user_id = me() LIMIT 300,100

//PHP
http://stackoverflow.com/questions/5006999/in-facebook-graph-api-how-to-find-which-all-of-your-friends-like-a-particular-bo/5008666#5008666


/////////////////////////////get invitation from event and invite users to your event
then on your page goto :
https://www.facebook.com/help/212291088790957

tried by not working for csv file
https://www.facebook.com/help/community/question/?id=529304573773938

the solution is to import the CSV to yahoo contacts then use at page >  'import from yahoo'
https://www.facebook.com/help/community/question/?id=667435219937070
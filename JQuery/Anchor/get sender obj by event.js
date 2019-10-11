//http://www.pipiscrew.com/2014/12/js-get-sender-obj-by-event/
//http://javascript.info/tutorial/obtaining-event-object

//The event object is always passed to the handler and contains a lot of useful information what has happened.

various line will be something like :
onclick=’javascript:test(“999″,event)’

//the event object doesnt exist in my code structure, browsers which follow W3C standards always pass the event object!

<script>
.
.
.
 
    function fill_list(db)
        for (var i = 0; i < db.length; i++)
        {
            rows += "<tr><td></td><td>" + db[i]["offer_id"] + "</td><td>" +
            "<a id='" + db[i]["offer_id"] + "' onclick='test(" + db[i]["offer_id"] + ",event)' class='btn btn-danger btn-xs'>Mark as Paid</a></td></tr>";
        }
 
        $("#table").html(rows);
    }
 
    function test(offer_id,eventt){
        console.log(eventt);
        var t = eventt.srcElement;
        console.log(t);
 
        //get ID by sender!
        $("#"+t.id).hide();
    }
 
</script>
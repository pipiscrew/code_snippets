//http://www.w3schools.com/jsref/jsref_obj_date.asp

            function log(str) {
            	var d = new Date();
                $("#middle").append(d.toTimeString().replace(/GMT.*/g, "").trim() + ' --- ' + str + "<br>");
            }
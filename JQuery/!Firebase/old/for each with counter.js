                    usersRef.on('value', function(snapshot_users) {

                        if (snapshot_users.val() != null) {
                            // var entries_users = snapshot_users.val();
                            var new_contents = "";

                            var all = 0;
                            snapshot_users.forEach(function(snap_userEvents) {
                                var event = snap_userEvents.val();

                                var recID = snap_userEvents.val().id;
                                var eventRef = new Firebase('https://csp.firebaseio.com/events/' + recID + "/info");

                                eventRef.on('value', function(snap_event) {
                                    if (snap_event.val() != null) {
                                        new_contents = "<tr><td>" + snap_event.val().title + "</td><td>" + snap_event.val().summary + "</td><td> <button id='btn_episodes' data-name='" + recID + "'class='btn-flat danger' style='margin-right:3px'>episodes</button>" + "<button id='btn_edit' data-name='" + recID + "' class='btn-flat primary'>edit</button>" + "</td></tr>";

                                        $("#ins_row").append(new_contents);

                                        all++;

                                        if (all == snapshot_users.numChildren()) {
                                            initTable();
                                        }
                                    }
                                });
                            });
                        } else// no resultset
                            $("#ins_row").html("");
                    });
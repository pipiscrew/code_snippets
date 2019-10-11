//before
".write" : "(auth.id == '725147534') || (auth.id == '678164891') || (auth.id == '1045991819')"

//after (the id^ should be written to root/admins/id)
".write": "(root.child('admins/' + auth.id).exists())"
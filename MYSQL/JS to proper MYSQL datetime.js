//https://stackoverflow.com/a/15021796/1320686
(new Date()).toISOString().substring(0, 10)
//2015-07-23

(new Date()).toISOString().substring(0, 19).replace('T', ' ')
//2015-07-23 11:26:00

--

new Date().toISOString().slice(0, 19).replace('T', ' ')

//always provide UTC, u have to use getTimezoneOffset
//https://www.w3schools.com/jsref/jsref_gettimezoneoffset.asp
//and always do minus the minus 

    var d = new Date();
    var n = d.getTimezoneOffset();
    
    
//https://stackoverflow.com/a/21102476/1320686
The time-zone offset is the difference, in minutes, between UTC and local time.
Note that this means that the offset is positive if the local timezone is behind UTC and negative if it is ahead.
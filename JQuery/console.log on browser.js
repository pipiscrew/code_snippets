//http://bigup2dance.tumblr.com/post/102614949869/hacker-advice-to-djs-listen-before-you-buy

-Go to redeyerecords.co.uk
-Click on a genre of your choice.
-Press ctrl + shift + k (or j in chrome) to get the web console available.

//Paste this:
var releases = document.getElementsByClassName("sfPlay");
for(var i = 0; i < releases.length; i++)
{
   var redid  = releases[i].id.substr(1);
   console.log("http://cdn.redeyerecords.co.uk/" + redid + ".mp3");
}

//In the console you will get a list of all mp3s visible on the site. Download them and start practicing.
//To do the same at toolboxrecords.com get to your preferred genre section and paste this in to your JavaScript console:

var releases = document.querySelectorAll(".track-title[rel]");
for(var i = 0; i < releases.length; i++)
   console.log(productTrackUrl + "/" + releases[i].getAttribute("rel"));
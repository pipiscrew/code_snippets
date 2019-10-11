//http://social.msdn.microsoft.com/Forums/en/windowsphone7series/thread/4f05a703-d642-4410-b73f-0b68d2409b91


http://www.microsoft.com/downloads/en/details.aspx?FamilyID=18108280-af54-4248-819f-361723db068e#QuickDetails

After installing I Added the reference Microsoft.Web.Media.SmoothStreaming to my project.

Added this reference to my XAML : 

 xmlns:smooth="clr-namespace:Microsoft.Web.Media.SmoothStreaming;assembly=Microsoft.Web.Media.SmoothStreaming"

 

and after that inserting the tag:

 <smooth:SmoothStreamingMediaElement AutoPlay="True" Source="mms://Streaming.Url.Address"/>
 
 
#IIS Smooth Streaming Client 1.5 RTW
http://www.microsoft.com/downloads/en/details.aspx?FamilyID=B6E83C29-02A5-465B-86E5-522B3CFCB1FA
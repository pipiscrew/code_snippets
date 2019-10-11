//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6666-open-browser-specific-web-page.html#post38858

Opening the browser is very simple.
First you need to add a reference to the Phone library.
Then:

Dim p As PhoneIntents
StartActivity(p.OpenBrowser("http://www.basic4ppc.com"))


p.OpenBrowser returns an Intent object. Intents are like messages that are sent to the system which then acts based on the information stored in the intent.
StartActivity keyword can be used to open other internal activities or to send intents to the system.
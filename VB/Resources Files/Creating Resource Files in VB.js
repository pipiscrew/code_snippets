Though I'd give back some love to the community and share a little tutorial I wrote with y'all. I know this might not be the right forum but I hope it helps someone, sometime. Adding resource files, especially HTML files for use as help files, in Visual Basic can be a real pain, as I learned the hard way.

Creating Resource Files in Visual Basic

Resource files are collections of any type of file that are compiled into the executable when it is created. This means that they are hidden from the average user. This provides a good way of packaging files with a program so that the user cannot view or access them. In my case, because a major selling point of my program is the documentation that comes with it, I wanted to make it as hard as possible to rip off this information. Compiling the HTML files into the executable was one good way of doing that.

Unfortunately Visual Basic does not provide the same flexibility when dealing with resource files that Visual C++ does. I believe that resource files are probably not used very often in Visual Basic and so are poorly documented. When trying to research how exactly to do this in Visual Basic I met with several frustrating obstacles that hopefully you can avoid with the help of these instructions!

To add a resource file to your VB project, go to Add Ins->Add In Manager, and click on VB 6 Resource Editor. Make sure it is loaded. You can now start the resource editor from the Tools menu.

Once you have the Resource Editor displayed, you can add custom resources (we will use custom for our example, which is HTML files) by clicking the "Add Custom Resource" button, which looks like a button with a grid on it. You are now given the opportunity to select any file that you would like to add. Browse to an HTML file and click "Open". It will become a resource of type "CUSTOM" and probably with an ID of "101". Double-click on the 101 to edit the resource. You may change the type and the resource ID. Change these to make them easily understandable - e.g. change the type to "HTML" and the ID to "INDEX" for a file called "index.html".

You've now managed to add the resource to your project. However, you need to know how to access this resource from within your program. Let's suppose that you have a webbrowser control in your program. You could navigate to index.html inside your program like this:

Me.WebBrowser.Navigate "res://Program Name.exe/HTML/INDEX"

However, you must Remember one important thing - the resource file is drawn from the executable. So if there is no executable (i.e. you have not compiled your program yet), the page will not display (you will get a 404 error most likely). As well, if you make changes to your resource file, you must recompile your program each time for them to take effect. FURTHERMORE, and this is a real pain, sometimes the pages still won't display when you run the program from inside VB. You will find, though, that it will work fine if you run the executable from the program directory. I don't know why this is.

Now suppose that in your HTML file, you need to link to other HTML files that are also contained within your resource file. You would need to add those HTML files to your resource, and then link to them like so:

<a href="res://Program%20Name.exe/HTML/INDEX">

Notice that you require a %20 to take the place of the space when referencing from within HTML (this is not required when referencing from inside your project, using the .Navigate method for example).

There is one other pain-in-the-rear aspect of VB's resource files: they do not reference the original files that you added to the resource, like they do in Visual C++. What I mean is, when you add a file to your resource, a copy of it is placed in the resource file. This copy is NOT changed when you change the original file like it is in Visual C++. For instance, if you add a GIF to your resource file, then open the original GIF and edit it, the GIF in the resource file will Remain unchanged. This is different from C++, where if you were to edit the original GIF it would change in the resource file too. This means that every time you change a file that you need in the resource, you have to delete it from the resource and then re-add it.


load to Webbrowser a mht ::
WebBrowser1.Navigate "mhtml:res://PROJECT1.exe/MHT/INDEX1"

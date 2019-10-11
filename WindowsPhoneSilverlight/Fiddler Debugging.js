//http://blogs.msdn.com/b/fiddler/archive/2010/10/15/fiddler-and-the-windows-phone-emulator.aspx
//http://dennisdel.com/?p=356

Recently, some developers have asked me why Fiddler no longer works with the Windows Phone 7 emulator. Fiddler properly captured traffic from the CTP version of the emulator, but not from the final RTM version. I've asked the Phone team for more details, but today I'll share a workaround with you that allows you to see traffic from the RTM version of the emulator.

   1. Install Fiddler 2.3.0.7.
   2. Start Fiddler.
   3. Click Tools > Fiddler Options.
   4. Open the Connections tab and tick the Allow remote computers to connect box
   5. Click OK to close the Fiddler Options dialog.
   6. In the QuickExec box under the session list, type prefs set fiddler.network.proxy.registrationhostname HostName where HostName is the name of your desktop computer.
   7. Close and restart Fiddler.
   8. Start (or restart) the Windows Phone 7 Emulator.
   9. Open Internet Explorer on the Emulator.
  10. Observe, your traffic shows in Fiddler.


If the browser on the phone works properly, but you dont see the traffic in Fiddler, 
that suggests that you may have a Filter applied which is hiding the traffic. 
See this help topic for more information (http://www.fiddler2.com/fiddler/help/faq.asp#missingtraffic).

If you have enabled HTTPS Decryption (http://www.fiddler2.com/redir/?id=httpsdecryption) in Fiddler, note that the Phones browser
will show a certificate warning page when navigating to HTTPS pages. 
The Phone Emulator uses a different root certificate store than the desktop, 
so even if your desktop trusts the Fiddler Root, the Phone Emulator will not.

Thanks for using Fiddler, and thanks for developing for Windows Phone 7!
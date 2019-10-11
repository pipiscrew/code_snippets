Application.StartupPath
Application.DoEvents()

	
-Application.Restart

Use Application.Restart when you need to close and reexecute your application. This method was added for Click Once but it's available to you. Take note that Restart will launched your application with the command-line same options that was originally supplied.
	
	
-Application.OpenForms

This property return all the open forms owned by this application.
	
	
-Application.IsKeyLocked


The method indicate if the CAPS LOCK, NUM LOCK, or SCROLL LOCK key is in effect. It's not possible to use this method to check for other keys.

    * Keys.CapsLock
    * Keys.NumLock
    * Keys.ScrollLock

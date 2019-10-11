Icon.ExtractAssociatedIcon

This method return the Icon representation of an image used by Windows in Explorer. It's does not only return an image contained in the file, but also the associated image for a specific file.

      Icon ico1 = Icon.ExtractAssociatedIcon(@"c:\default.htm");
      Icon ico2 = Icon.ExtractAssociatedIcon(@"c:\windows\notepad.exe");
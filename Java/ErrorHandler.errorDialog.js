'on a ErrorHandler.java 

package com.mycompany;

import net.rim.device.api.ui.UiApplication;
import net.rim.device.api.ui.component.Dialog;

public class ErrorHandler {

    public static void errorDialog(final String message)
    {
        UiApplication.getUiApplication().invokeLater(new Runnable()
        {
            public void run()
            {
                Dialog.alert(message);
            }
        });
    }
    
}

'we call it as 

ErrorHandler.errorDialog("ERROR!");
return;
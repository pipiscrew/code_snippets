package com.mycompany;


import net.rim.device.api.ui.*;
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;
import net.rim.device.api.system.*;

/**
 * This lab introduces BlackBerry user interface components.
 */
 
public final class BBUserInterface extends UiApplication
{
    
    public static void main(String[] args)
    {
        //Create an instance of the application.    
        BBUserInterface theApp = new BBUserInterface();
        //The application must now enter the event dispatcher.
        theApp.enterEventDispatcher();
    }
    
    public BBUserInterface() 
    {    
        //Create a new instance of MainScreen.
        MainScreen mainScreen = new MainScreen();
        
        //MainScreen contains a title and status area at the top and bottom of the
        //screen.  
        //Add a LabelField to the title area that says "BlackBerry UI Lab".
        mainScreen.setTitle(new LabelField("BlackBerry UI Lab"));
        //Add a LabelField to the status area that says "This is the bottom".
        mainScreen.setStatus(new LabelField("This is the bottom"));
        
        //A FlowFieldManager aligns fields left to right using the available space.
        //When laying out, this manager first tries to lay out a field along the 
        //current horizontal row. If there's not enough horizontal space, it places 
        //the field on the next row of fields. 
        //Create a new instance of FlowFieldManager.
        FlowFieldManager flowFieldManager = new FlowFieldManager();
        
        //Create 3 button fields with the labels Button1, Button2 and Button3.
        //ADVANCED STEP: When clicked, have the ButtonField display a Dialog.alert
        //that says what button was pressed.
        ButtonField button1 = new ButtonField("Button1", ButtonField.CONSUME_CLICK);
        //ADVANCED step below.
        button1.setChangeListener(new FieldChangeListener() 
        {
            public void fieldChanged(Field field, int context)
            {
        	    UiApplication.getApplication().invokeLater(new Runnable(){
        		      public void run(){
        		    	 secondForm screen2 = new secondForm();
        		        System.out.println("About to show screen2");
        		        UiApplication.getUiApplication().pushModalScreen(screen2);
        		        //here the pushScreen can be written also as pushModalScreen
        		        System.out.println("Have already shown screen2");
        		      }
        		    });      
            }
        });
         
        //Add the 3 ButtonFields to the FlowFieldManager.
        flowFieldManager.add(button1);
        
        //MainScreen contains a default VerticalFieldManager.  This allows us to 
        //add fields directly to the MainScreen class.
        //Add the FlowFieldManager to the MainScreen.
        mainScreen.add(flowFieldManager);
        
        //Add a SeparatorField to the MainScreen.
        mainScreen.add(new SeparatorField());
        
        //Create a LabelField that says "Please press a button".
        LabelField labelField = new LabelField("Please press a button");
        
        //Add the LabelField to the MainScreen.
        mainScreen.add(labelField);
        
        //Push MainScreen onto the display stack.
        pushScreen(mainScreen);
    }
}


//******the screen2
package com.mycompany;

import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;

public class secondForm  extends MainScreen {
	
	public secondForm() {
        setTitle(new LabelField("this is a second form"));
        //Add a LabelField to the status area that says "This is the bottom".
        setStatus(new LabelField("This is the bottom of 2nd form"));
	}
}

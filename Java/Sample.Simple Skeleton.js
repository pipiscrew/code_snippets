package com.mycompany;

import net.rim.device.api.ui.*;
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;
import net.rim.device.api.system.*;

/**
 * This lab introduces BlackBerry user interface components.
 */
 
public final class test extends UiApplication
{
    
	public test() {
		// he pushScreen() method is inherited from the UiApplication class
		// and pushes a screen onto the display stack and paints it.
		pushScreen(new testScreen());
	}
	
    public static void main(String[] args)
    {
        //Create an instance of the application.    
    	test theApp = new test();
        //The application must now enter the event dispatcher.
        theApp.enterEventDispatcher();
    }
    
    final class testScreen extends MainScreen {
    	
    
    public testScreen() 
    {    
        //Create a new instance of MainScreen.
        //MainScreen mainScreen = new MainScreen();
        
        //MainScreen contains a title and status area at the top and bottom of the
        //screen.  
        //Add a LabelField to the title area that says "BlackBerry UI Lab".
        setTitle(new LabelField("BlackBerry UI Lab"));
        //Add a LabelField to the status area that says "This is the bottom".
        setStatus(new LabelField("This is the bottom"));
        
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
            	Dialog.alert("You pressed Button1!");           
            }
        });
    
        ButtonField button2 = new ButtonField("Button2", ButtonField.CONSUME_CLICK);
        button2.setChangeListener(new FieldChangeListener() 
        {
            public void fieldChanged(Field field, int context)
            {
            	Dialog.alert("You pressed Button2!");           
            }
        });

        ButtonField button3 = new ButtonField("Button3", ButtonField.CONSUME_CLICK);
        button3.setChangeListener(new FieldChangeListener() 
        {
            public void fieldChanged(Field field, int context)
            {
            	Dialog.alert("You pressed Button3!");           
            }
        });
     
        //Add the 3 ButtonFields to the FlowFieldManager.
        flowFieldManager.add(button1);
        flowFieldManager.add(button2);
        flowFieldManager.add(button3);
        
        //MainScreen contains a default VerticalFieldManager.  This allows us to 
        //add fields directly to the MainScreen class.
        //Add the FlowFieldManager to the MainScreen.
        add(flowFieldManager);
        
        //Add a SeparatorField to the MainScreen.
        add(new SeparatorField());
        
        //Create a LabelField that says "Please press a button".
        LabelField labelField = new LabelField("Please press a button");
        
        //Add the LabelField to the MainScreen.
        add(labelField);
        
        //Push MainScreen onto the display stack.
       // pushScreen(mainScreen);
    }
}
}

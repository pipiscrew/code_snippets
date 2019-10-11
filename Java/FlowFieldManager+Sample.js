package com.mycompany;

import net.rim.device.api.ui.UiApplication;
/*import net.rim.device.api.ui.*;*/
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;
/*import net.rim.device.api.system.*;
import net.rim.device.api.i18n.*;*/

public class test extends UiApplication {

	public test() {
		// he pushScreen() method is inherited from the UiApplication class
		// and pushes a screen onto the display stack and paints it.
		pushScreen(new testScreen());
	}


	public static void main(String[] args) {
		// create the HelloWorld object and start the event dispatcher
		test theApp = new test();
		theApp.enterEventDispatcher();
	}
	
	final class testScreen extends MainScreen {
		public testScreen(){
		//Invoking super() invokes the constructor of the testScreen superclass, MainScreen.
		//The MainScreen class provides a UI screen that contains a title section, a separator element,
		//and a single vertical field manager for maintaining a list of fields.
			super();

			FlowFieldManager flowManager = new FlowFieldManager();
			
			add(flowManager);
			
			ButtonField button1 = new ButtonField("Button1");
			ButtonField button2 = new ButtonField("Button2");
			ButtonField button3 = new ButtonField("Button3");
			
			flowManager.add(button1);
			flowManager.add(button2);
			flowManager.add(button3);
			
			add(new SeparatorField());
			add(new RichTextField("This is a simple test"));
			
		}
		
		//override the onClose()method to create an alert dialog box and display text
		public boolean onClose()
		{ Dialog.alert("Goodbye!");
		System.exit(0);
		return true;
		}
	}
}




1-Create a project for the Hello World application

File menu, click New > Project.
Expand the BlackBerry folder > Select BlackBerry project.
Click Next.
In the Project name field, type HelloWorld.
Click Next.
Click Finish.

2-Load Project
Specify the Application type and properties for the HelloWorld application project

In the Project Explorer view, expand a BlackBerry® project.
Double-click the BlackBerry_App_Descriptor.xml file.
Click the Application tab.
In the Title field, type HelloWorld Sample.
In the Version field, type a version number.
In the Vendor field, type a vendor name, for example, Research In Motion Ltd.
In the Application type drop-down list, select BlackBerry Application.
Click Close.
Click Yes.

3-Add Java source files to the HelloWorld project
The Java source file name must match the name of the public class or interface in the file.
It must also be located in a folder structure that matches its package name. 
For example, if the package name is com.Mycompany.MyClass, you must name the .java file
MyClass.java, and store it in C:\project\com\mycompany\MyClass.java.

In the Package Explorer view, right-click the HellowWorld project. Click New > Class.
In the Name field, type HelloWorld.
In the Package field, type com.mycompany.
Next to the SuperClass field, click Browse.
In the Choose a type field, type UI.
Click UIApplication.
Click OK.
In the Which method stubs would you like to create section, select the following stubs:
public static void main (String[] args)
Constructors from superclass
Inherited abstract methods
Click Finish.

4-Import Java resources into the HelloWorld application

The net.rim.device.api.ui package provides the fundamental components for 
								constructing the UI of a BlackBerry® device application.
The net.rim.device.api.ui.component package provides a library of prebuilt
	 interface components and controls for constructing a UI for a BlackBerry device application.
The net.rim.device.api.ui.container package provides a library of prebuilt interface
					 component managers for constructing a UI for a BlackBerry device application.
The net.rim.device.api.system package provides system-level functionality.
The net.rim.device.api.i18n package provides support for the internationalization
								 of a BlackBerry device application.

In Eclipse, in the text editor window, below the line that begins with the word package,
 type the names of the packages to import:
import net.rim.device.api.ui.*;
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;
import net.rim.device.api.system.*;
import net.rim.device.api.i18n.*;
For more information on these resource packages see Java Resources.



******example PRJ:
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
			
			/* Caption ths formas
			 LabelField title = new LabelField("HelloWorld Sample", LabelField.ELLIPSIS
			 | LabelField.USE_ALL_WIDTH);
			setTitle(title);*/
			
			add(new LabelField("HelloWorld Sample", LabelField.ELLIPSIS
			 | LabelField.USE_ALL_WIDTH));
			
			add(new RichTextField("Hello World!"));
		}
		
		//override the onClose()method to create an alert dialog box and display text
		public boolean onClose()
		{ Dialog.alert("Goodbye!");
		System.exit(0);
		return true;
		}
	}
}




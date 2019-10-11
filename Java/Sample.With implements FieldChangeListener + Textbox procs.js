'http://www.ibm.com/developerworks/opensource/tutorials/os-blackberry/section3.html
package com.mycompany;

import net.rim.device.api.ui.Field;
import net.rim.device.api.ui.FieldChangeListener;
import net.rim.device.api.ui.Graphics;
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
	
	// private members - these represent the "controls"
    private BasicEditField identifierfield = null;
    private BasicEditField datafield = null;
    private ButtonField submitbutton = null;
    private LabelField statusfield = null;
    
	final class testScreen extends MainScreen implements FieldChangeListener {
		public testScreen(){
		//Invoking super() invokes the constructor of the testScreen superclass, MainScreen.
		//The MainScreen class provides a UI screen that contains a title section, a separator element,
		//and a single vertical field manager for maintaining a list of fields.
		     super();
		        // give our application window a title
	        setTitle("PipisCrew BlackBerry Application");
	        // create user interface components
	        createui();
	}
		
		private void createui()
		  {
		      try
		      {
		      // create a field for entering the "identifier" of our transaction
		      identifierfield = new BasicEditField("Identifier: ","",50, EditField.NO_NEWLINE );
		      // add this field to the screen
		      add(identifierfield);
		      // create a field for the data of our transaction
		      datafield = new BasicEditField("Data: ","",100, EditField.NO_NEWLINE );    
		      // add this field to the screen
		      add(datafield);
		      // create a button to submit out transaction
		      submitbutton = new ButtonField("Submit Transaction",ButtonField.CONSUME_CLICK);
		      // tell this button who handles changes (selection)
		      submitbutton.setChangeListener(this);
		      // add this button to the screen
		      add(submitbutton);
		      // add a status label
		      statusfield = new LabelField("Please enter transaction data.");
		      // add label to screen
		      add(statusfield);
		      }
		      catch (Exception e)
		      {
		          System.out.println("Failed to create user interface components");
		      }
		    } 

	    // this method implements the FieldChangedListener Interface
	    // it is used to detect when the button is selected
	    // after validating that the input data is correct, it attempts to submit a 
		// transaction to the server
	    public void fieldChanged(Field f, int context)
	    {
	        // which field was changed
	     	   if (f == submitbutton)
	        {
	            // check fields....
	            String id = identifierfield.getText();
	            String data = datafield.getText();
	            
	            if (id.trim().length() == 0 || data.trim().length() == 0)
	            {
	            	Dialog.alert("Please fill in all fields.");identifierfield.setFocus();return;
	            }
	        
	            // ok, looks like we have some good data
	            //if (bb_ibm_transaction.ProcessTransaction(id,data) == true)
	            {// transaction was submitted successfully, let's reset the GUI for easy
		// entry to another \
		identifierfield.setText("");datafield.setText("");
		identifierfield.setFocus();statusfield.setText("Transaction Sent.");
	// if you preferred to just close this application after submission, 
		// uncomment out the following line//onClose();
	            }

	            
	        }
	     }
	   	            
	       

	    
		//override the onClose()method to create an alert dialog box and display text
		public boolean onClose()
		{ Dialog.alert("Goodbye!");
		System.exit(0);
		return true;
		}
		
	}
	
	}
//}




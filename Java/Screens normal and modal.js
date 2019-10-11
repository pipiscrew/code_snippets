//http://developerlife.com/tutorials/?p=812

//on a button at Main Form or whatever
	    UiApplication.getApplication().invokeLater(new Runnable(){
	      public void run(){
	    	  customerData screen2 = new customerData();
	        System.out.println("About to show screen2");
	        UiApplication.getUiApplication().pushScreen(screen2);
	        //here the pushScreen can be written also as pushModalScreen
	        System.out.println("Have already shown screen2");
	      }
	    });
	    
//the customerData Class
package com.mycompany;

import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;

// SAMPLE SCREEN2
public class customerData extends MainScreen {

  public customerData(){

    // create a manager and allow scrolling when lots of fields are added
    VerticalFieldManager vfm = new VerticalFieldManager();

    // add a label
    vfm.add(new LabelField("Second Screen"));

    // add vfm to screen
    add(vfm);

  }

}
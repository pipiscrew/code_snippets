package com.mycompany;

import net.rim.device.api.ui.Field;
import net.rim.device.api.ui.FieldChangeListener;
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;

public class secondForm  extends MainScreen {
	
	EditField txt1;
	EditField txt2;
	ObjectChoiceField choice;
	LabelField Results;
	
	public secondForm() {
		//User input boxes
		 txt1 = (new EditField("First Number: ","",3, EditField.FILTER_NUMERIC | EditField.NO_NEWLINE ));
		 txt2 = (new EditField("Second Number: ","",3, EditField.FILTER_NUMERIC | EditField.NO_NEWLINE ));
		 add(txt1);add(txt2);
		 
		//Combobox arithmetic symbols
		String choicestrs[] = {"*", "+", "-","/","mod"};
		choice = new ObjectChoiceField("Calculation : ", choicestrs, 0);
		add(choice);
		
		//Form Caption
        setTitle(new LabelField("Calculations"));
        
        //results LABEL
        Results = new LabelField();
        Results.setText("Result will be appear here!");
        setStatus(Results);
        
        //User Button for Calculation
        ButtonField button1 = new ButtonField("Calculate Please!", ButtonField.CONSUME_CLICK);
        button1.setChangeListener(new FieldChangeListener() 
        {
            public void fieldChanged(Field field, int context)
            {
	            if (txt1.getText().trim().length() == 0)
	            {
	            	Dialog.alert("Please fill first number.");txt1.setFocus();return;
	            }
	            
	            if (txt2.getText().trim().length() == 0) 
	            {
	            	Dialog.alert("Please fill second number.");txt2.setFocus();return;
	            }
            	
	            String[] finalRes = new String[2];
	            
	            finalRes = makecalculation();
	            
	            Results.setText(txt1.getText() + " " + finalRes[1]  + " " + txt2.getText() + " = " + finalRes[0]);
            }
        });
        
        add(button1);
	}
	
	//Function return the arithmetic result to status label
	private String[] makecalculation() {
    	long first;
    	long second;
    	String[] res = new String[2];
    	
    	
    	first = Long.parseLong(txt1.getText());
    	second= Long.parseLong(txt2.getText());
    
    	
	      try
	      {
	  	    switch (choice.getSelectedIndex()) {
		    case 0:
		    	second= first * second;
		    	res[1] = "*";
			break;
		    case 1:
		    	second= first + second;
		    	res[1] = "+";
			break;
		    case 2:
		    	second= first - second;
		    	res[1] = "-";
			break;
		    case 3:
		    	second= first / second;
		    	res[1] = "/";
			break;
		    case 4:
		    	second= first % second;
		    	res[1] = "%";
			break;
		    default:
			second = (long) 0.100;
	    	res[1] = "  -eRRoR-  ";
			break;
		    }
	      }
	      catch (Exception e)
	      {
	    	  second=0;
	      }
     
	      
	     res[0] = String.valueOf(second);

	     return res;
	}
	
	public boolean onClose(){
		setDirty(false);
		return super.onClose();
		}
	
 
}

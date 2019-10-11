	            if (txt1.getText().trim().length() == 0) // || txt2.getText().trim().length() == 0)
	            {
	            	Dialog.alert("Please fill first number.");txt1.setFocus();return;
	            }
	            
	            if (txt2.getText().trim().length() == 0) 
	            {
	            	Dialog.alert("Please fill second number.");txt2.setFocus();return;
	            }
		String choicestrs[] = {"Opt 1", "Opt 2", "Opt 3"};
		ObjectChoiceField choice;
		
		String choicestrs[] = {"Opt 1", "Opt 2", "Opt 3"};
		choice = new ObjectChoiceField("Object Choice Field: ", choicestrs, 0);
		add(choice);
		
	
	//update the items
		String str[] = {"a","b","c"}; // HERE I NEED DYNAMICALLY RECIVED DATA 		   
        choice.setChoices(str);
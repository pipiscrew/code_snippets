			HorizontalFieldManager _fieldmanager;
	        _fieldmanager = new HorizontalFieldManager();
	        
	        //OR VerticalF
			//VerticalFieldManager _fieldmanager;
	        //_fieldmanager = new VerticalFieldManager();
	        
	        //_fieldmanager.setPadding(0, 0, 0, 20);
	        /* declare one label to how the application title */

	        LabelField applicationtitle = new LabelField("Demo",LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH);

	        //This is our listener
	        FieldChangeListener listenerPairMe = new FieldChangeListener() {
				
				public void fieldChanged(Field field, int context) {
					// Cast the field to Button, so after we can get the label of it!
					 ButtonField testCaption = (ButtonField) field;
					 
					 Dialog.alert("You clicked the button!" + testCaption.getLabel());
				}
	        };
	        //This is our listener
	        
            /*create the buttons OR anyother ctl*/
	        ButtonField _pairMe1 = new ButtonField("PairMe1");
	        ButtonField _pairMe2 = new ButtonField("PairMe2");
	        ButtonField _pairMe3 = new ButtonField("PairMe3");
	        ButtonField _pairMe4 = new ButtonField("PairMe4");
	        ButtonField _pairMe5 = new ButtonField("PairMe5");
	        ButtonField _pairMe6 = new ButtonField("PairMe6");
	        ButtonField _pairMe7 = new ButtonField("PairMe7");
	        ButtonField _pairMe8 = new ButtonField("PairMe8");
	        

            /*attach _fieldmanager to form*/
            add(_fieldmanager);
            
            /*set the title*/
            setTitle(applicationtitle);

			//attach buttons to _fieldmanager
	        _fieldmanager.add(_pairMe1);
	        _fieldmanager.add(_pairMe2);
	        _fieldmanager.add(_pairMe3);
	        _fieldmanager.add(_pairMe4);
	        _fieldmanager.add(_pairMe5);
	        _fieldmanager.add(_pairMe6);
	        _fieldmanager.add(_pairMe7);
	        _fieldmanager.add(_pairMe8);
	        
	        //attach the listener to buttons
	        _pairMe1.setChangeListener(listenerPairMe);
	        _pairMe2.setChangeListener(listenerPairMe);
	        _pairMe3.setChangeListener(listenerPairMe);
	        _pairMe4.setChangeListener(listenerPairMe);
	        _pairMe5.setChangeListener(listenerPairMe);
	        _pairMe6.setChangeListener(listenerPairMe);
	        _pairMe7.setChangeListener(listenerPairMe);
	        _pairMe8.setChangeListener(listenerPairMe);
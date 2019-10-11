'http://stackoverflow.com/questions/3565719/jvm-exception-in-simple-program

    public My_First_AppScreen()
    {
            super();

	        HorizontalFieldManager _fieldmanager;
	        _fieldmanager = new HorizontalFieldManager();
	        /* declare one label to how the application title */

	        LabelField applicationtitle = new LabelField("Demo",LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH);

	        ButtonField _pairMe = new ButtonField("PairMe");

	        FieldChangeListener listenerPairMe = new FieldChangeListener() {
	            public void fieldChanged(Field field, int context){
	                Dialog.alert("You clicked the button!");

	            }
	            };


	        /*set the title*/
	            add(_fieldmanager);
	            setTitle(applicationtitle);

	        _fieldmanager.add(_pairMe);
	        _pairMe.setChangeListener(listenerPairMe);
	        
    }

//only numeric NO new line
add(new BasicEditField("First Number: ","",100, BasicEditField.FILTER_NUMERIC | EditField.NO_NEWLINE ));
add(new BasicEditField("Second Number: ","",100, BasicEditField.FILTER_NUMERIC | EditField.NO_NEWLINE ));

//only ALPHA , and max size 100
//low
		add(new BasicEditField("First Number: ","",100, BasicEditField.FILTER_LOWERCASE ));
//high
		add(new BasicEditField("First Number: ","",100, BasicEditField.FILTER_UPPERCASE));
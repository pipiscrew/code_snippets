//http://www.video-animation.com/java_013.shtml
//http://www.video-animation.com/java_012.shtml
//http://www.daniweb.com/software-development/java/threads/13283/page2
package com.mycompany;

public class Dummy{ 
	 private String _Calculation;
	 private String _ResultfromFRM;

	// overwrite our default constructor
	 Dummy(){
		 _Calculation = "";
		 _ResultfromFRM = "";
		}
	// Constructor with 2 argument
		public Dummy(String Calculation, String ResultfromFRM){
			_Calculation = Calculation;
			_ResultfromFRM = ResultfromFRM;
		}	
	 
    public String getCalculation(){
             return _Calculation;
    }
    
    public void setCalculation(String value){
        _Calculation = value;
    }

    public String getResultfromFRM(){
        return _ResultfromFRM;
    }
  
    public void setResultfromFRM(String value){
        _ResultfromFRM=value;
    }
    
}

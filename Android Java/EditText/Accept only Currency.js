        <EditText
            android:id="@+id/txtTitlos"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            //no needed android:digits="0123456780."
            --> android:inputType= "numberDecimal" 
            android:layout_marginTop="10dp"
            android:ems="10" >
        </EditText>
        

//by code 
//http://stackoverflow.com/a/6919416/1320686
input.setRawInputType(InputType.TYPE_CLASS_NUMBER | InputType.TYPE_NUMBER_FLAG_DECIMAL);
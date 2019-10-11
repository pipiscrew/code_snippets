//http://android-er.blogspot.gr/2011/09/bubblesort.html
    void bubblesort() {
    	int min;

    	for (int i = 0; i < data.length - 1; i++){
    		min = i;
    		for (int  j = i + 1; j < data.length; j++){
    			if (data[j] < data[min]){
    				min = j;
    			}
    		}
    		if (i != min){ 
    			int tmp = data[i];
    			data[i] = data[min];
    			data[min] = tmp;
	      }
    	}
    }
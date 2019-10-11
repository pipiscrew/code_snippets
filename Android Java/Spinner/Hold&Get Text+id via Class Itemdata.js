//fill spinner
		 final SpinItemData items[] = CustomersDB.getProducts();
		
		 ArrayAdapter<SpinItemData> adapter =
		 new ArrayAdapter<SpinItemData>(
		 this,
		 android.R.layout.simple_spinner_item,
		 items );
		 adapter.setDropDownViewResource(
		 android.R.layout.simple_spinner_dropdown_item);
		
		
		 txtCustomer_country_id.setAdapter(adapter);
		
//get cursor		
	public SpinItemData[] getProducts() {
		//final SpinItemData products = new SpinItemData(); //new ArrayList<Customers>();
		
		int arrPOS=0;
		Cursor c = database
				.rawQuery("select TgUniqueField,Name from products",	null); 
		
		final SpinItemData products[] = new SpinItemData[c.getCount()];
		
		c.moveToFirst();
		while (!c.isAfterLast()) {
			products[arrPOS] = new SpinItemData(c.getLong(0),c.getString(1));
			
			arrPOS+=1;
			c.moveToNext();
		}

		// Make sure to close the cursor
		c.close();
		return products;
	}
	
//retrieve ID
			 SpinItemData d =(SpinItemData)
			 txtCustomer_country_id.getSelectedItem();
			 txtCustomer_country_id.getSelectedItemId()
			 CatchError(String.valueOf(d.getValue()));
			
//optimized^ version by :
//http://mylifewithandroid.blogspot.com.au/2009/10/spinner-and-its-data-behind.html

package aexp.spinnerandadapter;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Spinner;
import android.widget.ArrayAdapter;
import android.widget.AdapterView;
import android.widget.TextView;

public class SpinnerAndAdapter extends Activity
{
    TextView    valueTextView;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        valueTextView = (TextView)findViewById( R.id.selected );
        Spinner s = (Spinner)findViewById(R.id.spinner);
        final MyData items[] = new MyData[3];
        items[0] = new MyData( "key1","value1" );
        items[1] = new MyData( "key2","value2" );
        items[2] = new MyData( "key3","value3" );
        ArrayAdapter<MyData> adapter = 
            new ArrayAdapter<MyData>( 
                this,
                android.R.layout.simple_spinner_item,
                items );
        adapter.setDropDownViewResource(
            android.R.layout.simple_spinner_dropdown_item);
        s.setAdapter(adapter);
        s.setOnItemSelectedListener(
            new AdapterView.OnItemSelectedListener() {
                public void onItemSelected(
                        AdapterView<?> parent, 
                        View view, 
                        int position, 
                        long id) {
                    MyData d = items[position];
                    valueTextView.setText( d.getValue() );
                }

                public void onNothingSelected(AdapterView<?> parent) {
                }
            }
        );
    }

    class MyData {
        public MyData( String spinnerText, String value ) {
            this.spinnerText = spinnerText;
            this.value = value;
        }

        public String getSpinnerText() {
            return spinnerText;
        }

        public String getValue() {
            return value;
        }

        public String toString() {
            return spinnerText;
        }

        String spinnerText;
        String value;
    }
}

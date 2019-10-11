//http://stackoverflow.com/questions/9109890/android-java-how-to-sort-a-list-of-objects-by-a-certain-value-within-the-object

//at activity
List<CauseItem> rowItems = new ArrayList<CauseItem>();

	CauseItem rec;

	for (DataSnapshot snapshot : arg0.getChildren()) {
		rec = new CauseItem();
	
		rec.setID(snapshot.getRef().getName());
	
		if (snapshot.child("last_date_used").getValue() != null)
		{
			rec.setLast_date_used(Long.parseLong(snapshot.child("last_date_used").getValue().toString()));
		}
		else 
			rec.setLast_date_used(0L);
			
			
		rowItems.add(rec);
	}
	
	
	
	Collections.sort(rowItems);
	
	listAdapter.notifyDataSetChanged();
							
	
//the class
public class CauseItem implements Comparable{
	private String id;
	private long last_date_used;
	
	public long getLast_date_used() {
		return last_date_used;
	}
	public void setLast_date_used(long last_date_used) {
		this.last_date_used = last_date_used;
	}
.
.
.
	//sort DESC
	@Override
	public int compareTo(Object o) {
	       CauseItem f = (CauseItem)o;

	        if (last_date_used < f.getLast_date_used()) {
	            return 1;
	        }
	        else if (last_date_used >  f.getLast_date_used()) {
	            return -1;
	        }
	        else {
	            return 0;
	        }
	}
}


//sort ASC
    @Override
    public int compareTo(Object o) {
        ToSort f = (ToSort)o;

        if (val.floatValue() > f.val.floatValue()) {
            return 1;
        }
        else if (val.floatValue() <  f.val.floatValue()) {
            return -1;
        }
        else {
            return 0;
        }

    }
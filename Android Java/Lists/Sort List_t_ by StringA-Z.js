//http://stackoverflow.com/questions/9109890/android-java-how-to-sort-a-list-of-objects-by-a-certain-value-within-the-object

//the code 
		List<item> itemPROD = new ArrayList<item>();
		
		itemPROD.add(new item("20640", "prod1"));
		itemPROD.add(new item("14702", "aprod"));
		
		Collections.sort(itemPROD, new Comparator<item>() {
			public int compare(item emp1, item emp2) {
				return emp1.getTitle().compareToIgnoreCase(emp2.getTitle());
			}
		});
		
		
//the class
public class item  {
	private String title;
	private String id;

	public item() {
		super();
	}

	public item(String id, String title) {
		super();
		this.id = id;
		this.title = title;
	}
	
	@Override
	public String toString() {
		return this.title;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}

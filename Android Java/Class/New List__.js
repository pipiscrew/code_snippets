//class tabVARSchildren
		public class tabVARSchildren {
			String id ;
			String title;
			String html;
			
			public String getId() {
				return id;
			}
			public void setId(String id) {
				this.id = id;
			}
			public String getTitle() {
				return title;
			}
			public void setTitle(String title) {
				this.title = title;
			}
			public String getHtml() {
				return html;
			}
			public void setHtml(String html) {
				this.html = html;
			}
		
		
		}

//class tabVARS
	List<tabVARSchildren> JSONchildren;

//main code
	tabVARS returnList = new tabVARS();
	returnList.JSONchildren =new ArrayList<tabVARSchildren>();;
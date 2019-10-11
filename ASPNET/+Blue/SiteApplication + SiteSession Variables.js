 *SiteApplication.DomainFileStorageUrl*
	 //before :
	 <img src="<%= SiteApplication.DomainFileStorageUrl + "/ProductFlags/" %>offers.png">
	 
	 //after :
	 <img src="http://www.appcloud.gr/DomainFileStorage/BD_Leto/ProductFlags/offers.png">


*SiteSession.RequestPage*
	//before :
	<a href="<%= SiteSession.RequestPage + "?id=175" %>">Μεγεθολόγιο</a>
	
	//after :
	<a src="http://www.letoshop.gr/default.aspx?id=175">Μεγεθολόγιο</a>
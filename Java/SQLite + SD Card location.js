//http://today.java.net/article/2010/03/17/getting-started-java-and-sqlite-blackberry-os-50
//at Run > Run Configuration
//or Debug > Debug Configuration

/*
Simulator TAB > Memory TAB > 
checkaroyme only 'Use PC file system for SD Card files' , nothing more
shutdown & reboot the emulator.. after the 1st boot will be a sctuctured folder.
*/

 public Database sqliteDB;
        
//create dbase file        
        public InnerClassScreen() {
            
            LabelField title = new LabelField("Create DB Application",
                LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH);
            setTitle(title);
            add(new RichTextField("Initializing db create process..."));
            
            try{
                URI uri = URI.create(
                    "file:///SDCard/BlackBerry/ringtones/database1.db"
                    //file:///SDCard/Databases/database1.db");
                sqliteDB = DatabaseFactory.create(uri);
                add(new RichTextField(
                    "Status: Database was successfully created."));
            } catch (Exception e){
                System.out.println(e.getMessage());
                add(new RichTextField(
                    "Status: Database was not created."));
                add(new RichTextField(e.getMessage()));
                e.printStackTrace();
            }
        }
        
        
//create TABLE

try {
    URI uri = URI.create("file:///SDCard/BlackBerry/ringtones/database1.db");
    sqliteDB = DatabaseFactory.open(myURI);
    Statement st = sqliteDB.createStatement( "CREATE TABLE 'Employee' ( " +
                                              "'Name' TEXT, " +
                                              "'Age' INTEGER )" );
            
    st.prepare();
    st.execute();
}
catch ( Exception e ) {         
    System.out.println( e.getMessage() );
    e.printStackTrace();
}


//inserting data to table

 try {
    URI uri = URI.create("file:///SDCard/BlackBerry/ringtones/database1.db");
    sqliteDB = DatabaseFactory.open(myURI);
    Statement st = sqliteDB.createStatement(
        "INSERT INTO Employee(Name,Age) " +
        "VALUES ('Ralph',47)");
            
    st.prepare();
    st.execute();
}
catch ( Exception e ) {         
    System.out.println( e.getMessage() );
    e.printStackTrace();
}


//get data from table

try {
    URI uri = URI.create("file:///SDCard/BlackBerry/ringtones/database1.db");
    sqliteDB = DatabaseFactory.open(myURI);
    Statement st = sqliteDB.createStatement("SELECT * FROM Employee");
    
    st.prepare();
    Cursor c = st.getCursor(); 

    Row r;
    while(c.next()) {
        r = c.getRow();
        String name =  r.getString(0) ;
        Integer age =  r.getInteger(1);
    }

}
catch ( Exception e ) {         
    System.out.println( e.getMessage() );
    e.printStackTrace();
}
//http://jtds.sourceforge.net/
//http://stackoverflow.com/questions/5255984/connecting-android-with-ms-sql-server-2008
//http://blog.althafkbacker.com/2013/10/android-and-microsoft-sql-ms-sql-server.html

/**
 * This is a demo code to demonstrate db connection and operations and not 
 * meant for a live run. 
 * 
 */

public class DBTestActivity extends Activity {

    private Connection conn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dbtest);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {

        getMenuInflater().inflate(R.menu.dbtest, menu);
        return true;

    }
    @Override
    protected void onResume() {

        super.onResume();
        (new DBConnection()).execute(null, null, null);

    }

    @Override 
    protected void onPause() {

        super.onPause();
        try {

            conn.close();

        } catch (SQLException e) {

            e.printStackTrace();

        }

    }
    class DBConnection extends AsyncTask<String, String, String> {

        @Override
        protected String doInBackground(String... arg0) {

            try {

                Log.e("MSSQL", "Attempting to connect");

                Class.forName("net.sourceforge.jtds.jdbc.Driver");
                conn = DriverManager.getConnection(
                        "jdbc:jtds:sqlserver://yourserver.com/DBName",
                        "username", "password");

                Log.e("MSSQL", "Connected");

            } catch (Exception e) {

                e.printStackTrace();
                Log.e("MSSQL", e.toString());

            }

            return null;
        }

    }

    class UserInfo {

        String userID;
        String userName;
        String PhoneNo;
        String age;

        public UserInfo(String userID, String userName, String PhoneNo,
                String age) {

            this.userID = userID;
            this.userName = userName;
            this.PhoneNo = PhoneNo;
            this.age = age;

        }

        public String getUserID() {
            return userID;
        }

        public void setUserID(String userID) {
            this.userID = userID;
        }

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getPhoneNo() {
            return PhoneNo;
        }

        public void setPhoneNo(String phoneNo) {
            PhoneNo = phoneNo;
        }

        public String getAge() {
            return age;
        }

        public void setAge(String age) {
            this.age = age;
        }

    }

    class DBOperation {

        public List<UserInfo> getAllUsers() throws SQLException {

            Statement statement = getStatement(conn);

            List<UserInfo> userlist = new ArrayList<UserInfo>();

            ResultSet rs = statement.executeQuery("SELECT * FROM UserInfoTable");
            rs.next();
            int count = 0;

            while (rs.next()) {

                userlist.add(new UserInfo(rs.getString(1), rs.getString(2),
                        rs.getString(3), rs.getString(4)));
                count++;

            }

            rs.close();
            statement.close();
            return userlist;

        }

        public void addUser(UserInfo info) {

            Log.e("MSSQL", "in adduser");

            Statement statement = getStatement(conn);

            try {

                ResultSet rs = statement.executeQuery("INSERT INTO UserInfoTable "
                        + " VALUES ('1001', 'Bob', '333333', '33')");
                rs.close();
                statement.close();

            } catch (SQLException e) {

                e.printStackTrace();

            } 

        }

        private Statement getStatement(Connection connection) {

            try {

                return connection.createStatement();

            } catch (Exception e) {

                throw new RuntimeException(e);

            }
        }

    }

}
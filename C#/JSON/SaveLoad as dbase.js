//caller (main form)
        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            dbases f = new dbases();

            if (f.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                fillDBASEScombo();

            f.Dispose();
        }
        
        private void fillDBASEScombo()
        {
            comboDBASE.Items.Clear();

            foreach (var item in General.dbases)
            {
                comboDBASE.Items.Add(item);
            }

        }
        
//settings form for class
    public partial class dbases : Form
    {
        public dbases()
        {
            InitializeComponent();
            fill();
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            textBox1.Text = textBox1.Text.Trim();
            textBox2.Text = textBox2.Text.Trim();

            if (textBox1.Text.Length == 0 || textBox2.Text.Length == 0)
            {
                MessageBox.Show("Please fill URL and Secret!", Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return;
            }

            if (General.dbases == null)
                General.dbases = new List<database>();

            if (listBox1.SelectedItem == null) //addnew 
            {
                General.dbases.Add(new database(textBox1.Text, textBox2.Text));

                General.saveJSON(General.dbaseFilePath);

                //listBox1.Items.Add(General.dbases[General.dbases.Count - 1]);
                //listBox1.SelectedIndex = listBox1.Items.Count - 1;
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
            else //update
            {
                database k = (database)listBox1.SelectedItem;
                k.url=textBox1.Text;
                k.secret=textBox2.Text;

                General.dbases[listBox1.SelectedIndex] = k;
                
                //listBox1.SelectedValue = k;

                General.saveJSON(General.dbaseFilePath);
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
        }

        private void fill()
        {
            listBox1.Items.Clear();

            foreach (database item in General.dbases)
            {
                 listBox1.Items.Add(item);
            }
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem == null)
            {
                textBox1.Text ="";
                textBox2.Text = "";
                return;
            }

            database k =(database) listBox1.SelectedItem;
            textBox1.Text = k.url;
            textBox2.Text = k.secret;
        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem == null)
                return;

            General.dbases.RemoveAt(listBox1.SelectedIndex);

            General.saveJSON(General.dbaseFilePath);

            this.DialogResult = System.Windows.Forms.DialogResult.OK;
        }
    }
    
//class
    class database
    {
        public string url {get;set;}
        public string secret { get; set; }

        public database() //needed for serialization
        {
        }

        public database(string url, string secret)
        {
            this.url = url;
            this.secret = secret;
        }

		//easily appearance to combo/listbox
        public override string ToString()
        {
            return url;
        }
    }
    
//static methods and  vars
        public static List<database> dbases = null;
        public static database dbase = null;
        
        public static void saveJSON(string fl)
        {
            foreach (database item in General.dbases)
                {
                    item.url = General.Encrypt(item.url);
                    item.secret = General.Encrypt(item.secret);
                }

                System.Web.Script.Serialization.JavaScriptSerializer oSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
                string sJSON = oSerializer.Serialize(General.dbases);

                File.WriteAllText(fl, sJSON, Encoding.UTF8);

                foreach (database item in General.dbases)
                {
                    item.url = General.Decrypt(item.url);
                    item.secret = General.Decrypt(item.secret);
                }
        }

 
        public static void loadJSON(string fl)
        {
            string tmp = File.ReadAllText(fl, Encoding.UTF8);

            JavaScriptSerializer oSerializer = new JavaScriptSerializer();
            //bb = oSerializer.Deserialize<BindingList<BackupItem>>(tmp);

            //http://stackoverflow.com/questions/21452929/bindinglist-when-load-items
            //The statement:
            //bb = oSerializer.Deserialize<BindingList<BackupItem>>(tmp);
            //is creating a whole new object, pointing to a different memory location from where checkedListBox1.DataSource is pointing to.

            //What you need to do is modify the content of the bb variable. First clear the content then add the new items. Something like this:


            
            var tmpObj = oSerializer.Deserialize<List<database>>(tmp);

            foreach (database item in tmpObj)
            {
                item.url = General.Decrypt(item.url);
                item.secret = General.Decrypt(item.secret);
            }

            if (General.dbases == null)
                General.dbases = new List<database>();

            General.dbases.Clear();
            tmpObj.ForEach(o => General.dbases.Add(o));

        }
        

        private static string Key = "G5AkXe71";
        private static readonly byte[] IVector = new byte[8] { 27, 9, 45, 27, 0, 72, 171, 54 };

        public static string Encrypt(string inputString)
        {
            if (inputString.Trim().Length == 0)
                return "";

            byte[] buffer = Encoding.ASCII.GetBytes(inputString);
            TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
            MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
            tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
            tripleDes.IV = IVector;
            ICryptoTransform ITransform = tripleDes.CreateEncryptor();
            return Convert.ToBase64String(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
        }

        public static string Decrypt(string inputString)
        {
            if (inputString.Trim().Length == 0)
                return "";

            byte[] buffer = Convert.FromBase64String(inputString);
            TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
            MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
            tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
            tripleDes.IV = IVector;
            ICryptoTransform ITransform = tripleDes.CreateDecryptor();
            return Encoding.ASCII.GetString(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
        }
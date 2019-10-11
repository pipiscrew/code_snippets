        public BindingList<BackupItem> bb = new BindingList<BackupItem>();

        private void checkedListBox1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Right)
                contextCheckList.Show(System.Windows.Forms.Cursor.Position);
        }

        private void toolStripMenuADD_Click(object sender, EventArgs e)
        {
            String tmp = "";

            if (General.InputBox("Name the backup", "Backup name :", ref tmp) != System.Windows.Forms.DialogResult.OK)
                return;

            if (tmp.Trim().Length == 0)
                return;
        }

        private void toolStripSave_Click(object sender, EventArgs e)
        {
            if (txtBackupName.Text.Length == 0)
            {
                MessageBox.Show("Backup name is empty!");
                return;
            }

            BackupItem product = bb.SingleOrDefault(p => p.backupName.ToUpper() == txtBackupName.Text.ToUpper());

            if (product != null)
            {
                MessageBox.Show("Backup name already exists!\r\n\r\nChoose another!");
                return;
            }

            BackupItem bbChild = null;

            //add new 
            if (checkedListBox1.SelectedItem == null)
            {
                //working also
                //bbChild = new BackupItem();
                //in the end needs 
                //bb.Add(bbChild);

                bbChild = bb.AddNew();
                bbChild.backupName = txtBackupName.Text;
            }
            else
            {
                bbChild = (BackupItem)checkedListBox1.SelectedItem;

                //update
                bbChild.backupName = txtBackupName.Text;

            }

            bbChild.LocalFrom = txtLocalFrom.Text;
            bbChild.LocalTo = txtLocalTo.Text;
            bbChild.LocalExclude = txtLocalExclude.Text;
            bbChild.RemoteServer = txtRemoteServer.Text;
            bbChild.RemotePort = txtRemotePort.Text;
            bbChild.RemoteUser = txtRemoteUser.Text;
            bbChild.RemotePassword = txtRemotePassword.Text;
            bbChild.RemoteFiles = txtRemoteFiles.Text;
            bbChild.FBbaseURL = txtBaseURL.Text;
            bbChild.FB = txtSecret.Text;
            bbChild.FBLocalTo = txtFBLocalTo.Text;

        }


        private void checkedListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            //GUI2BackupSet();

            if (checkedListBox1.SelectedItem != null)
            {
                BackupItem bbChild = (BackupItem)checkedListBox1.SelectedItem;

                txtBackupName.Text = bbChild.backupName;
                txtLocalFrom.Text = bbChild.LocalFrom;
                txtLocalTo.Text = bbChild.LocalTo;
                txtLocalExclude.Text = bbChild.LocalExclude;
                txtRemoteServer.Text = bbChild.RemoteServer;
                txtRemotePort.Text = bbChild.RemotePort;
                txtRemoteUser.Text = bbChild.RemoteUser;
                txtRemotePassword.Text = bbChild.RemotePassword;
                txtRemoteFiles.Text = bbChild.RemoteFiles;
                txtBaseURL.Text = bbChild.FBbaseURL;
                txtSecret.Text = bbChild.FB;
                txtFBLocalTo.Text = bbChild.FBLocalTo;

            }
        }


        private void toolStripBackup_Click(object sender, EventArgs e)
        {
            //RAR a -ep1 -r -x*\gen\ -x*\assets\ savec D:\a3\AnimationsDemo\bin\*
        }

        private void button3_Click(object sender, EventArgs e)
        {
            System.Web.Script.Serialization.JavaScriptSerializer oSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            string sJSON = oSerializer.Serialize(bb);

            System.IO.File.WriteAllText(@"D:\path.txt", sJSON);

        }

        void bb_ListChanged(object sender, ListChangedEventArgs e)
        {
            //MessageBox.Show(e.ListChangedType.ToString());
        }


        private void Form1_Load(object sender, EventArgs e)
        {

            checkedListBox1.DataSource = bb;

            checkedListBox1.DisplayMember = "backupName";
            //checkedListBox1.ValueMember = "LocalFrom";

            //bb.AddingNew += new AddingNewEventHandler(bb_AddingNew);
            //bb.ListChanged += new ListChangedEventHandler(bb_ListChanged);

            // Allow new parts to be added, but not removed once committed.        
            bb.AllowNew = true;
            bb.AllowRemove = true;

            // Raise ListChanged events when new parts are added.
            bb.RaiseListChangedEvents = true;

            // Do not allow parts to be edited.
            bb.AllowEdit = true;
        }

        //        BindingList<string> list = new BindingList<string>();
        //list.ListChanged += new ListChangedEventHandler(list_ListChanged);

        //void list_ListChanged(object sender, ListChangedEventArgs e) {
        //  switch (e.ListChangedType){
        //    case ListChangedType.ItemAdded:
        //      break;
        //    case ListChangedType.ItemChanged:
        //      break;
        //    case ListChangedType.ItemDeleted:
        //      break;
        //    case ListChangedType.ItemMoved:
        //      break;
        //    // some more minor ones, etc.
        //  }
        //}

        private void toolStripAdd_Click(object sender, EventArgs e)
        {
            checkedListBox1.SelectedIndex = -1;
            //checkedListBox1.SelectedItem = null;

            txtBackupName.Text = "";
            txtLocalFrom.Text = "";
            txtLocalTo.Text = "";
            txtLocalExclude.Text = "";
            txtRemoteServer.Text = "";
            txtRemotePort.Text = "";
            txtRemoteUser.Text = "";
            txtRemotePassword.Text = "";
            txtRemoteFiles.Text = "";
            txtBaseURL.Text = "";
            txtSecret.Text = "";
            txtFBLocalTo.Text = "";

            txtBackupName.Focus();


        }

        private void toolStripDel_Click(object sender, EventArgs e)
        {
            if (checkedListBox1.SelectedItem == null)
            {
                MessageBox.Show("please select an item");
                return;
            }

            bb.Remove((BackupItem)checkedListBox1.SelectedItem);

        }

        private void btnLocalFROM_Click(object sender, EventArgs e)
        {
            string sendr = (sender as Button).Name;
            string path = "";

            //pre select
            if (sendr == "btnLocalFROM")
                path = txtLocalFrom.Text;
            else if (sendr == "btnLocalTO")
                path = txtLocalTo.Text;
            else if (sendr == "btnFBLocalTo")
                path = txtFBLocalTo.Text;

            string tmp = General.searchFolder(path);

            if (tmp == null)
                return;

            //set
            if (sendr == "btnLocalFROM")
                txtLocalFrom.Text = tmp;
            else if (sendr == "btnLocalTO")
                txtLocalTo.Text = tmp;
            else if (sendr == "btnFBLocalTo")
                txtFBLocalTo.Text = tmp;

        }
    }

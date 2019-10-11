 public BindingList<BackupItem> bb = new BindingList<BackupItem>();
 .
 ..
 .
BackupItem product = bb.SingleOrDefault(p => p.backupName.ToUpper() == txtBackupName.Text.ToUpper());

    if (product!=null)
            {
                MessageBox.Show("Backup name already exists!\r\n\r\nChoose another!");
                return;
            }
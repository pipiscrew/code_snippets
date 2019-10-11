internal Dictionary<int, string> FolderList = new Dictionary<int, string>();
FolderList.Clear();
FolderList.Add(int.Parse(recs[0]), recs[2]);

string FolderName="";

FolderList.TryGetValue(int.Parse(data[6]), out FolderName);

MessageBox.Show(FolderName);
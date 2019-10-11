//http://forums.create.msdn.com/forums/p/71263/435281.aspx
void DownloadStream()
{
WebClient wc = new WebClient();
wc.OpenReadCompleted += new OpenReadCompletedEventHandler(wc_OpenReadCompleted);
wc.OpenReadAsync(new Uri(...));
}
void wc_OpenReadCompleted(object sender, OpenReadCompletedEventArgs e)
{
using (var store = System.IO.IsolatedStorage.IsolatedStorageFile.GetUserStoreForApplication())
{
if (store.FileExists("output.mp3"))
{
store.DeleteFile("output.mp3");
}
using (var fs = new System.IO.IsolatedStorage.IsolatedStorageFileStream("output.mp3", System.IO.FileMode.Create, store))
{
byte[] bytesInStream = new byte[e.Result.Length];
e.Result.Read(bytesInStream, 0, (int)bytesInStream.Length);
fs.Write(bytesInStream, 0, bytesInStream.Length);
fs.Flush();

this.mediaElement1.SetSource(fs);
}
}
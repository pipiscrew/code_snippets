//http://www.codeguru.com/csharp/csharp/cs_network/windowsservices/article.php/c12357/C-Map-Network-Drive-API.htm
//Mapping a network drive
NetworkDrive oNetDrive  = new aejw.Network.NetworkDrive();
try{
   oNetDrive.LocalDrive = "m:";
   oNetDrive.ShareName  = "\\ComputerName\Share"
   oNetDrive.MapDrive();
}catch(Exception err){
   MessageBox.Show(this,"Error: "+err.Message);
}
oNetDrive = null;

//Unmapping a network drive
NetworkDrive oNetDrive = new aejw.Network.NetworkDrive();
try{
   oNetDrive.LocalDrive = "m:";
   oNetDrive.UnMapDrive();
}catch(Exception err){
   MessageBox.Show(this,"Error: "+err.Message);
}
oNetDrive = null;


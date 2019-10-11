//https://stackoverflow.com/questions/17613216/how-to-pause-cmd-before-it-close
System.Diagnostics.ProcessStartInfo proc = new System.Diagnostics.ProcessStartInfo();
proc.FileName = @"cmd.exe";
proc.Arguments = "/K "+ "ipconfig" ;
System.Diagnostics.Process.Start(proc);
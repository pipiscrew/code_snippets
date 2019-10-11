//no1
                    Process SPY = new Process();
                    SPY.StartInfo.CreateNoWindow = true;
                    SPY.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                    SPY.StartInfo.FileName = (Application.StartupPath + "\\veteran4run.bat");
                    Process.Start(SPY.StartInfo);
                    
//no2

                    ProcessStartInfo psi = new System.Diagnostics.ProcessStartInfo();
                    psi.FileName = Application.StartupPath + "\\veteran4run.bat";
                    psi.CreateNoWindow = true;
                    psi.WindowStyle = ProcessWindowStyle.Hidden;
                    System.Diagnostics.Process p = new System.Diagnostics.Process();
                    p.StartInfo = psi;
                    p.Start();
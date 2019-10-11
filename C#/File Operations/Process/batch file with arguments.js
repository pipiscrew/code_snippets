                ProcessStartInfo psi = new System.Diagnostics.ProcessStartInfo();
                psi.FileName = "npm.cmd";
                psi.Arguments = uCommand;
                System.Diagnostics.Process p = new System.Diagnostics.Process();
                p.StartInfo = psi;
                //Set this so that you can tell when the process has completed
                p.EnableRaisingEvents = true;
                p.Start();
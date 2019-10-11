//http://forums.devshed.com/net-development-87/launch-a-commandline-process-and-read-output-without-hanging-355347.html
//ffmpeg needs RedirectStandardError lol?

        public static String RunAndGetOutput(String pathName)
        {
            ProcessStartInfo psi = new ProcessStartInfo(pathName);
            psi.RedirectStandardOutput = true;
            psi.StartInfo.CreateNoWindow = true; //psi.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
            psi.UseShellExecute = false;
            String returnvalue;
            using (Process runningProcess = Process.Start(psi))
            {
                runningProcess.WaitForExit();
                using (StreamReader OutReader = runningProcess.StandardOutput)
                {
                    returnvalue = OutReader.ReadToEnd();
                }
            }
            return returnvalue;
        }
        
//2nd
        /// <summary>
        /// String used to look through Sn.exe output.
        /// </summary>
        private const string PublicKeyToken = "Public key token is ";

        /// <summary>
        /// Uses the strong name utility to return the public key token for a 
        /// given assembly.
        /// </summary>
        /// <param name="strongNameUtility">Path that points to the strong name 
        /// utility (sn.exe) in an enlistment.</param>
        /// <param name="dll">The assembly filename.</param>
        /// <returns>Returns the public key token.</returns>
        [SuppressMessage("Microsoft.Security", "CA2122:DoNotIndirectlyExposeMethodsWithLinkDemands", Justification = "This build task needs to create a process.")]
        public static string GetPublicKeyToken(string strongNameUtility, string dll)
        {
            Process sn = new Process
            {
                StartInfo = new ProcessStartInfo(strongNameUtility, "-Tp " + dll)
                {
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                }
            };
            sn.Start();
            sn.WaitForExit();
            string output = sn.StandardOutput.ReadToEnd();
            int i = output.IndexOf(PublicKeyToken, StringComparison.Ordinal);
            if (i < 0)
            {
                return string.Empty;
            }
            return output.Substring(i + PublicKeyToken.Length).TrimEnd();
        }
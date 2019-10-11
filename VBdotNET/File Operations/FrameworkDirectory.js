dim frameworkDir$ = RuntimeEnvironment.GetRuntimeDirectory

^^^



example :

Dim process As New Process
process.StartInfo = New ProcessStartInfo(Path.Combine(RuntimeEnvironment.GetRuntimeDirectory, "installutil.exe"), Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly.Location), "WinAutomation.ServiceAgent.exe"))
process.Start
process.WaitForExit(&H2710)

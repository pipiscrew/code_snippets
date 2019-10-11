function InitializeSetup(): Boolean;

var
  Version: TWindowsVersion;

 begin
 
 	GetWindowsVersionEx(Version);
	// Only on Windows XP, check for Windows Installer
	if Version.NTPlatform and
		 (Version.Major = 5) and
		 (Version.Minor = 1) then
	begin
		msi31('3.1');
	end;
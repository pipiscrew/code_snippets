        For Each value As System.Environment.SpecialFolder In [Enum].GetValues(GetType(System.Environment.SpecialFolder))
            Console.WriteLine([Enum].GetName(GetType(System.Environment.SpecialFolder), value) + " = " + System.Environment.GetFolderPath(value))
        Next


0 - Desktop = C:\Documents and Settings\Admin\Desktop
2 - Programs = C:\Documents and Settings\Admin\Start Menu\Programs
5 - Personal = G:\Program Files\My Documents
5 - Personal = G:\Program Files\My Documents
6 - Favorites = G:\Program Files\Favorites
7 - Startup = C:\Documents and Settings\Admin\Start Menu\Programs\Startup
8 - Recent = C:\Documents and Settings\Admin\Recent
9 - SendTo = C:\Documents and Settings\Admin\SendTo
11 - StartMenu = C:\Documents and Settings\Admin\Start Menu
13 - MyMusic = G:\Program Files\My Documents\My Music
16 - DesktopDirectory = C:\Documents and Settings\Admin\Desktop
17 - MyComputer = 
21 - Templates = C:\Documents and Settings\Admin\Templates
26 - ApplicationData = C:\Documents and Settings\Admin\Application Data
28 - LocalApplicationData = C:\Documents and Settings\Admin\Local Settings\Application Data
32 - InternetCache = C:\Documents and Settings\Admin\Local Settings\Temporary Internet Files
33 - Cookies = C:\Documents and Settings\Admin\Cookies
34 - History = C:\Documents and Settings\Admin\Local Settings\History
35 - CommonApplicationData = C:\Documents and Settings\All Users\Application Data
37 - System = C:\WINDOWS\system32
38 - ProgramFiles = C:\Program Files
39 - MyPictures = G:\Program Files\My Documents\My Pictures
43 - CommonProgramFiles = C:\Program Files\Common Files

temp directory only with = msgbox(System.IO.Path.GetTempPath)

ex.
MsgBox(System.Environment.GetFolderPath(6))
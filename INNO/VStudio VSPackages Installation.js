C:\Program Files\Microsoft Visual Studio 9.0\Common7\IDE\ItemTemplates
+
G:\Program Files\My Documents\Visual Studio 2008\Templates\ItemTemplates
+
C:\Users\adm1n\AppData\Local\Microsoft\VisualStudio\10.0\Extensions\Corvalius\Codealike\0.0.3.986

kai ola ta VSPackages ka8ontai sth registry @:
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\Packages\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\Menus
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\ToolsOptionsPages\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\ToolWindows\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\UserSettings\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\InstalledProducts\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\AutomationProperties\
Root: HKLM; SubKey: SOFTWARE\Microsoft\VisualStudio\9.0\AutoLoadPackages\

ta VSPackages den xreiazontai na :
regasm or gacutil

ola ginontai apo thn registry..

o developer mporei na dhmioyrhsei ta regisrty entries apo to 
VS 2008 SDK me to util : RegPkg.exe
http://msdn.microsoft.com/en-us/library/bb166418.aspx

meta apo ta REGISTRY modifications prepei na tre3oyme to

devenv.exe /setup
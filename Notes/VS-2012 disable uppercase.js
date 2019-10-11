//http://blogs.msdn.com/b/zainnab/archive/2012/06/14/turn-off-the-uppercase-menu-in-visual-studio-2012.aspx

1-Open the registry editor and go to HKEY_CURRENT_USER\Software\Microsoft\VisualStudio\11.0\General\ 
(For Windows 8 Express go to HKEY_CURRENT_USER\Software\Microsoft\VSWinExpress\11.0\General)
(For Web Express go to HKEY_CURRENT_USER\Software\Microsoft\VSWDExpress\11.0\General) 

2-Create a new DWORD value called SuppressUppercaseConversion set to 1 

3-Restart Visual Studio and you should see the change
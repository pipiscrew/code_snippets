//http://blogs.msdn.com/b/visualstudio/archive/2010/02/24/troubleshooting-with-the-activity-log.aspx
for VS2010 goto CMD @:
C:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE

start IDE with :
devenv /log

exception from patched plugin appears (a VS messagebox)

goto 
%APPDATA%\Microsoft\VisualStudio\10.0\ActivityLog.xml

the error will be recorded..
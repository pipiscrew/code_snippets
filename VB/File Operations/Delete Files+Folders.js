Filenames only
--------------
Kill pathfilename

or batch

Kill "*.TXT"


Folders only
------------
Set FS = CreateObject("Scripting.FileSystemObject")
FS.DeleteFolder Text1 , True
Set FS = Nothing
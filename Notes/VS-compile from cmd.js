//%~dp0 is the current dir that batch file exists


//console app
cd /d c:\Windows\Microsoft.NET\Framework\v3.5
csc /platform:x86 /debug- /optimize /out:%~dp0\patch.exe %~dp0\Program.cs
pause

//window app
cd /d c:\Windows\Microsoft.NET\Framework\v3.5
csc /platform:x86 /debug- /optimize /t:winexe /out:%~dp0\patch.exe %~dp0\*.cs
pause


//user example with resources
copy all the *.resources files and all the *.cs files to one directory, then
the commando will go something like this:
csc (/t:winexe) sourcecode1.cs sourcecode2.cs (...)
/res:resourcefile1.resources /res:file2.resources ...
of course, you can also specify an output file,,
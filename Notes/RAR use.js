@ECHO OFF
CLS

SET BASEPATH=j:\sourcepath

FOR /D %%i IN (%basepath%\*.*) DO (
  RAR.exe a -r "-pyourpassword" -x*\bin -x*\obj -x*.rar -x*.zip -x*.7z -x*.exe -ep1 "U:\upload\%%~ni.rar" -s "%%i"
)

REM %%~ni = folder name only
REM %%i   = fullpath
REM enumerate folders - http://ss64.com/nt/for_d.html
REM if u remove /D enumerate files

pause

******************************************************


"FOR" command should do this task:

 for %1 in (*.*) do rar a "destfolder\%1.rar" "%1"

 If use of 'destfolder' is inacceptable and archives must be created in
 the current folder then it is necessary to prevent rar from compressing
 of already created .rar archives once more:

 for %1 in (*.*) do rar a -x*.rar "%1.rar" "%1"


If you use it inside of a script (.bat or .cmd):
====================.cmd==================================
cd G:\SOURCE
for "%%1" in (*.*) do D:\WinRAR\rar a -x*.rar " Z:\BACKUP\%%1.rar" "%%1"
==========================================================
where Z:\BACKUP\ is the destination folder.
Note: % would be to %%



Here some other examples for the command line
>---------------------------------------------------------------<

Using for, you may compress only files in the current folder:

for %1 in (*.*) do rar a -x*.rar "%1.rar" "%1"

both files and subfolders in the current folder:

for %1 in (*.*) do rar a -x*.rar "%1.rar" "%1"
for /d %1 in (*.*) do rar a -x*.rar "%1.rar" "%1"

all files in the current folder and subfolders placing
archives in the same folders with original files:

for /r %1 in (*.*) do rar a -x*.rar "%1.rar" "%1"

or placing all them to current folder:

for /r %1 in (*.*) do rar a -x*.rar "%~n1.rar" "%1"

> archive all subdirectories (including content and subdirectories) found
> in this directory into separate archives.
> Filename should be optional directory name or date.

It can be done using rar -ag switch:

for %1 in (*.*) do rar a -x*.rar -ag "%1.rar" "%1"

> There should be an option to delete subdirectories after archiving.

rar 'm' command does it:

for /d %1 in (*.*) do rar m -x*.rar "%1.rar" "%1"
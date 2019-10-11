//this batch file should be copied to the root of the AndroidStudio application (aka near gradlew.bat)

@echo off
set YYYYMMDD=%DATE:~10,4%%DATE:~7,2%%DATE:~4,2%_%time:~0,2%%time:~3,2%%time:~6,2%

cd /d %ProgramFiles(x86)%\WinRAR\
rar.exe a -ep1 -r "%~dp0\%YYYYMMDD%" -x*\build -x*\.gradle -x*\.idea "%~dp0"

pause


//the same as 1st but put the archive one dir back
@echo off
set YYYYMMDD=%DATE:~10,4%%DATE:~7,2%%DATE:~4,2%_%time:~0,2%%time:~3,2%%time:~6,2%

cd /d %ProgramFiles(x86)%\WinRAR\
rar.exe a -ep1 -r "%~dp0..\%YYYYMMDD%" -x*\build -x*\.gradle -x*\.idea "%~dp0"

pause

//the same as 2nd but put the folder name
@echo off
REM get current folder name
for %%a in (.) do set currentfolder=%%~na
REM echo %currentfolder%

set YYYYMMDD=%DATE:~10,4%%DATE:~7,2%%DATE:~4,2%_%time:~0,2%%time:~3,2%%time:~6,2%

cd /d %ProgramFiles(x86)%\WinRAR\
rar.exe a -ep1 -r "%~dp0..\%currentfolder%%YYYYMMDD%" -x*.jar -x*.aar -x*\build -x*\.gradle -x*\.idea "%~dp0"

pause
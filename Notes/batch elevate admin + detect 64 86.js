NET SESSION
IF %ERRORLEVEL% NEQ 0 GOTO ELEVATE
GOTO ADMINTASKS

:ELEVATE
CD /d %~dp0
MSHTA "javascript: var shell = new ActiveXObject('shell.application'); shell.ShellExecute('%~nx0', '', '', 'runas', 1);close();"
EXIT

:ADMINTASKS
TASKKILL /F /IM PDFXEdit.exe
TASKKILL /F /IM pdfSaver.exe
TASKKILL /F /IM PDFXTools.exe
TASKKILL /F /IM PDFXHost32.exe
TASKKILL /F /IM PDFXHost64.exe
IF EXIST "%PROGRAMFILES(X86)%" (GOTO 64BIT) ELSE (GOTO 32BIT)


:64BIT
del "%ProgramW6432%\Tracker Software\PDF Editor\PDFXEditCore.x64.dll"
del "%ProgramW6432%\Tracker Software\PDF Editor\PDFXEditCore.x86.dll"
del "%ProgramW6432%\Tracker Software\PDF-XChange Standard\pdfSaver.exe"
del "%ProgramW6432%\Tracker Software\PDF Tools\PDFXEditCore.x64.dll"
Copy "%~dp0Files\PDFXEditCore.x64.dll" "%ProgramW6432%\Tracker Software\PDF Editor\PDFXEditCore.x64.dll"
Copy "%~dp0Files\PDFXEditCore.x86.dll" "%ProgramW6432%\Tracker Software\PDF Editor\PDFXEditCore.x86.dll"
Copy "%~dp0Files\PDFXEditCore.x64.dll" "%ProgramW6432%\Tracker Software\PDF Tools\PDFXEditCore.x64.dll"
Copy "%~dp0Files\pdfSaver_x64.exe" "%ProgramW6432%\Tracker Software\PDF-XChange Standard\pdfSaver.exe"
GOTO END

:32BIT
del "%ProgramFiles%\Tracker Software\PDF Editor\PDFXEditCore.x86.dll"
del "%ProgramFiles%\Tracker Software\PDF-XChange Standard\pdfSaver.exe"
del "%ProgramFiles%\Tracker Software\PDF Tools\PDFXEditCore.x86.dll"
Copy "%~dp0Files\PDFXEditCore.x86.dll" "%ProgramFiles%\Tracker Software\PDF Editor\PDFXEditCore.x86.dll"
Copy "%~dp0Files\PDFXEditCore.x86.dll" "%ProgramFiles%\Tracker Software\PDF Tools\PDFXEditCore.x86.dll"
Copy "%~dp0Files\pdfSaver_x32.exe" "%ProgramFiles%\Tracker Software\PDF-XChange Standard\pdfSaver.exe"
GOTO END

:END
EXIT
//register.bat
for %%f in (*.dll) do gacutil /i %%f /f 
pause

//unregister.bat
for %%f in (*.dll) do gacutil -u %%~nf
pause
paste&save to x.bat


for /f "tokens=*" %%G in ('dir /AD /B') do del /f/s/q "%%G" > nul && rd "%%G" /s /q

tested&working on network path.

src – http://stackoverflow.com/a/6208144/1320686
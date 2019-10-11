 Set oshell = createobject("Wscript.Shell")
    oshell.run"cmd.exe"
    wscript.sleep 500
    oshell.sendkeys "net stop ""Your service name here"""+("{Enter}")
    wscript.sleep 5000
    oshell.sendkeys "net start ""Your service name here"""+("{Enter}")
    wscript.sleep 5000
    oshell.sendkeys "exit"+("{Enter}")

    set oshell = nothing

    WScript.Quit
    
    
    'install service with Framework
    'C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727
    installutil.exe service name
    installutil.exe /u service name
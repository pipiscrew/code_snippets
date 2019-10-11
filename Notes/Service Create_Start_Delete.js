

example @ CMD
sc delete ekrn


start :
net start "TeamViewer5"

create :
sc create "MySQL" binpath= "C:\Archivos de programa\MySQL\MySQL Server 5.1\bin\mysqld.exe"

//https://docs.oracle.com/cd/E29805_01/server.230/es_admin/src/radm_service_sc_syntax.html
sc create "WinAutomation Service" displayname= "WinAutomation Service" binpath= "D:\a3\New Folder (10)\WinAutomation\WinAutomation.ServiceAgent.exe"
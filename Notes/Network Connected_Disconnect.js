'http://stackoverflow.com/questions/2706046/how-to-connect-disconnection-connection-on-windows-xp-2k-with-c
'http://lamahashim.blogspot.com/2010/03/disabling-network-using-c.html
netsh interface set interface "ADAPTER_NAME" DISABLED
netsh interface set interface "ADAPTER_NAME" ENABLED


--------------

clear stored login :
net use * /del

after logoff
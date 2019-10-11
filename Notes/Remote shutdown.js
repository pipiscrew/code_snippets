//http://stackoverflow.com/questions/16526627/windows-7-remote-shutdown-access-denied5

You can use the NET USE command to authenticate on the remote server and then use shutdown.exe

NET USE \\MyServer\IPC$ mypassword /USER:myuser

shutdown -m \\192.168.2.10 -s -f -t 0
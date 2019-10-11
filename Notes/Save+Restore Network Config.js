save ::
netsh -c interface dump > c:\configs\officeinterface.txt 

restore ::
netsh -f c:\configs\officeinterface.txt
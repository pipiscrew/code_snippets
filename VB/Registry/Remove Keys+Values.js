To Remove an entire "tree" from the registry using REGEDIT and a .REG file, just add a minus sign before the tree name: 

REGEDIT4

[-HKEY_CURRENT_USER\DummyTree]

will Remove the entire tree "DummyTree".

To Remove an individual item from the registry, place the minus sign after the equal sign: 
REGEDIT4

[HKEY_CURRENT_USER\DummyTree]
"ValueToBeRemoved"=-



source @: http://www.robvanderwoude.com/index.html
also ready functions @:
http://www.vbcity.com/forums/topic.asp?tid=74481
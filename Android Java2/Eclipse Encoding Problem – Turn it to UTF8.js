//http://stackoverflow.com/questions/17385818/eclipse-character-encoding
//http://www.pipiscrew.com/2016/02/eclipse-encoding-problem-turn-it-to-utf8/

*1*
The conversion will be made to your files at once batch. WANRING before, keep a backup, all your utf8 characters will be 'chinese' (restore it from backup), dont try to make manual the convertion by notepad++.

The file you are reading must be containg UTF-8 or some other encoding characters and when you try to print them on on console then you will get some chracters as �'. This is because the defualt console encoding is not UTF-8 in eclipse. You need to set it by going to Run Configuration -> Common -> Encoding -> Select UTF-8 formthe drop down. Check belo screenshot:


*2*
If you'd like to change the character encoding for your entire Eclipse workspace, go to Windows -> Preferences, then under General -> Workspace, change the 'Text file encoding' to the appropriate character encoding (in this case, UTF-8).

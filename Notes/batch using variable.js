//http://www.pipiscrew.com/2018/01/showhide-all-hidden-settings-in-windows7-power-options/

//dont run this

@echo off
REM SET attrib=+ATTRIB_HIDE
    SET attrib=-ATTRIB_HIDE
    
powercfg -attributes 0012ee47-9041-4 %attrib%
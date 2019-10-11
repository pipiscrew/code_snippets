Private Declare Function Beep Lib "kernel32" (ByVal dwFreq As Long, ByVal dwDuration As Long) As Long 

To sound the beeper, simply use 

Beep 500, 1000 

The first value sets the frequency (or pitch). I find my PC's beeper performs best in the 500-3000 range. The second value is the duration of the beep in milliseconds (so 1000 is one second).

or use can use VB Beep function
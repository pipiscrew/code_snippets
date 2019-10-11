'http://www.basic4ppc.com/forum/basic4android-updates-questions/15118-byte-conversion.html#post85992
//sample1
	Dim i As Int
	Dim k As String 
	k= "άέόίύή-ΆΈΌΊΎΉ"
	For i = 0 To 23
    	Log(Asc(k.CharAt(i)))
	Next
	Return 

//sample2

Dim d As Char 
d = "α".CharAt(0)
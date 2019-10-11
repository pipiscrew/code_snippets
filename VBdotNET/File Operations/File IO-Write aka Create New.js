'        Imports System
'        Imports System.IO
'        Imports System.text
 
'        ================
'        write txt file
'        ================
        Dim sw As System.IO.StreamWriter = New System.IO.StreamWriter("c:\takis.txt", System.Text.Encoding.Unicode)
        sw.WriteLine ("This")
        sw.WriteLine ("is some text")
        sw.WriteLine ("to test")
        sw.WriteLine ("Reading")
        sw.Close()
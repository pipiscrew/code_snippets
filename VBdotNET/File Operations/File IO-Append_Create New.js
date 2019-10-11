'        Imports System
'        Imports System.IO
'        Imports System.text
 

'        ================
'        when TRUE = Open file for append if not exist will be created!
'        when FALSE = file will be overwritten
'        ================
        Dim file As System.IO.StreamWriter
        file = My.Computer.FileSystem.OpenTextFileWriter("C:\Program Files\Easiestutils\YouTube FLV to AVI Suite Pro\readme1.txt", False)
        file.WriteLine ("adsfsdafsdafsad")
        file.Close()
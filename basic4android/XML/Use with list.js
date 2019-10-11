//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6866-xml-parsing-xmlsax-library-3.html

Sub Process_Globals
    Dim parser As SaxParser
    Type Car(name As String, weight As String, hp As String)
    Dim myCars As List
End Sub

Sub Globals
End Sub

Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        parser.Initialize
        Dim in As InputStream
        in = File.OpenInput(File.DirAssets, "test.txt")
        myCars.Initialize
        parser.Parse(in, "cars")
        in.Close
    End If
    Dim c As Car
    c = myCars.Get(2)
    Log(c.name & " " & c.weight & " " & c.hp)
End Sub

Sub cars_StartElement (Uri As String, Name As String, Attributes As Attributes)
    If Name = "car" Then
        Dim c As Car
        c.Initialize
        myCars.Add(c)
    End If
End Sub

Sub cars_EndElement (Uri As String, Name As String, Text As StringBuilder)
    Dim c As Car
    c = myCars.Get(myCars.Size - 1) 'Get a reference to the last car
    Select Name
        Case "name"
            c.name = Text
        Case "weight"
            c.weight = Text
        Case "hp"
            c.hp = "Text"
    End Select
End Sub
'source
'http://www.dotnetmonster.com/Uwe/Forum.aspx/dotnet-vb/46047/Converting-a-string-to-a-Form-object

'kalytero pianei kai se module giati den exei to
'Me.GetType().Assembly.GetType(strClass)
        Dim strClass As String = Reflection.Assembly.GetExecutingAssembly.GetName.Name & ".Form2"
        Dim f As Form = Reflection.Assembly.GetExecutingAssembly.CreateInstance(strClass)
        With f
            .ShowDialog()
            .Dispose()
        End With


        Dim strClass As String = Reflection.Assembly.GetExecutingAssembly.GetName.Name & ".Form2"
        Dim tyOfStringVariable As Type = Me.GetType().Assembly.GetType(strClass)
        Dim frmObject As Object = Activator.CreateInstance(tyOfStringVariable)
        Dim f As Form = CType(frmObject, Form)
        With f
            .ShowDialog()
            .Dispose()
        End With


'**modded** so can call method from classes (As Object)
        Dim strClass As String = Reflection.Assembly.GetExecutingAssembly.GetName.Name & ".Form1"
        Dim f As Object = Reflection.Assembly.GetExecutingAssembly.CreateInstance(strClass)
        MsgBox(f.encrypt("takis"))        
'den xainetai sto Reflector to call!!!        
--



    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        Dim SampleAssembly As [Assembly]
        ' Instantiate a target object.
        Dim Integer1 As New Int32()
        Dim Type1 As Type
        ' Set the Type instance to the target class type.
        Type1 = Integer1.GetType()
        ' Instantiate an Assembly class to the assembly housing the Integer type.  
        SampleAssembly = [Assembly].GetAssembly(Integer1.GetType())
        ' Display the name of the assembly currently executing
        Console.WriteLine(("GetExecutingAssembly=" + [Assembly].GetExecutingAssembly().FullName))
    End Sub 
    
    epistrefei :
GetExecutingAssembly=WindowsApplication1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null

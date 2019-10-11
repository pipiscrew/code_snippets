'source :http://social.microsoft.com/Forums/zh-CN/2212/thread/b8bdcb1a-458f-4406-bbf9-36d99969cb0a

    <DllImport("Winmm.dll")> _
    Private Shared Function PlaySound(ByVal data As Byte(), ByVal hMod As IntPtr, ByVal dwFlags As UInt32) As Long
    End Function


    Private Declare Function mciSendString Lib "winmm.dll" Alias "mciSendStringA" (ByVal lpstrCommand As String, ByVal lpstrReturnString As String, ByVal uReturnLength As Long, ByVal hwndCallback As Long) As Long


    Private Sub ans1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ans1.Click, ans2.Click, ans3.Click, ans4.Click, ans5.Click
        Dim lbl = DirectCast(sender, Label)

        If lbl.Tag.ToString.ToLower = "true" Then
            PlayWavResource("correct.wav")
            GetNextQuestion()
        Else
            PlayWavResource("wrong.wav")
        End If

    End Sub

    Public Sub PlayWavResource(ByVal wav As String)
        ' get the namespace 
        Dim strNameSpace As String = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name.ToString()

        ' get the resource into a stream
        Dim str As Stream = System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream((strNameSpace & ".") + wav)

        If str Is Nothing Then
            Exit Sub
        End If
        ' bring stream into a byte array
        Dim bStr As Byte() = New [Byte](str.Length - 1) {}
        str.Read(bStr, 0, CInt(str.Length))

        ' play the resource
        PlaySound(bStr, IntPtr.Zero, 1 Or 4)
    End Sub
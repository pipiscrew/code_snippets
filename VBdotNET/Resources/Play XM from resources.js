Dim XMPlayer As Object

Private Sub Form1_FormClosing(ByVal sender As Object, ByVal e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing
If Not XMPlayer Is Nothing Then XMPlayer.Close()
End Sub



'call this on load
Private Sub LoadXM()

'>>>>>>>>>Reflection with 'ufMODWrapper.dll'
Dim streamDLL As IO.Stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("PRJnamespace.ufMODWrapper.dll")

Dim bufferDLL As Byte() = New Byte(streamDLL.Length - 1) {}

streamDLL.Read(bufferDLL, 0, bufferDLL.Length)

Dim assembly2 As Assembly = Assembly.Load(bufferDLL)

Dim withoutFOR As Type
withoutFOR = assembly2.GetType("ufMODWrapper.Player")

XMPlayer = Activator.CreateInstance(withoutFOR)
'>>>>>>>>>Reflection with 'ufMODWrapper.dll'


'>>>>>>>>>Read XM to bytearray
Dim stream As IO.Stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("PRJnamespace.chiptune.xm")
Dim buffer As Byte() = New Byte(stream.Length - 1) {}

stream.Read(buffer, 0, buffer.Length)
stream.Close()
'>>>>>>>>>Read XM to bytearray

'>>>>>>>>>Pass the XM bytearray to XMPLAYER - If the result is TRUE then PLAY
If XMPlayer.InitPlayer(buffer) Then
XMPlayer.Play()
End If
End Sub


'@ chiptune.xm + ufMODWrapper.dll must have property (build action = embedded resource)

//http://www.basic4ppc.com/android/help/network.html#socket
UDPSocket supports sending and receiving UDPPackets. Sending packets is done by calling the Send method.
When a packet arrives the PacketArrived event is raised with the packet.
This example sends a string message to some other machine. When a packet arrives it converts it to string and shows it:

Sub process_globals
    Dim UDPSocket1 As UDPSocket
End Sub

Sub Globals

End Sub
Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        UDPSocket1.Initialize("UDP", 0, 8000)
    End If
    Dim Packet As UDPPacket
    Dim data() As Byte
    data = "Hello from Android".GetBytes("UTF8")
    Packet.Initialize(data, "10.0.0.1", 5000)
    UDPSocket1.Send(Packet)
End Sub
Sub UDP_PacketArrived (Packet As UDPPacket)
    Dim msg As String
    msg = BytesToString(Packet.Data, Packet.Offset, Packet.Length, "UTF8")
    Msgbox("Message received: " & msg, "")
End Sub 
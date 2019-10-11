Dim MyLan As ServerSocket
MyLan.Initialize(0, "")
MyLan.Listen
Msgbox(MyLan.GetMyIP, "")
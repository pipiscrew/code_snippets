Dim out As OutputStream
Dim bf2() As Byte 
Dim buffer() As Byte 
dim str as string 

str = "Hello!"


bf2= str.GetBytes("UTF8")
out.InitializeToBytesArray(0)
out.WriteBytes(bf2,0,bf2.Length )

buffer = out.ToBytesArray()
Msgbox (BytesToString(buffer,0,buffer.Length,"UTF8"),"hgj")
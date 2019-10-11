This will make a key in the Current user root folder.
My.Computer.Registry.CurrentUser.CreateSubKey("TestKey")
Now expand the The Current User root folder and you'll find a new key (folder) made!
Lety set a value on it.
My.Computer.Registry.SetValue("HKEY_CURRENT_USER\TestKey", _"TestValue", "This is a test value.")


As you'll see a new "REG_SZ" value was added.
Very Important : If you want to presice the registry key value type just type ',' and Visual Studio editor will list you the value types.
Now let's read what we wrote!


Dim readValue As String
readValue = My.Computer.Registry.GetValue _
("HKEY_CURRENT_USER\TestKey", "TestValue", Nothing)
MsgBox("The value is " & readValue)


Let's finish by deleting it.
My.Computer.Registry.CurrentUser.DeleteSubKey("TestKey")


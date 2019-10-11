//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/11565-encrypting-information-randomaccessfile-library.html
    Dim list1 As List
    list1.Initialize
    For i = 1 To 1000
        list1.Add("Item #" & i)
    Next
    'writing the object
    Dim raf As RandomAccessFile
    raf.Initialize(File.DirRootExternal, "1.dat", False)
    raf.WriteEncryptedObject(list1, "some secret password", raf.CurrentPosition)
    'you can continue to write more objects to this file
    '...
    raf.Close
    
    'reading the object
    Dim raf As RandomAccessFile
    raf.Initialize(File.DirRootExternal, "1.dat", False)
    Dim list2 As List
    list2 = raf.ReadEncryptedObject("some secret password", raf.CurrentPosition)
    Log(list2)
    raf.Close
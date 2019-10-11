Dim FS As Variant
Dim Fldr As Variant
Dim SubFldr As Variant

Set FS = CreateObject("Scripting.FileSystemObject")

Set Fldr = FS.GetFolder("c:\vb")

    For Each SubFldr In Fldr.SubFolders
        Debug.Print SubFldr.Name
    Next
    
Set FS = Nothing
Set Fldr = Nothing
Set SubFldr = Nothing
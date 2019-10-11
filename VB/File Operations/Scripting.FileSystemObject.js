Dim FS As Variant
Dim File As Variant
Dim Fldr As Variant

Set FS = CreateObject("Scripting.FileSystemObject")
Set Fldr = FS.GetFolder(a & "\")

For Each File In Fldr.Files
    Text1 = Text1 & File.Name & vbCrLf
Next
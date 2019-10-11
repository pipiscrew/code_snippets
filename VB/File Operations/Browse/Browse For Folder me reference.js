'reference > Microsoft Shell32
'kanei conflict me to Microsoft Script 
'unload Script tag first  Shell32
'and then Script 

Dim SH As New Shell     'reference to shell32.dll class
Dim ShBFF As Folder     'Shell Browse For Folder

On Error Resume Next
Set ShBFF = SH.BrowseForFolder(hWnd, "Choose Folder...", 1)
Text1 = ShBFF.Items.Item.Path
'h
'Text1 = ShBFF.Name
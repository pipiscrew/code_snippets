lstv.ColumnHeaders.Add 1, "a", "Arithmos", 1000
lstv.ColumnHeaders.Add 2, "b", "Poses Fores", 4200

Dim FS As Variant
Dim Fldr As Variant
Dim SubFldr As Variant
Dim flCount%

Set FS = CreateObject("Scripting.FileSystemObject")

Set Fldr = FS.GetFolder(App.Path)

    flCount = 1
    For Each SubFldr In Fldr.SubFolders
        If Left(SubFldr.Name, 1) = "_" Then
            Companies.ListImages.Add , "a" & flCount, Picture:=LoadPicture(App.Path & "\" & SubFldr.Name & "\scrn.btx")
            lstv.ListItems.Add , "A" & flCount, Mid(SubFldr.Name, 2), flCount
            
            flCount = flCount + 1
        End If
    Next
    
Set FS = Nothing
Set Fldr = Nothing
Set SubFldr = Nothing


'tips for listview
'===thumb
If thumbBUTT.Value Then
    Set lstv.SmallIcons = Nothing
    ImageList1.ListImages.Clear
    ImageList1.ListImages.Add , "b1", Image1
    Set lstv.SmallIcons = ImageList1
Else
    Set lstv.SmallIcons = Nothing
    ImageList1.ListImages.Clear
    ImageList1.ListImages.Add , "b1", Image2
    Set lstv.SmallIcons = ImageList1
End If
'===thumb
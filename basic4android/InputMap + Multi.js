//http://www.basic4ppc.com/search?query=InputMap

InputMap (Items As Map, Title As String)
Shows a modal dialog with a list of items and checkboxes. The user can select multiple items.
The dialog is closed by pressing on the "Ok" button.
The items displayed are the map keys. Items with a value of True will be checked.
When the user checks or unchecks an item, the related item value gets updated.
Items - A map object with the items as keys and their checked state as values.
Example:
Dim m As Map
m.Initialize
m.Put("Item #1", True)
m.Put("Item #2", False)
m.Put("Item #3", False)
m.Put("Item #4", True)
InputMap(m, "Check items")


//for multi items
Sub Activity_Create (FirstTime As Boolean)
    Dim options As Map
    Dim scores As List
    options.Initialize
    scores.Initialize
    options.Put("Option 1", False)
    options.Put("Option 2", False)
    options.Put("Option 3", False)
    scores.AddAll(Array As Int(2, 1, 4))
    InputMap(options, "Choose options")
    Dim score As Int
    For i = 0 To options.Size - 1
        If options.GetValueAt(i) = True Then score = score + scores.Get(i)
    Next
    Msgbox("Score=" & score, "")
End Sub
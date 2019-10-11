	Type Element (ItemName As String, Val As String)
	Dim LanguagesID As List
	Dim LngItem As Element

		If LanguagesID.IsInitialized=False Then
			LanguagesID.Initialize
		End If 

		LanguagesID.Clear


		LngItem.ItemName = SQLReader.GetColumnName(1)
		LngItem.Val = SQLReader.GetString("TgUniqueField")
		LanguagesID.Add(LngItem)	
		
...
..
.

		LngItem = LanguagesID.Get(cmbLanguage.SelectedIndex)
		Msgbox( LngItem.ItemName,"upd")
		recDetails.Add(LngItem.Val)
		
-----------

'http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6729-creating-linked-list-using-type-keyword.html

Sub Process_Globals
    Type Element (NextElement As Element, Val As Int)
    Dim Head As Element
    Dim Last As Element
End Sub

Sub Globals

End Sub
Sub InitializeList (Value As Int)
    Head.Initialize
    Head.Val = Value
    Last = Head 'The last item is currently the head.
End Sub
Sub AddElement(Value As Int)
    'create a new element
    Dim e As Element
    e.Initialize
    e.Val = Value
    Last.NextElement = e 'set the NextElement of the current last element to the new one.
    Last = e 'set the last variable to point to the new element.
End Sub

Sub ListToString As String
    Dim e As Element
    Dim sb As StringBuilder
    sb.Initialize
    e = Head
    Do While e.IsInitialized = True
        sb.Append(e.Val).Append(CRLF)
        e = e.NextElement
    Loop
    Return sb.ToString
End Sub

 Sub Activity_Create(FirstTime As Boolean)
    InitializeList(10)
    AddElement(9)
    AddElement(8)
    AddElement(7)
    AddElement(6)
    AddElement(5)
    Msgbox(ListToString, "List values")
End Sub
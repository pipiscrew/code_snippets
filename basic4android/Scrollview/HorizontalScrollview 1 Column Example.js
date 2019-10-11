Sub Globals
	Dim scvList As HorizontalScrollView

	'on each line label.tag holds this info
	Type RowCol (RecID As Int,Row As Int,CodeName As String )
	
	'panel will be added to scrollview 
	Dim Table As Panel 'categories panel 
	
	Dim PanelColor  As Int		: PanelColor = Colors.White
	
	Dim LabelRoundCorner As ColorDrawable 'used by categories and products
	
'--------------------------------------------------------------------------CATEGORIES
	'image dimension also labels resized to same (so be centered).
	Dim itemDimensionWidth As Int : itemDimensionWidth = 100dip
	Dim itemDimensionHeight As Int : itemDimensionHeight = 80dip
	
	'space between 'rows'
	Dim rowWidth As Int : rowWidth = 120dip
	
    'hold the last select rowIndex so when select new row deselect previous one
	Dim prevRowIndex As Int : prevRowIndex=-1
	
	'label backcolor normal
	Dim lblNormalColor As Int : lblNormalColor= Colors.White
	
	'label backcolor selected
	Dim lblSelectColor As Int : lblSelectColor= Colors.black
'--------------------------------------------------------------------------CATEGORIES
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("scroll2")
	
	LabelRoundCorner.Initialize(Colors.Green, 5dip)
	
	'----CATEGORIES
	scvList.Panel.Color=Colors.Black
	Table = scvList.Panel
	Table.Color = PanelColor
	
	FillCategories
End Sub


Sub FillCategories 
	Dim SQLReader As Cursor
	Dim i As Int

	SQLReader = General.GetCursor("SELECT [TgUniqueField]," & General.SelectedLNG & ",Lang2ENG from Categories order by " & General.SelectedLNG) 

	If SQLReader <> Null Then 
		
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			
			AddRowCategory(i,SQLReader.GetString(General.SelectedLNG),SQLReader.GetInt("TgUniqueField"))
		Next
		
		'final panel height (rowcount * rowWidth)
		Table.Width = i * rowWidth
		
		SQLReader.Close
	End If 
End Sub 

#Region " CATEGORIES EVENTS + PROCS "

' Adds a row to CATEGORIES panel (aka ScrollviewPanel)
Sub AddRowCategory(recPosition As Int,categoryName As String,RecID As Int)
	'---store information to tag
	Dim rc As RowCol
	rc.Initialize
	rc.Row = recPosition
	rc.RecID= RecID
	'---store information to tag
	
	Dim lbl As Label
	lbl.Initialize("cellCAT") 'need this to create an event 
	lbl.Background = LabelRoundCorner
	lbl.Text =categoryName
	lbl.Gravity = Gravity.CENTER
	lbl.Color  = Colors.Transparent 'backcolor
	lbl.TextSize = 16
	lbl.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	lbl.Tag = rc
	'---store information to tag
	
	'------------------add to scrollview panel
	Table.AddView(lbl, rowWidth  * recPosition, 5dip, itemDimensionWidth, itemDimensionHeight)
End Sub

' When a label clicked
Sub CellCAT_Click
	Dim rc As RowCol
	Dim l As Label
	l = Sender
	rc = l.Tag

	ShowSelectedCategory(rc.Row,rc.RecID)
End Sub

' When image clicked
Sub imgCAT_Click
	Dim rc As RowCol
	Dim l As ImageView
	l = Sender
	rc = l.Tag

	ShowSelectedCategory(rc.Row,rc.RecID)
End Sub

Sub ShowSelectedCategory(row As Int, recID As Int)
	DelSelectPreviousCAT
	GetViewCAT(row).Color =Colors.ARGB(50,96,102,255) ' lblSelectColor
	
	FillProductsList(recID)
End Sub 

Sub DelSelectPreviousCAT
	If prevRowIndex=-1 Then Return 

	Dim lbl As Label
	lbl=Table.GetView(prevRowIndex)
	lbl.Color=lblNormalColor
End Sub 

Sub GetViewCAT(Row As Int) As Label
	Dim lbl As Label
	
	'col0=img
	'col1=lbl
			    'Row * NumberOfColumns + col <- ALWAYS 1 BECAUSE ALWAYS RETURN COLUMN 1 (aka label)
	prevRowIndex=Row '* NumberOfColumns + 1
	
						
	lbl = Table.GetView(prevRowIndex)
	Return lbl
End Sub

#End Region 
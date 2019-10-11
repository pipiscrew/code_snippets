//activity must added from designer
//clickable also the image
'Activity module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.

End Sub

Sub Globals
	Dim scvList As ScrollView
	Dim Table As Panel
	Dim PanelColor  As Int							: PanelColor = Colors.White
	
	'in each line label.tag holds this info
	Type RowCol (RecID As Int,Row As Int)
	
	'image dimension also labels resized to same (so be centered).
	Dim imgDimension As Int : imgDimension = 100dip
	
	'space between 'rows'
	Dim rowHeight As Int : rowHeight = 120dip
	
	'how many ctls per row
	Dim NumberOfColumns As Int : NumberOfColumns=2
	
	'hold the last select rowIndex so when select new row deselect previous one
	Dim prevRowIndex As Int : prevRowIndex=-1
	
	'label backcolor normal
	Dim lblNormalColor As Int : lblNormalColor= Colors.White
	
	'label backcolor selected
	Dim lblSelectColor As Int : lblSelectColor= Colors.black
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("scroll2")
	
	scvList.Panel.Color=Colors.Black
	Table = scvList.Panel
	Table.Color = PanelColor
	
	FillCategories
End Sub

Sub FillCategories 
	Dim Buffer() As Byte 
	Dim SQLReader As Cursor
	Dim i As Int

	SQLReader = General.GetCursor("SELECT [TgUniqueField]," & General.SelectedLNG & ",Picture,Lang2ENG from Categories order by " & General.SelectedLNG) 

	If SQLReader <> Null Then 
		
		For i= 0 To SQLReader.RowCount-1
			SQLReader.Position = i
			Buffer = SQLReader.GetBlob("Picture")
			
			
			Try 
				If Buffer = Null Then 
					'lstvCAT.AddSingleLine2(SQLReader.GetString(General.SelectedLNG),SQLReader.GetInt("TgUniqueField"))
				Else
					'lstvCAT.AddTwoLinesAndBitmap2(SQLReader.GetString(General.SelectedLNG),SQLReader.GetString("Lang2ENG"),General.GetBitmapFromByteArray(Buffer),SQLReader.GetInt("TgUniqueField"))
					AddRowCategory(i,General.GetBitmapFromByteArray(Buffer),SQLReader.GetString(General.SelectedLNG),SQLReader.GetInt("TgUniqueField"))
				End If 
			Catch 
				Msgbox ("Couldnt add to categories listview","ERROR")
			End Try 
		Next
		
		'final panel height (rowcount * rowHeight)
		Table.Height = i * rowHeight
		
		SQLReader.Close
	End If 
End Sub 

' Adds a row to panel aka ScrollviewPanel
Sub AddRowCategory(recPosition As Int,imgBMP As Bitmap,categoryName As String,RecID As Int)
	'---store information to tag
	Dim rc As RowCol
	rc.Initialize
	rc.Row = recPosition
	rc.RecID= RecID
	'---store information to tag
	
	Dim img As ImageView 
	img.Initialize("img")
	Table.AddView(img, 5dip,rowHeight*recPosition,imgDimension,imgDimension)
	img.Bitmap = imgBMP
	img.Tag = rc

	Dim lbl As Label
	lbl.Initialize("cell") 'need this to create an event 
	lbl.Text =categoryName
	lbl.Gravity = Gravity.CENTER
	lbl.Color  = Colors.Transparent 'backcolor
	lbl.TextSize = 16
	lbl.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	lbl.Tag = rc
	'---store information to tag
	
	'------------------add to scrollview panel
	Table.AddView(lbl, 100dip, rowHeight  * recPosition, imgDimension, imgDimension)
End Sub

' When a label clicked
Sub Cell_Click
	Dim rc As RowCol
	Dim l As Label
	l = Sender
	rc = l.Tag

	DelSelectPrevious
	GetView(rc.Row).Color = lblSelectColor
End Sub

' When image clicked
Sub img_Click
	Dim rc As RowCol
	Dim l As ImageView
	l = Sender
	rc = l.Tag

	DelSelectPrevious
	GetView(rc.Row).Color = lblSelectColor
End Sub

Sub DelSelectPrevious
	If prevRowIndex=-1 Then Return 

	Dim lbl As Label
	lbl=Table.GetView(prevRowIndex)
	lbl.Color=lblNormalColor
End Sub 

Sub GetView(Row As Int) As Label
	Dim lbl As Label
	
	'col0=img
	'col1=lbl
			    'Row * NumberOfColumns + col <- ALWAYS 1 BECAUSE ALWAYS RETURN COLUMN 1 (aka label)
	prevRowIndex=Row * NumberOfColumns + 1
	
						
	lbl = Table.GetView(prevRowIndex)
	Return lbl
End Sub
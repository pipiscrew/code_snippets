//Vertical Scrollview with 2columns
//1-Image 2-Label

Sub Globals
	Dim prdList As ScrollView
	
	'on each line label.tag holds this info
	Type RowCol (RecID As Int,Row As Int,CodeName As String )
	
	'panel will be added to scrollview 
	Dim TablePRD As Panel 'products panel 
	
	Dim PanelColorPRD  As Int	: PanelColorPRD = Colors.White
	
	Dim LabelRoundCorner As ColorDrawable 'used by categories and products
	
'--------------------------------------------------------------------------PRODUCTS
	'image dimension also labels resized to same (so be centered).
	Dim imgDimensionPRD As Int : imgDimensionPRD = 80dip

	'label width
	Dim lblWidthPRD As Int : lblWidthPRD = 200dip
	
	'space between 'rows'
	Dim rowHeightPRD As Int : rowHeightPRD = 80dip
	
	'how many ctls per row
	Dim NumberOfColumnsPRD As Int : NumberOfColumnsPRD=2
	
	'hold the last select rowIndex so when select new row deselect previous one
	Dim prevRowIndexPRD As Int : prevRowIndexPRD=-1
	
	'label backcolor normal
	Dim lblNormalColorPRD As Int : lblNormalColorPRD = Colors.White
	
	'label backcolor selected
	Dim lblSelectColorPRD As Int : lblSelectColorPRD = Colors.black
'--------------------------------------------------------------------------PRODUCTS
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("scroll2")
	
	LabelRoundCorner.Initialize(Colors.Green, 5dip)
	
	'----PRODUCTS
	prdList.Panel.Color=Colors.Black
	TablePRD = prdList.Panel
	TablePRD.Color = PanelColorPRD
	'----PRODUCTS
End Sub

#Region " PRODUCTS EVENTS + PROCS "

Sub FillProductsList(catID As Int )
	ClearProducts
	
	Dim SQLReader As Cursor
	Dim i As Int
	
	SQLReader = General.GetCursor("SELECT TgUniqueField," & General.SelectedLNG & ",price as [jo],CodeName from Products where categoryID = " & catID & " order by " & General.SelectedLNG) 'aka Select TOP 1
	
	If SQLReader <> Null Then 
			Dim Buffer() As Byte
			Dim productName As String 
			
			For i= 0 To SQLReader.RowCount-1
				SQLReader.Position = i
				productName = SQLReader.GetString(General.SelectedLNG) & CRLF & SQLReader.GetString("jo") & "€"
				
				If File.Exists(General.AppPath & "/prodIMG",SQLReader.GetString("CodeName")  & ".jpg") Then 
					AddRowProduct(i,LoadBitmapSample(General.AppPath & "/prodIMG",SQLReader.GetString("CodeName")  & ".jpg",100dip,100dip),productName,SQLReader.GetInt("TgUniqueField"),SQLReader.GetString("CodeName"))
				Else
					AddRowProduct(i,LoadBitmapSample(File.DirAssets,"questionmark.jpg",50dip,50dip),productName,SQLReader.GetInt("TgUniqueField"),SQLReader.GetString("CodeName"))
				End If 
			Next 
		
		
		TablePRD.Height = i * rowHeightPRD
		SQLReader.Close
	End If 

End Sub 

' Adds a row to PRODUCTS panel (aka ScrollviewPanel)
Sub AddRowProduct(recPosition As Int,imgBMP As Bitmap,productName As String,RecID As Int, CodeName As String )
	'---store information to tag
	Dim rc As RowCol
	rc.Initialize
	rc.Row = recPosition
	rc.RecID= RecID
	rc.CodeName= CodeName
	'---store information to tag
	
'	If imgBMP <> Null Then 
		Dim img As ImageView 
		img.Initialize("imgPRD")
		TablePRD.AddView(img, 5dip,rowHeightPRD * recPosition,imgDimensionPRD,imgDimensionPRD)
		img.Bitmap = imgBMP
		img.Tag = rc
'	End If 
	
	Dim lbl As Label
	


	lbl.Initialize("cellPRD") 'need this to create an event 
	lbl.Background = LabelRoundCorner
	lbl.Text =productName
	lbl.Gravity = Gravity.CENTER_VERTICAL + Gravity.LEFT
	lbl.Color  = Colors.Transparent 'backcolor
	lbl.TextSize = 16
	lbl.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	lbl.Tag = rc
	'---store information to tag
	
	'------------------add to scrollview panel
	TablePRD.AddView(lbl, 110dip, rowHeightPRD  * recPosition, lblWidthPRD, imgDimensionPRD)
End Sub

' Clears the Products table (aka scrollview)
Sub ClearProducts
	For i = TablePRD.NumberOfViews -1 To 0 Step -1
		TablePRD.RemoveViewAt(i)
	Next
	TablePRD.Height = 0
	prdList.ScrollPosition=0
	prevRowIndexPRD=-1
End Sub

' When a label clicked
Sub CellPRD_Click
	Dim rc As RowCol
	Dim l As Label
	l = Sender
	rc = l.Tag

	ShowSelectedProduct(rc.Row,rc.RecID,rc.CodeName)
End Sub

' When image clicked
Sub imgPRD_Click
	Dim rc As RowCol
	Dim l As ImageView
	l = Sender
	rc = l.Tag

	ShowSelectedProduct(rc.Row,rc.RecID,rc.CodeName)
End Sub

Sub ShowSelectedProduct(row As Int, recID As Int,CodeName As String)
	DelSelectPreviousPRD
	GetViewPRD(row).Color = Colors.ARGB(50,0,0,0) ' = lblSelectColorPRD
	
	Dim itemHTML As String 
	itemHTML=General.ExecuteScalar("select " & General.SelectedLNG & "html from products where TgUniqueField=" & recID)
	
	'replace special HTML chars
	itemHTML = itemHTML.Replace("&quot;",QUOTE)
	itemHTML = itemHTML.Replace("&amp;","&")
	itemHTML = itemHTML.Replace("&lt;","<")
	itemHTML = itemHTML.Replace("&gt;",">")
	itemHTML = itemHTML.Replace("&#91;","[")
	itemHTML = itemHTML.Replace("&#93;","]")
	itemHTML = itemHTML.Replace("&euro;","€")
	'replace special HTML chars
	
	If itemHTML.Contains("{pic}") Then 
		itemHTML=itemHTML.Replace("{pic}"," <img src=" & QUOTE & General.AppPath & "/prodIMG/" & CodeName & ".jpg" & QUOTE & "/> ")
	End If 
	
	itemDetails.LoadHtml(itemHTML)
End Sub 

Sub DelSelectPreviousPRD
	If prevRowIndexPRD=-1 Then Return 

	Dim lbl As Label
	
'	Try 
		lbl=TablePRD.GetView(prevRowIndexPRD)
		lbl.Color=lblNormalColorPRD
'	Catch 
'		Log("LBL NULL")
'	End Try 
	
	
End Sub 

Sub GetViewPRD(Row As Int) As Label
	Dim lbl As Label
	
	'col0=img
	'col1=lbl
			    'Row * NumberOfColumns + col <- ALWAYS 1 BECAUSE ALWAYS RETURN COLUMN 1 (aka label)
	prevRowIndexPRD = Row * NumberOfColumnsPRD + 1
	
						
	lbl = TablePRD.GetView(prevRowIndexPRD)
	Return lbl
End Sub

#End Region 
'Activity module
Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.

End Sub

Sub Globals
	Dim prdList As ScrollView
	
	'on each line label.tag holds this info
	Type RowCol (RecID As Int,Row As Int,CodeName As String )
	
	Dim TablePRD As Panel 'products panel
	
	Dim PanelColorPRD  As Int	: PanelColorPRD = Colors.White
	
'--------------------------------------------------------------------------PRODUCTS
	'image dimension also labels resized to same (so be centered).
	Dim imgDimensionPRD As Int : imgDimensionPRD = 80dip

	'TITLE label width
	Dim lblTitleWidthPRD As Int : lblTitleWidthPRD = 240dip

	'TITLE label height
	Dim lblTitleHeightPRD As Int : lblTitleHeightPRD = 32dip

	'DESCRIPTION label width
	Dim lblDescrWidthPRD As Int : lblDescrWidthPRD = 230dip

	'DESCRIPTION label height
	Dim lblDescrHeightPRD As Int : lblDescrHeightPRD = 48dip

	'PRICE label width
	Dim lblPriceWidthPRD As Int : lblPriceWidthPRD = 50dip
	
	'space between 'rows'
	Dim rowHeightPRD As Int : rowHeightPRD = 80dip
	
	'how many ctls per row
	Dim NumberOfColumnsPRD As Int : NumberOfColumnsPRD=4
	
	'hold the last select rowIndex so when select new row deselect previous one
	Dim prevRowIndexPRD As Int : prevRowIndexPRD=-1
	
	'label backcolor normal
	Dim lblNormalColorPRD As Int : lblNormalColorPRD = Colors.White
	
	'label backcolor selected
	Dim lblSelectColorPRD As Int : lblSelectColorPRD = Colors.black
'--------------------------------------------------------------------------PRODUCTS

	Dim prevTouchPanel As Panel 
End Sub

Sub Activity_Create(FirstTime As Boolean)
	Activity.LoadLayout("scroll2")
	
	'----PRODUCTS
	prdList.Panel.Color=Colors.Black
	TablePRD = prdList.Panel
	TablePRD.Color = PanelColorPRD
	'----PRODUCTS
	
	'FillCategories
End Sub


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

				productName = SQLReader.GetString(General.SelectedLNG) '& CRLF & SQLReader.GetString("jo") & "€"
				
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


Sub TouchPanel_Click
	Dim rc As RowCol
	Dim selected As Panel 
	selected = Sender
	
	'if enter in this event but no panel initialized exit 
	If selected.IsInitialized =False Then Return 
	
	'if previous panel exists 'deselect' it
	If prevTouchPanel.IsInitialized Then 
		prevTouchPanel.Color=Colors.ARGB(0,0,0,0)
	End If 
	
	'//get the clicked item INFO stored from dbase
	rc = selected.Tag
	'//get the clicked item INFO stored from dbase
	
	'show the selected as 'selected'
	selected.Color = Colors.ARGB(50,0,0,0)
	

	'store the selected panel to temporary variable, used to 'deselect' the row
	prevTouchPanel=selected
End Sub

' Adds a row to CATEGORIES panel (aka ScrollviewPanel)
Sub AddRowProduct(recPosition As Int,imgBMP As Bitmap,productName As String,RecID As Int, CodeName As String )
	'---store information for tag
	Dim rc As RowCol
	rc.Initialize
	rc.Row = recPosition
	rc.RecID= RecID
	rc.CodeName= CodeName
	'---store information for tag

	

	'---this panel is container for ROW controls in the end added to SCROLLVIEW panel
	Dim Pane As Panel
	Pane.Initialize("RowPanel")
	Pane.Color = Colors.White 'Colors.RGB(Rnd(0, 255), Rnd(0, 255), Rnd(0, 255))
	'Pane.Tag = rc
	
	'**********************---product image 
	Dim img As ImageView 
	img.Initialize("imgPRD")
	'add imageview to panel
	Pane.AddView(img, 5dip,0dip,imgDimensionPRD,imgDimensionPRD)
	'set picture to imageview 
	img.Bitmap = imgBMP
	
	
	'**********************---product title
	Dim lbl As Label
	lbl.Initialize("cellPRD") 'need this to create an event 
	'lbl.Background = LabelRoundCorner
	lbl.Text =productName  '& CRLF & "multiline ofc!"
	lbl.Typeface = Typeface.DEFAULT_BOLD
	lbl.Gravity = Gravity.TOP +  Gravity.LEFT 'Gravity.CENTER_VERTICAL + Gravity.LEFT
	lbl.Color  = Colors.White '.Transparent 'backcolor
	lbl.TextSize = 14
	lbl.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	'lbl.Tag = rc
	Pane.AddView(lbl, 10dip + imgDimensionPRD, 0,  lblTitleWidthPRD, lblTitleHeightPRD)
	
	'**********************---product description
	Dim lbl2 As Label
	lbl2.Initialize("cellPRD") 'need this to create an event 
	'lbl2.Background = LabelRoundCorner
	lbl2.Text ="this is a description!" '& CRLF & "multiline ofc!" & CRLF & "multiline ofc!"
	lbl2.Gravity = Gravity.TOP + Gravity.LEFT
	lbl2.Color  = Colors.White 'backcolor
	lbl2.TextSize = 12
	lbl2.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	'lbl.Tag = rc
	Pane.AddView(lbl2, 10dip + imgDimensionPRD, lblTitleHeightPRD,   lblDescrWidthPRD, lblDescrHeightPRD)
	
	
	'**********************---product price
	Dim lbl3 As Label
	lbl3.Initialize("cellPRD") 'need this to create an event 
	lbl3.Background = LabelRoundCorner
	lbl3.Text ="999,99"
	lbl3.Gravity = Gravity.TOP + Gravity.RIGHT'Gravity.CENTER_VERTICAL + Gravity.RIGHT
	lbl3.Color  = Colors.White 'backcolor
	lbl3.TextSize = 14
	lbl3.TextColor = Colors.Gray
	'lbl.Color= Colors.White
	'lbl.Tag = rc
	Pane.AddView(lbl3, 10dip + imgDimensionPRD+ lblTitleWidthPRD , 0 ,  lblPriceWidthPRD, lblTitleHeightPRD) 'lblPriceWidthPRD, imgDimensionPRD)
	
	'**********************---in the end we add a transparent panel over all so we can catc user touch!
	Dim PanelTop As Panel 
	PanelTop.Initialize("TouchPanel")
	PanelTop.Color = Colors.ARGB(0,0,0,0) 'Colors.RGB(Rnd(0, 255), Rnd(0, 255), Rnd(0, 255))
	PanelTop.Tag = rc
	Pane.AddView(PanelTop, 0 , 0 ,  100%y, 90) 'lblPriceWidthPRD, imgDimensionPRD)
	'**********************---add local panel to scrollview panel---**********************
	TablePRD.AddView(Pane, 0dip, rowHeightPRD  * recPosition, 100%y , 90)
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
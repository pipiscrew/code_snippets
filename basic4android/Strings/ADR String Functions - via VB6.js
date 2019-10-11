//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/10365-string-functions.html

AsciiCodes(),  SearchDate(),  DateNew(),  DateNOD(),  Date(),  Split(),  InStr(),  MB()
ValidDate(), SplitGetWord()
    
SplitGetWord("A test string", " ", 2) - 'splits the string and returns the nth word (RBsoft, Jost aus Soest & Margret)
AsciiCodes - 'Displays an dialog showing all the Ascii Codes
Date - 'returns the current system date
SearchDate("04/06/2012", "04/14/2012", 30) - 'true means the dates passed are within (x) days of each other, pass x as 3rd parameter
DateNew("02/12/2012", 90) - 'returns a new date 90 days later, 2nd parameter can be + or - number
DateNOD("04/06/2012", "12/12/2011") - 'show the days passed between dates passed
ValidDate("13/12/2012") - 'returns true if you pass a valid date
InStr("Where is me at", "me") - 'shows the location of 2nd parameter in string (RBsoft)
Split("Here is a test string to take apart", " ") - 'returns the string split into List elements at each occurance of the 2nd parameter (RBsoft)    
MB("My Text Here") - 'same as MsgBox() but only the one parameter is needed


'**** ADR String Functions, Version 1.2, April 6th, 2012
'This code goes in a code module named s, short for string functions
'Call any of these from any other activity or code module with the s. prefix. Examples:
's.Left(variable, 5) OR s.Ltrim(variable)
Sub AsciiCodes
	macs = ""
	For l = 1 To 255
		macs = macs & l & ": " & Chr(l) & CRLF
	Next
	Msgbox(macs, "Ascii Codes")
End Sub
Sub SearchDate(CurrentDate As String, CompareToDate As String, DateRange As Int) As Boolean
	'CurrentDate is most times the systems current date
	'CompareToDate is most likely from a datafile record
	'DateRange is the scope the two dates should be within, like 30 days, 90 days, etc.
	If ValidDate(CurrentDate) AND ValidDate(CompareToDate) Then
		ty = DateTime.GetYear(DateTime.DateParse(CurrentDate))
		tm = DateTime.GetMonth(DateTime.DateParse(CompareToDate))
		td = DateTime.GetDayOfMonth(DateTime.DateParse(CompareToDate))
		CompareToDate2 = tm & "/" & td & "/" & ty
	Else
		Return False
	End If
	DayOfYearCompareDate = DateTime.GetDayOfYear(DateTime.DateParse(CompareToDate2))
	DayOfYearCurrentDate = DateTime.GetDayOfYear(DateTime.DateParse(CurrentDate))
	If DayOfYearCompareDate >= DayOfYearCurrentDate AND DayOfYearCompareDate <= (DayOfYearCurrentDate + DateRange) Then
		Return True
	Else
		Return False
	End If
End Sub
Sub DateNew(DatePassed As String, HowManyDays As Int) As String
	'HowManyDays can be + or - numbers
	Dim ConvertDate, NewDateDay As Long
	ConvertDate = DateTime.DateParse(DatePassed)
	NewDateDay = DateTime.Add(ConvertDate, 0, 0, HowManyDays)
	MyDateDay = DateTime.Date(NewDateDay)
	Return MyDateDay
End Sub
Sub DateNOD(CurrentDate As String, OtherDate As String) As Int
	Dim CurrDate, OthDate, MyNewDate As Long
	CurrDate = DateTime.DateParse(CurrentDate)
	OthDate = DateTime.DateParse(OtherDate)
	NumOfDays = (CurrDate-OthDate)/(DateTime.TicksPerDay)
	Return NumOfDays
End Sub
Sub Date() As String 
	MyDateDay = DateTime.Date(DateTime.Now)
	Return MyDateDay
End Sub
Sub ValidDate(ChkDate) As Boolean
	dcf = 0
	Try
    	GoodDate = DateTime.DateParse(ChkDate)
	Catch
    	GoodDate = ""
		dcf = 1
	End Try
	If dcf = 0 Then
		Return True
	Else
		Return False
	End If	
End Sub
Sub Split(CurrentString As String, Split_At_Delimiter As String) As List
	'*** Function by RBSoft
	Dim t As List
	t = Regex.Split(Split_At_Delimiter, CurrentString)
	Return t
End Sub
Sub SplitGetWord(CurrentString As String, Split_At_Delimiter As String, GetElement As Int) As String
	'*** Original Function by RBSoft modified with suggestions from Jost aus Soest
	Dim t As List
	t = Regex.Split(Split_At_Delimiter, CurrentString)
	rs = iif(GetElement-1 <= t.Size -1, t.Get(GetElement-1), "Invalid Element Selected")
	Return rs
End Sub
Sub InStr(StrVar As String,SearchStr As String)As Long	'Same as At()
	'*** Function by RBSoft
	Dim x As Long
	x = StrVar.IndexOf(SearchStr)
	Return x
End Sub
Sub MB(Message As String)
	Msgbox(Message, "")
End Sub
Sub Left(Text As String, Length As Long)As String 
	If length>text.Length Then length=text.Length 
	Return text.SubString2(0, length)
End Sub
Sub Right(Text As String, Length As Long) As String
	If length>text.Length Then length=text.Length 
	Return text.SubString(text.Length-length)
End Sub
Sub Mid(Text As String, Start As Int, Length As Int) As String 
	If Len(Text) = 0 Then
		Return ""
	End If	
	Return text.SubString2(start-1,start+length-1)
End Sub
Sub At(CurrentText As String,FindInString As String) As Int	'Same as InStr()
	Return CurrentText.IndexOf(FindInString)
End Sub
Sub Stuff(CurrentText As String, InsertInString As String, RemoveFromString As String) As String  
	Return Left(CurrentText,At(CurrentText, RemoveFromString)) & InsertInString & Right(CurrentText, (Len(CurrentText)-At(CurrentText, RemoveFromString))-Len(RemoveFromString))
End Sub
Sub Trim(Text As String) As String
	Return Text.Trim
End Sub
Sub Len(Text As String) As Long
	Return text.Length
End Sub
Sub Ltrim(Text As String) As String
	Do While Left(Text, 1) =" "
		text = Right(text, len(text)-1)
	Loop
	Return Text
End Sub
Sub Rtrim(Text As String) As String
	Do While Right(Text, 1) =" "
		text = Left(text, len(text)-1)
	Loop
	Return Text
End Sub
Sub Val(Text As String) As Double
	Do While IsNumber(Right(text,1))=False Then
		If len(text) >0 Then
			text=Left(text, Len(text)-1)
		Else
			Exit
		End If	
	Loop
	If len(text) > 0 Then 
		Return text + 0
	Else
		Return 0
	End If	
End Sub
Sub Empty(Text As String) As Boolean
	text = Trim(text)
	If text.Length < 1 Then
		Return True
	Else
		Return False
	End If	
End Sub
Sub IsEmpty(Text As String) As Boolean
	text = Trim(text)
	If text.Length < 1 Then
		Return True
	Else
		Return False
	End If	
End Sub
Sub iif(Text As String, Text1 As String, Text2 As String) As String
	If text = True Then Return text1 Else Return text2
End Sub
Sub Space(HM As Int) As String
	RS = ""
	Do While Len(RS) < HM
		RS = RS & " "
	Loop
	Return RS
End Sub
Sub Exist(Text As String) As Boolean
	If File.Exists("", Text) Then Return True Else Return False
End Sub
Sub RndChrGen(Howmany As Int, CT As Int) As String
	'CT = 0 for Upper & Lower case 
	'CT = 1 for Upper case only
	'CT = 2 for Lower case only
	a=""
	If CT = 0 Then
		L=65 : U=122
	Else If CT=1 Then
		L=65 : U=90
	Else
		L=97 : U=122
	End If
	For x=1 To Howmany				
		Do While len(a) < Howmany	
			ha = Rnd(L, U)
			If ha>=91 AND ha<=96 Then 
			Else
				a = a & Chr(ha)
			End If
		Loop
	Next
	Return a
End Sub
Sub Upper(Text As String) As String
	Ctext = Text.ToUpperCase
	Return Ctext
End Sub
Sub Lower(Text As String) As String
	Ctext = Text.ToLowerCase
	Return Ctext
End Sub
Sub Proper(Text As String) As String
	Do While Right(Text,1) = Chr(32)
	Loop
	Do While At(Text, Chr(32)) > -1
		A = Mid(Text, At(Text, Chr(32))+1, 2)
		B = Upper(Right(A, 1)) 
		Text = Stuff(Text, Chr(160) & B, A)
	Loop
	B = Upper(left(Text,1))
	Text = B & Right(Text, Len(Text) -1)
	Do While At(Text, Chr(160)) > -1
		Text = Stuff(Text, Chr(32), Chr(160))
	Loop
	Return Text
End Sub
Sub Process_Globals
End Sub
Sub Globals
End Sub
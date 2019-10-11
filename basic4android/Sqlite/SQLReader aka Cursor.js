'RowCount
if SQLReader.RowCount > 0 then
	....
else
	SQLReader.close 
end if





'Loop through recordset
	Dim SQLReader As Cursor
	Dim i As Int
    SQLReader = SQL1.ExecQuery("SELECT TgUniqueField,Code, Name FROM CONTACTS order by Name")

    For i = 0 To SQLReader.RowCount - 1
        SQLReader.Position = i
		
		lstv.AddTwoLines2(SQLReader.GetString("Code"),SQLReader.GetString("Name"),SQLReader.GetString("TgUniqueField"))
    Next
    SQLReader.Close
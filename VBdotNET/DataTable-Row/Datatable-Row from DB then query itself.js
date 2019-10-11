        
Dim currentRow As Data.DataRow
Dim filterResult() As DataRow

        'tmpRecord = DirectCast(childNode.Tag, DataRow)
        
        to 'data' einai datatable

        filterResult = data.Select("[PROJECT_ID] = " + childNode.Tag)
OR with ORDER
	  filterResult = dt.Select("[QPag] = " & vehicleSection, "QPag ASC , QCod ASC , AAA ASC")


        For Each currentRow In filterResult

            Dim newMeeting As New Dbi.WinControl.Schedule.dbiTimeBarItem
            newMeeting.Start = currentRow("TASK_START")
            newMeeting.End = currentRow("TASK_END")
            'newMeeting.Text = newMeeting.Start.ToShortTimeString + " - " + newMeeting.End.ToShortTimeString + vbCrLf + currentRow("TASK_NAME")
            newMeeting.Text = newMeeting.Start.ToShortDateString + " - " + newMeeting.End.ToShortDateString + vbCrLf + currentRow("TASK_NAME")
            newMeeting.Tag = currentRow("TASK_ID").ToString
            newMeeting.EntryID = currentRow("PROJECT_ID").ToString
            childNode.TimeBars.Add(newMeeting)

        Next
        
        
'no tested
dataview v=dt.defaultview;
v.sort="columnName DESC";
dt=v.toTable();
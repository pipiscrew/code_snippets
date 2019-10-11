SELECT *
FROM tasks
WHERE task_start between '01/04/2000'AND '04/01/2010'

^^dates must converted by this function 

    Public Function ConvertDATEtoSQL(ByVal dt As DateTime) As String
        Return dt.Year & "-" & dt.Month & "-" & dt.Day
    End Function
    
    
    
'when the field is datetime and not smalldatetime we have to pass also the hour

'example
select * from cal_data where ondate between '2010-01-22 00:00:00' and '2011-01-30 00:00:00' 
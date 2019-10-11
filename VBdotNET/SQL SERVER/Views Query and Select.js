You still need to include a valid SELECT statement, even though you are using a view.


'to cal_data einai View ston SQL Server kai to pedio einai DateTime
        Dim dt As DataTable
        dt = sqlC.GetDATATABLE("select * from cal_data where ondate between '2010-01-22 00:00:00' and '2011-01-01 00:00:00'")
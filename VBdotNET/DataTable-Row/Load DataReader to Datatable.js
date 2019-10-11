        Dim dt As DataTable = New DataTable

        Dim sr As SqlClient.SqlDataReader
        sr = sqlC.GetDATAREADER("select rec_id,NAME_DAY as [ΗΜΕΡΑ],HOSPITAL as [ΝΟΣΟΚΟΜΕΙΟ],DOCTOR as [ΙΑΤΡΟΣ],DOCTOR_STATUS as [ΚΑΤ ΙΑΤΡΟΥ],APP_TYPE as [ΕΙΔΟΣ ΕΠΙΣΚΕΨΗΣ],a1 as [a1],a2 as [a2],a3 as [a3],a4 as [a4],a5 as [a5],b1 as [b1],b2 as [b2],b3 as [b3],b4 as [b4],b5 as [b5] from [CTABLE]")

        dt.Load(sr)
        
        For Each dataR As DataRow In dt.Rows
            If dataR.Item(4) = 0 Then
                dataR.Item(4) = ("ΥΠΑΡΧΩΝ")
            Else
                dataR.Item(4) = ("ΝΕΟΣ")
            End If
        Next
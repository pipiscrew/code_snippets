
sqlC.AddParameter("@nodename", formTrans, SqlDbType.NVarChar, ParameterDirection.Input, 80)
sqlC.AddParameter("@isfolder", 0, SqlDbType.Bit, ParameterDirection.Input)
sqlC.AddParameter("@parentnode", parentID, SqlDbType.Bit, ParameterDirection.Input)
sqlC.AddParameter("@nodecode", txtIDE.Text, System.Data.OleDb.OleDbType.LongVarWChar, ParameterDirection.Input, txtIDE.Text.Length)

'attachment
If nodeAttachments.attachment Is Nothing Then
    sqlC.AddParameter("@attachment", DBNull.Value, OleDb.OleDbType.LongVarBinary, ParameterDirection.Input, 1) 'we pass 1, cant be 0 for DB
Else
    sqlC.AddParameter("@attachment", nodeAttachments.attachment, OleDb.OleDbType.LongVarBinary, ParameterDirection.Input, nodeAttachments.attachment.Length)
End If

'screenshot
If nodeAttachments.attachmentScreenshot Is Nothing Then
    sqlC.AddParameter("@screenshot", DBNull.Value, OleDb.OleDbType.LongVarBinary, ParameterDirection.Input, 1)
Else
    sqlC.AddParameter("@screenshot", nodeAttachments.attachmentScreenshot, OleDb.OleDbType.LongVarBinary, ParameterDirection.Input, nodeAttachments.attachmentScreenshot.Length)
End If

sqlC.AddParameter("@attachmentfilename", nodeAttachments.attachmentFilename, SqlDbType.NVarChar, ParameterDirection.Input, 50)


sqlC.ExecuteParameter("insert into codes (nodename,isfolder,parentnode,nodecode,Attachment,ScreenShot " & _
                ",AttachFilename) values (@nodename,@isfolder,@parentnode,@nodecode,@attachment," & _
                "@screenshot,@attachmentfilename)")
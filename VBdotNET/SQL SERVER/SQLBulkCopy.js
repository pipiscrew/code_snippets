Imports System 

Imports System.Text 

Imports System.Data 

Imports System.Data.SqlClient 

Imports System.Data.OleDb 

Imports System.Runtime.InteropServices 





Namespace AccessDataTransfer 
    
    
    
    
    Class Program 
        
        
        
        
        Private Shared Sub Main(ByVal args As String()) 
        
            
            Dim Sourcedb As String = "c:\1.mdb" 
            
            Dim DestConnectionStr As String = "Data Source=localhost;Integrated Security=SSPI;Initial Catalog=gil2" 
            
            Dim TableName As String = "Foo" 
            
            
            
            If args.Length >= 1 Then 
                
                
                If args(0) = "/?" Then 
                    
                    
                    PrintHelp() 
                    
                        
                    Return 
                End If 
                
                
                
                    
                Sourcedb = args(0) 
            End If 
            
            
            
            If args.Length >= 2 Then 
                
                
                    
                DestConnectionStr = args(1) 
            End If 
            
            
            
            If args.Length >= 3 Then 
                
                
                    
                TableName = args(2) 
            End If 
            
            
            
                
                
                
                
            TransferTableData(Sourcedb, DestConnectionStr, TableName) 
            
            
            
        End Sub 
        
        
        
        ' 
        
        ' Transfer data deom Access table to SQL server table. The table is 
        'asummed to be created on the sql server side. 
        
        ' 
        
        ' 
        
            
            
            
        Private Shared Sub TransferTableData(ByVal AccessSourcedb As String, ByVal DestinationConnectionStr As String, ByVal TableName As String) 
        
        
            
            Dim Start As Integer = GetTickCount() 
            
            
            
            'Connection to the destination 
            
            ' 
            
            Dim DestConnection As New SqlConnection(DestinationConnectionStr) 
            
            DestConnection.Open() 
            
            Dim Cmd As SqlCommand = DestConnection.CreateCommand() 
            
            
            
            'Connection to source 
            
            ' 
            
            Dim OledbSrcConnection As OleDbConnection = New System.Data.OleDb.OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;" + "Data Source=" + AccessSourcedb) 
            
            OledbSrcConnection.Open() 
            
            
            
            ' Reader to source 
            
            ' 
            
            Dim OleDbCommand As New OleDbCommand("SELECT * FROM " + TableName) 
            
            OleDbCommand.Connection = OledbSrcConnection 
            
            Dim OleDbDataReader As OleDbDataReader = OleDbCommand.ExecuteReader() 
            
            
            
            'bulk upload to destination 
            
            ' 
            
            Dim bulkCopy As New SqlBulkCopy(DestConnection, System.Data.SqlClient.SqlBulkCopyOptions.KeepIdentity, Nothing) 
            
            bulkCopy.BulkCopyTimeout = 100000000 
            
            bulkCopy.DestinationTableName = TableName 
            
            bulkCopy.WriteToServer(OleDbDataReader) 
            
            
            
            
            
            Dim [End] As Integer = GetTickCount() 
            
            
            
            Console.WriteLine("all rows were uploaded in {0} miliseconds", [End] - Start) 
            
        End Sub 
        
        
        
        
        <DllImportAttribute("kernel32.dll", SetLastError := True)> _ 
        Private Shared Function GetTickCount() As Integer 
        End Function 
        
    End Class 
    
End Namespace 
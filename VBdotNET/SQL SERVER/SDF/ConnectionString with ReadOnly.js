'http://msdn.microsoft.com/en-us/library/system.data.sqlserverce.sqlceconnection.connectionstring%28VS.80%29.aspx

is not good just copy the DB in tempPath :) 

            Dim path As String = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData)

            sqlC = New SQLCeClass("data source=" & Application.StartupPath & "\dbase.sdf;File Mode=Read Only;Temp Path=" & path & ";password=5FTxICLrgnGaYJe7")

added :
'File Mode
'Temp Path
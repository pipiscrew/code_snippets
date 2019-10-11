#https://stackoverflow.com/q/25682703

Try
{
	$SQLServer = "server ip/name"
	$SQLDBName = "dbase name"
	$uid ="john"
	$pwd = "123"
	$SqlQuery = "SELECT * from x;"
	$SqlConnection = New-Object System.Data.SqlClient.SqlConnection
	$SqlConnection.ConnectionString = "Server = $SQLServer; Database = $SQLDBName;persist security info=True;Integrated Security=SSPI" 
#	Server = $SQLServer; Database = $SQLDBName; User ID = $uid; Password = $pwd;"
	$SqlCmd = New-Object System.Data.SqlClient.SqlCommand
	$SqlCmd.CommandText = $SqlQuery
	$SqlCmd.Connection = $SqlConnection
	$SqlAdapter = New-Object System.Data.SqlClient.SqlDataAdapter
	$SqlAdapter.SelectCommand = $SqlCmd
	$DataSet = New-Object System.Data.DataSet
	$SqlAdapter.Fill($DataSet)

	$DataSet.Tables[0] | out-file "C:\x\x.txt"
}
Catch
{
    $ErrorMessage = $_.Exception.Message
    $FailedItem = $_.Exception.ItemName
    #Send-MailMessage -From ExpensesBot@x.Com -To WinAdmin@x.Com -Subject "HR File Read Failed!" -SmtpServer EXCH01.AD.x.Com -Body "We failed to read file $FailedItem. The error message was $ErrorMessage"
	Write-Host "error"+$ErrorMessage
    Break
}

#ReadKey
Write-Host "Press any key to continue ..."
$x = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")


#prompt to enter
#$username = Read-Host -Prompt "Enter database username"

#use 3rd party dll to connect to ORACLE dbase (wanring if you are on x64 the dll much be x64 compiled)
#http://osric.com/chris/accidental-developer/2016/03/querying-an-oracle-database-from-powershell/

#Add-Type -Path "C:\Drivers\oo\Oracle.DataAccess.dll"
#$connection = New-Object Oracle.DataAccess.Client.OracleConnection($connectionString)
#$connection.open()

#run the test.ps1 from powershell box
#navigate to directory and type :
#.\test.ps1

#run batch file - https://stackoverflow.com/a/20663591
& .\start.bat

#if you getting "cannot be loaded because the execution of scripts is disabled on this system"
#fireup the powershell with admin rights
#execute the following (https://stackoverflow.com/a/4038991/1320686) :
#Set-ExecutionPolicy RemoteSigned

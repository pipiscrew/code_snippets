'create unhandled exception handler
AddHandler AppDomain.CurrentDomain.UnhandledException, AddressOf ucLinker_UnhandledExceptionHandler

'event handler
Private Sub uc_UnhandledExceptionHandler(ByVal sender As Object, ByVal e As UnhandledExceptionEventArgs)
	Dim ex As Exception = DirectCast(e.ExceptionObject, Exception)
	
	Dim sb As New System.Text.StringBuilder()
	sb.AppendLine("************** Exception Text **************")
	sb.Append(ex.GetType.ToString)
	sb.Append(": ")
	sb.AppendLine(ex.Message)
	sb.Append(ex.StackTrace)
	
	Console.WriteLine(sb.ToString)
End Sub
Private Function GetSystemInformationString() As String
    Dim builder As New StringBuilder
    builder.AppendLine
    builder.AppendLine("SYSTEM INFORMATION:")
    builder.AppendLine
    builder.AppendLine(String.Concat(New String() { "OS: ", MyProject.Computer.Info.OSFullName, ChrW(9) & "Version: ", MyProject.Computer.Info.OSVersion, ChrW(9) & "(", MyProject.Computer.Info.OSPlatform, ")" }))
    builder.AppendLine(("Total Physical Memory: " & ChrW(9) & (CDbl(MyProject.Computer.Info.TotalPhysicalMemory) / 1048576).ToString("#,#") & " MB"))
    builder.AppendLine(("Total Virtual Memory: " & ChrW(9) & (CDbl(MyProject.Computer.Info.TotalVirtualMemory) / 1048576).ToString("#,#") & " MB"))
    builder.AppendLine(("Avail Physical Memory: " & ChrW(9) & (CDbl(MyProject.Computer.Info.AvailablePhysicalMemory) / 1048576).ToString("#,#") & " MB"))
    builder.AppendLine(("Avail Virtual Memory: " & ChrW(9) & (CDbl(MyProject.Computer.Info.AvailableVirtualMemory) / 1048576).ToString("#,#") & " MB"))
    If MyProject.Computer.Network.IsAvailable Then
        builder.AppendLine("Netowrk IS AVAILABLE")
    Else
        builder.AppendLine("Netowrk IS NOT AVAILABLE")
    End If
    Return builder.ToString
End Function
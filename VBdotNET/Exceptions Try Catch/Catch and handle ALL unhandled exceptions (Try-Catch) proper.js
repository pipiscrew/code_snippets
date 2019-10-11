'original made by http://www.doogal.co.uk/exception.php
'15kb DLL to add as reference but here is a way to do it with VB.NET 
'the only missing text is the total memory + free memory
'enable application framework should be enabled , otherwise 0%

        Private Function GetSystemUpTime() As TimeSpan
            Dim counter As New PerformanceCounter("System", "System Up Time")
            counter.NextValue()
            Return TimeSpan.FromSeconds(CDbl(counter.NextValue))
        End Function


        Private Function GetExceptionTypeStack(ByVal e As Exception) As String
            If (Not e.InnerException Is Nothing) Then
                Dim builder As New StringBuilder
                builder.AppendLine(Me.GetExceptionTypeStack(e.InnerException))
                builder.AppendLine(("   " & e.GetType.ToString))
                Return builder.ToString
            End If
            Return ("   " & e.GetType.ToString)
        End Function

        Private Function GetExceptionMessageStack(ByVal e As Exception) As String
            If (Not e.InnerException Is Nothing) Then
                Dim builder As New StringBuilder
                builder.AppendLine(Me.GetExceptionMessageStack(e.InnerException))
                builder.AppendLine(("   " & e.Message))
                Return builder.ToString
            End If
            Return ("   " & e.Message)
        End Function


        Private Function GetExceptionCallStack(ByVal e As Exception) As String
            If (Not e.InnerException Is Nothing) Then
                Dim builder As New StringBuilder
                builder.AppendLine(Me.GetExceptionCallStack(e.InnerException))
                builder.AppendLine("--- Next Call Stack:")
                builder.AppendLine(e.StackTrace)
                Return builder.ToString
            End If
            Return e.StackTrace
        End Function

        Private Sub MyApplication_UnhandledException(ByVal sender As Object, ByVal e As Microsoft.VisualBasic.ApplicationServices.UnhandledExceptionEventArgs) Handles Me.UnhandledException
            Dim builder As New StringBuilder
            Dim kk = e.Exception

            builder.AppendLine(("Application:       " & Reflection.Assembly.GetExecutingAssembly.GetName.ToString))
            builder.AppendLine(("Version:           " & Reflection.Assembly.GetExecutingAssembly.GetName.Version.ToString))
            builder.AppendLine(("Date:              " & DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")))
            builder.AppendLine(("Computer name:     " & SystemInformation.ComputerName))
            builder.AppendLine(("User name:         " & SystemInformation.UserName))
            builder.AppendLine(("OS:                " & Environment.OSVersion.ToString))
            builder.AppendLine(("Culture:           " & Globalization.CultureInfo.CurrentCulture.Name))
            builder.AppendLine(("Resolution:        " & SystemInformation.PrimaryMonitorSize.ToString))
            builder.AppendLine(("System up time:    " & GetSystemUpTime.ToString))
            builder.AppendLine(("App up time:       " & DirectCast((DateTime.Now - Process.GetCurrentProcess.StartTime), TimeSpan).ToString))


            'Dim lpBuffer As New MEMORYSTATUSEX
            '        If ExceptionLogger.GlobalMemoryStatusEx(lpBuffer) Then
            '            builder.AppendLine(("Total memory:      " & (lpBuffer.ullTotalPhys / CULng(&H100000)) & "Mb"))
            '            builder.AppendLine(("Available memory:  " & (lpBuffer.ullAvailPhys / CULng(&H100000)) & "Mb"))
            '        End If
            builder.AppendLine("")
            builder.AppendLine("Exception classes:   ")
            builder.Append(GetExceptionTypeStack(kk)) ''kk.InnerException.ToString)
            builder.AppendLine(" ")
            builder.AppendLine("Exception messages: ")
            builder.Append(GetExceptionMessageStack(kk)) 'kk.Message)
            builder.AppendLine(" ")
            builder.AppendLine("Stack Traces:")
            builder.Append(GetExceptionCallStack(kk))
            builder.AppendLine(" ")
            builder.AppendLine("Loaded Modules:")
            Dim currentProcess As Process = Process.GetCurrentProcess
            Dim mods As ProcessModule
            For Each mods In currentProcess.Modules
                builder.AppendLine((mods.FileName & " " & mods.FileVersionInfo.FileVersion))
            Next

            Dim form As New Form
            If (Application.OpenForms.Count > 0) Then
                form.Width = Application.OpenForms.Item(0).Width
                form.Height = Application.OpenForms.Item(0).Height
                form.Left = Application.OpenForms.Item(0).Left
                form.Top = Application.OpenForms.Item(0).Top
                form.StartPosition = FormStartPosition.Manual
                form.TopLevel = True
                form.TopMost = True
            Else
                form.Width = 600
                form.Height = &H3E8
                form.StartPosition = FormStartPosition.CenterScreen
            End If
            form.Text = "An error has occured:"
            Dim box As New RichTextBox
            form.Controls.Add(box)
            box.Top = 10
            box.Left = 5
            box.Width = (form.Width - 20)
            box.Height = ((form.ClientRectangle.Height - 30) - box.Top)
            box.Text = builder.ToString
            box.Font = New Font("Courier New", 10.0!)
            box.ReadOnly = True
            box.WordWrap = False
            box.ScrollBars = RichTextBoxScrollBars.ForcedBoth
            box.Anchor = (AnchorStyles.Right Or (AnchorStyles.Left Or (AnchorStyles.Bottom Or AnchorStyles.Top)))
            Dim button As New Button
            form.Controls.Add(button)
            button.Top = (form.ClientRectangle.Height - &H19)
            button.Left = ((form.ClientRectangle.Width - 5) - button.Width)
            button.Text = "&OK"
            button.DialogResult = DialogResult.Cancel
            button.Anchor = (AnchorStyles.Right Or AnchorStyles.Bottom)
            button.FlatStyle = FlatStyle.System
            form.CancelButton = button
            form.AcceptButton = button
            form.ShowDialog()

            e.ExitApplication = False
        End Sub
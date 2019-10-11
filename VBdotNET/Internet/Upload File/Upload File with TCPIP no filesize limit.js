'source official RapidshareManager

'-in form
Public WithEvents kk As WebUploader

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        currFile = 0
        MakeUpload()
    End Sub
    

    Private Sub MakeUpload()
        If lstv.Items.Count = 0 Then
            MsgBox("Where do you think u go, little spreader ?", MsgBoxStyle.Information, apTitle)
            Exit Sub
        End If

        ProgressBar1.Value = 0
        Button1.Enabled = False
        Button2.Enabled = False
        Button3.Enabled = True
        Combobox1.Enabled = False

        StatusWrite("Starting - " & IO.Path.GetFileName(lstv.Items(currFile).Text))

        kk = New WebUploader

        'multiuploader
        GenerateHost4MultiUpload()
        kk.AddFormVar("host", host)

        If MultiUploadAccID = "" Then
            kk.AddFormVar("u", "L969NNTMEJDGT5WCC1F6LVAEJ1ZIXJUU")
        Else
            kk.AddFormVar("u", MultiUploadAccID) '"7DR9ZOVUPLBVQSXZ3X0N427CCHG5SLTE")
        End If
        kk.AddFileVar("file_0", lstv.Items(currFile).Text)
        kk.URL = srv

        Dim t As Thread
        t = New Thread(AddressOf kk.UploadFile)
        t.Start()
    End Sub

#Region " UPLOADER EVENTS "

    Private Delegate Sub kk_AbortedCallBack()
    Private Sub kk_Aborted() Handles kk.Aborted
        If Me.TextBox1.InvokeRequired Then
            Me.BeginInvoke(New kk_AbortedCallBack(AddressOf kk_Aborted))
        Else
            StatusWrite(lstv.Items(currFile).Text & " - aborted!")
            Button1.Enabled = True
            Button2.Enabled = True
            Button3.Enabled = False
            Combobox1.Enabled = True
        End If
    End Sub

    Private Delegate Sub kk_ProgressChangedCallBack(ByVal e As WebUploader.ProgressEventArgs)
    Private Sub kk_ProgressChanged(ByVal e As WebUploader.ProgressEventArgs) Handles kk.ProgressChanged
        If Me.ProgressBar1.InvokeRequired Then
            Dim d As New kk_ProgressChangedCallBack(AddressOf kk_ProgressChanged)
            Me.Invoke(d, New Object() {e})
        Else
            lblPrc.Text = e.Percentage & "%"
            ProgressBar1.Value = e.Percentage
        End If
    End Sub

    Private Delegate Sub kk_ServerResponseCallBack(ByVal e As WebUploader.ServerResponseEventArgs)
    Private Sub kk_ServerResponse(ByVal e As WebUploader.ServerResponseEventArgs) Handles kk.ServerResponse
        If Me.TextBox1.InvokeRequired Then
            Dim d As New kk_ServerResponseCallBack(AddressOf kk_ServerResponse)
            Me.Invoke(d, New Object() {e})
        Else
            'Debug.Print(e.Response)

            ParseDownloadResponse(e.Response, e.File)

            If lstv.Items.Count - 1 > currFile Then
                currFile += 1
                MakeUpload()
            Else

                Button1.Enabled = True
                Button2.Enabled = True
                Button3.Enabled = False
                Combobox1.Enabled = True
                StatusWrite("ALL DONE!")

                If IO.File.Exists(Application.StartupPath & "\all_done.wav") Then
                    Try
                        PlaySound(Application.StartupPath & "\all_done.wav", IntPtr.Zero, &H8)
                    Catch
                    End Try
                End If

            End If
        End If
    End Sub



    'Private Delegate Sub kk_TransferCompletedBack()
    'Private Sub kk_TransferCompleted() Handles kk.TransferCompleted
    '    If Me.TextBox1.InvokeRequired Then
    '        Me.BeginInvoke(New kk_TransferCompletedBack(AddressOf kk_TransferCompleted))
    '    Else
    '        If lstv.Items.Count - 1 > currFile Then
    '            currFile += 1
    '            MakeUpload()
    '        Else
    '            StatusWrite("ALL DONE!")
    '        End If
    '    End If
    'End Sub

#End Region

'-the class
Imports System.Net
Imports System.IO
Imports System.Collections.Specialized
Imports System.Net.Sockets
Imports System.Text

Public Class WebUploader
    Private Buffer As Byte() = New Byte(&H401 - 1) {}

    '---EVENTS
    Public Structure ProgressEventArgs
        Public BytesSend As Integer
        Public TotalBytesToSend As Integer
        Public Percentage As Integer
    End Structure

    Public Structure ServerResponseEventArgs
        Public Response As String
        Public File As String
    End Structure

    Dim e As New ProgressEventArgs

    Public Delegate Sub ServerResponseEventHandler(ByVal e As ServerResponseEventArgs)
    Public Delegate Sub ProgressChangedEventHandler(ByVal e As ProgressEventArgs)
    Public Delegate Sub AbortedEventHandler()

    Public Event ProgressChanged As ProgressChangedEventHandler
    Public Event ServerResponse As ServerResponseEventHandler
    Public Event Aborted As AbortedEventHandler
    Public Event TransferCompleted()
    '---EVENTS

    '---User Variables
    Public Abort As Boolean
    Public URL As String
    Public FollowRedirect As Boolean = False
    Public FollowRedirectFindInURL As String = ""
    Public FollowRedirectReplaceInURL As String = ""
    '---User Variables

    Private Files As List(Of FileList)
    Private Vars As List(Of FormVar)

    Public Sub AddFileVar(ByVal varName As String, ByVal filepath As String)
        Files.Add(New FileList(varName, filepath))
    End Sub

    Public Sub AddFormVar(ByVal varName As String, ByVal varValue As String)
        Vars.Add(New FormVar(varName, varValue))
    End Sub

    Public Sub New()
        Vars = New List(Of FormVar)
        Files = New List(Of FileList)
        URL = ""
    End Sub

    Public Sub UploadFile()
        'Try
        Dim e As New ProgressEventArgs
        Dim args2 As New ServerResponseEventArgs

        Dim boundary As String = "--boundaryMpzeTw==" '"boundaryAB3ukg==" '"----------------------------" & DateTime.Now.Ticks.ToString("x")
        Dim formitem As String = ""
        Dim filesize As Long

        filesize = My.Computer.FileSystem.GetFileInfo(Files(0).FilePath).Length
        Dim formdataTemplate As String = boundary & ChrW(13) & ChrW(10) & "Content-Disposition: form-data; name=""{0}"";" & ChrW(13) & ChrW(10) & ChrW(13) & ChrW(10) & "{1}" & ChrW(13) & ChrW(10)
        For i As Integer = 0 To Vars.Count - 1
            formitem = formitem & String.Format(formdataTemplate, Vars(i).formVarName, Vars(i).formVarValue)
        Next i

        ' "--" & boundary & ChrW(13) & ChrW(10) & "Content-Disposition: form-data; name=""{0}""; filename=""{1}""" & vbCr & vbLf & "Content-Type: application/octet-stream" & ChrW(13) & ChrW(10) & boundary & "--" & ChrW(13) & ChrW(10) '& vbCr & vbLf & vbCr & vbLf
        Dim headerTemplate As String = boundary & ChrW(13) & ChrW(10) & "Content-Disposition: form-data; name=""{0}""; filename=""{1}""" & vbCr & vbLf & "Content-Type: application/octet-stream" & ChrW(13) & ChrW(10) & ChrW(13) & ChrW(10)
        For i As Integer = 0 To Files.Count - 1
            formitem = formitem & String.Format(headerTemplate, Files(i).FileVariable, IO.Path.GetFileName(Files(i).FilePath))
        Next i

        'rd
        Dim str5 As String = (ChrW(13) & ChrW(10) & boundary & "--" & ChrW(13) & ChrW(10))
        Dim num4 As Long = ((formitem.Length + filesize) + str5.Length)

        Dim URIS As New Uri(URL) 'ww16.kjsdf.com

        Dim str2$ = ""
        str2 = ("POST " & URL & " HTTP/1.1" & ChrW(13) & ChrW(10)) & "Host: " & URIS.DnsSafeHost & ChrW(13) & ChrW(10)

        ' str2 = ((((str2 & "Content-Type: multipart/form-data; boundary=" & Mid(boundary, 3) & ChrW(13) & ChrW(10)) & "Content-Length: " & num4.ToString & ChrW(13) & ChrW(10)) & "User-Agent: RAPIDSHARE MANAGER " & ChrW(13) & ChrW(10)) & ChrW(13) & ChrW(10))
        str2 = ((((str2 & "Content-Type: multipart/form-data; boundary=" & Mid(boundary, 3) & ChrW(13) & ChrW(10)) & "Content-Length: " & num4.ToString & ChrW(13) & ChrW(10)) & "User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-GB; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 " & ChrW(13) & ChrW(10)) & ChrW(13) & ChrW(10))

        Dim stream As FileStream
        stream = New FileInfo(Files(0).FilePath).OpenRead
        e.TotalBytesToSend = filesize
        Dim buffer As Byte() = New Byte(filesize - 1) {}
        Dim num6 As Integer = stream.Read(buffer, 0, buffer.Length)
        Using client As TcpClient = New TcpClient(URIS.DnsSafeHost, 80)
        				       			'gia proxy ("189.8.52.186", 3128)
            Dim stream2 As NetworkStream = client.GetStream
            Dim bytes As Byte() = New Byte(str2.ToCharArray.Length - 1) {}
            bytes = Encoding.ASCII.GetBytes(str2.ToCharArray)
            stream2.Write(bytes, 0, bytes.Length)
            bytes = New Byte(formitem.Length - 1) {}
            bytes = Encoding.ASCII.GetBytes(formitem.ToCharArray)
            stream2.Write(bytes, 0, bytes.Length)
            Dim num7 As Integer = &H200
            Dim num8 As Integer = num7
            Dim offset As Integer = 0
            Dim flag5 As Boolean = False
            Dim num10 As Integer

            Do While (buffer.Length > offset)
                num10 = num7

                If (num10 > (buffer.Length - offset)) Then
                    num10 = (buffer.Length - offset)
                End If

                stream2.Write(buffer, offset, num10)
                offset = (offset + num10)

                e.BytesSend = (e.BytesSend + num10)
                e.Percentage = CInt(Math.Round(CDbl((CDbl(e.BytesSend) / (CDbl(e.TotalBytesToSend) / 100)))))

                Dim progressChangedEvent As ProgressChangedEventHandler = Me.ProgressChangedEvent
                If (Not progressChangedEvent Is Nothing) Then
                    progressChangedEvent.Invoke(e)
                End If

                If Me.Abort Then
                    stream2.Close()
                    stream.Close()
                    Dim abortedEvent As AbortedEventHandler = Me.AbortedEvent
                    If (Not abortedEvent Is Nothing) Then
                        abortedEvent.Invoke()
                    End If
                    Return
                End If
            Loop

            bytes = New Byte(str5.ToCharArray.Length - 1) {}
            bytes = Encoding.ASCII.GetBytes(str5.ToCharArray)
            stream2.Write(bytes, 0, bytes.Length)
            Dim reader As New StreamReader(stream2)

            args2.Response = reader.ReadToEnd.Trim
            args2.File = IO.Path.GetFileName(Files(0).FilePath)

            'FollowRedirect
            If FollowRedirect = True Then
                If args2.Response.Contains("Location:") Then
                    args2.Response = (GetPageHTML(Replace(AdvSplt(args2.Response, "Location: ", vbCrLf), FollowRedirectFindInURL, FollowRedirectReplaceInURL)))
                End If
            End If
            'FollowRedirect

            reader.Close()
            stream2.Close()
            stream.Close()

            Dim serverResponseEvent As ServerResponseEventHandler = Me.ServerResponseEvent
            If (Not serverResponseEvent Is Nothing) Then
                serverResponseEvent.Invoke(args2)
            End If
        End Using



    End Sub

    Public Function GetPageHTML( _
       ByVal URL As String) As String
        ' Retrieves the HTML from the specified URL
        Dim objWC As New System.Net.WebClient()
        Return New System.Text.UTF8Encoding().GetString( _
           objWC.DownloadData(URL))
    End Function

    Private Function AdvSplt(ByVal STR As String, ByVal delimit1 As String, ByVal delimit2 As String, Optional ByVal StartPOS As Integer = 1) As String
        Dim ps1%, ps2%

        ps1 = InStr(StartPOS, STR, delimit1, CompareMethod.Text)
        If ps1 > 0 Then ps1 += Len(delimit1) Else Return ""

        ps2 = InStr(ps1, STR, delimit2, CompareMethod.Text)

        If ps2 = 0 Then Return ""

        Return Mid(STR, ps1, ps2 - (ps1))
    End Function


    Private Class FileList

        Private m_FilePath As String
        Private m_FileVariable As String

        Public Sub New(ByVal varN$, ByVal fl$)
            m_FileVariable = varN
            m_FilePath = fl
        End Sub

        Public Property FileVariable() As String
            Get
                Return m_FileVariable
            End Get
            Set(ByVal value As String)
                m_FileVariable = value
            End Set
        End Property

        Public Property FilePath() As String
            Get
                Return m_FilePath
            End Get
            Set(ByVal value As String)
                m_FilePath = value
            End Set
        End Property

    End Class

    Private Class FormVar

        Private m_formVarValue As String
        Private m_formVarName As String

        Public Sub New(ByVal varN$, ByVal varVal$)
            m_formVarName = varN
            m_formVarValue = varVal
        End Sub

        Public Property formVarName() As String
            Get
                Return m_formVarName
            End Get
            Set(ByVal value As String)
                m_formVarName = value
            End Set
        End Property

        Public Property formVarValue() As String
            Get
                Return m_formVarValue
            End Get
            Set(ByVal value As String)
                m_formVarValue = value
            End Set
        End Property

    End Class
End Class

'used by Tria
'@ form
Private Function Check4Registration() As Boolean
    Dim flag As Boolean = False
    Dim str2 As String = Interaction.GetSetting("Tria", "E", "38517", "0000")
    Dim cPID As String = clsWMI.GetCPID
    Dim str3 As String = clsWMI.EncryptString128Bit((clsWMI.StripNullCharacters(cPID) & "QKT"), "DogEatDogWorld")
    If (str2 = str3) Then
        flag = True
    End If
    If flag Then
        Interaction.MsgBox("Registration Found", MsgBoxStyle.OkOnly, Nothing)
    End If
    If Not flag Then
        Me.Registration((cPID))
    End If
    Return flag
End Function

 



'clsWMI class
Imports System.Security.Cryptography
Imports System.IO
Imports System.Text
Imports System.Management
Imports System.Management.ManagementObjectCollection

Public Class clsWMI
    ' Methods
    Public Sub New()
        Dim current As ManagementObject
        Dim enumerator2 As ManagementObjectEnumerator
        Dim enumerator3 As ManagementObjectEnumerator
        Me.objOS = New ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem")
        Me.objCS = New ManagementObjectSearcher("SELECT * FROM Win32_ComputerSystem")
        Me.objHD = New ManagementObjectSearcher("SELECT * FROM Win32_DiskDrive")
        Using enumerator As ManagementObjectEnumerator = Me.objHD.Get.GetEnumerator
            Do While enumerator.MoveNext
                Me.objMgmt = DirectCast(enumerator.Current, ManagementObject)
                clsWMI.m_HDmodel = Me.objMgmt.Item("Model").ToString
            Loop
        End Using
        Dim searcher As New ManagementObjectSearcher("SELECT * FROM Win32_BIOS")
        Dim searcher2 As New ManagementObjectSearcher("SELECT * FROM Win32_Processor")
        Try
            enumerator2 = searcher.Get.GetEnumerator
            Do While enumerator2.MoveNext
                current = DirectCast(enumerator2.Current, ManagementObject)
                clsWMI.m_CPSerialNumber = current.Item("serialnumber").ToString
            Loop
        Finally
            If (Not enumerator2 Is Nothing) Then
                enumerator2.Dispose()
            End If
        End Try
        Try
            enumerator3 = searcher2.Get.GetEnumerator
            Do While enumerator3.MoveNext
                current = DirectCast(enumerator3.Current, ManagementObject)
                clsWMI.m_Processor = current.Item("Name").ToString
            Loop
        Finally
            If (Not enumerator3 Is Nothing) Then
                enumerator3.Dispose()
            End If
        End Try
    End Sub

    Public Shared Function DecryptString128Bit(ByVal vstrStringToBeDecrypted As String, ByVal vstrDecryptionKey As String) As String
        Dim rgbIV As Byte() = New Byte() {&H79, &HF1, 10, 1, &H84, &H4A, 11, &H27, &HFF, &H5B, &H2D, &H4E, 14, &HD3, &H16, &H3E}
        Dim managed As New RijndaelManaged
        If (Strings.Len(vstrStringToBeDecrypted) <> &H18) Then
            Return "qwertyuiopqwefehyjtyrewi"
        End If
        Dim buffer As Byte() = Convert.FromBase64String(vstrStringToBeDecrypted)
        If (Strings.Len(vstrDecryptionKey) >= &H20) Then
            vstrDecryptionKey = Strings.Left(vstrDecryptionKey, &H20)
        Else
            Dim num As Integer = Strings.Len(vstrDecryptionKey)
            Dim number As Integer = (&H20 - num)
            vstrDecryptionKey = (vstrDecryptionKey & Strings.StrDup(number, "X"))
        End If
        Dim bytes As Byte() = Encoding.ASCII.GetBytes(vstrDecryptionKey.ToCharArray)
        Dim buffer4 As Byte() = New Byte((buffer.Length + 1) - 1) {}
        Dim stream2 As New MemoryStream(buffer)
        Try
            Dim stream As New CryptoStream(stream2, managed.CreateDecryptor(bytes, rgbIV), CryptoStreamMode.Read)
            stream.Read(buffer4, 0, buffer4.Length)
            stream.FlushFinalBlock()
            stream2.Close()
            stream.Close()
        Catch exception1 As Exception
            'ProjectData.SetProjectError(exception1)
            'ProjectData.ClearProjectError()
        End Try
        Return clsWMI.StripNullCharacters(Encoding.ASCII.GetString(buffer4))
    End Function

    Public Shared Function EncryptString128Bit(ByVal vstrTextToBeEncrypted As String, ByVal vstrEncryptionKey As String) As String
        Dim inArray As Byte() = New Byte(2 - 1) {}
        Dim rgbIV As Byte() = New Byte() {&H79, &HF1, 10, 1, &H84, &H4A, 11, &H27, &HFF, &H5B, &H2D, &H4E, 14, &HD3, &H16, &H3E}
        Dim stream2 As New MemoryStream
        vstrTextToBeEncrypted = clsWMI.StripNullCharacters(vstrTextToBeEncrypted)
        Dim bytes As Byte() = Encoding.ASCII.GetBytes(vstrTextToBeEncrypted.ToCharArray)
        If (Strings.Len(vstrEncryptionKey) >= &H20) Then
            vstrEncryptionKey = Strings.Left(vstrEncryptionKey, &H20)
        Else
            Dim num As Integer = Strings.Len(vstrEncryptionKey)
            Dim number As Integer = (&H20 - num)
            vstrEncryptionKey = (vstrEncryptionKey & Strings.StrDup(number, "X"))
        End If
        Dim rgbKey As Byte() = Encoding.ASCII.GetBytes(vstrEncryptionKey.ToCharArray)
        Dim managed As New RijndaelManaged
        Try
            Dim stream As New CryptoStream(stream2, managed.CreateEncryptor(rgbKey, rgbIV), CryptoStreamMode.Write)
            stream.Write(bytes, 0, bytes.Length)
            stream.FlushFinalBlock()
            inArray = stream2.ToArray
            stream2.Close()
            stream.Close()
        Catch exception1 As Exception
            'ProjectData.SetProjectError(exception1)
            'ProjectData.ClearProjectError()
        End Try
        Return Convert.ToBase64String(inArray)
    End Function

    Public Shared Function GetCPID() As String
        Dim searcher As New ManagementObjectSearcher("SELECT * FROM Win32_DiskDrive")
        Dim searcher2 As New ManagementObjectSearcher("SELECT * FROM Win32_BIOS")
        Dim searcher3 As New ManagementObjectSearcher("SELECT * FROM Win32_Processor")
        Dim obj3 As ManagementObject
        For Each obj3 In searcher.Get
            clsWMI.m_HDmodel = obj3.Item("Model").ToString
        Next
        Dim obj2 As ManagementObject
        For Each obj2 In searcher2.Get
            clsWMI.m_CPSerialNumber = obj2.Item("serialnumber").ToString
        Next

        obj2 = New ManagementObject
        For Each obj2 In searcher3.Get
            clsWMI.m_Processor = obj2.Item("Name").ToString
        Next
        If (Strings.Len(clsWMI.m_HDmodel) < 7) Then
            clsWMI.m_HDmodel = "WMDABCDEGH"
        End If
        If (Strings.Len(clsWMI.m_CPSerialNumber) < 4) Then
            clsWMI.m_CPSerialNumber = "12A34B56C"
        End If
        If (Strings.Len(clsWMI.m_Processor) < 4) Then
            clsWMI.m_Processor = "2.66 GHz"
        End If
        Return (clsWMI.m_HDmodel.Substring(4, 4) & clsWMI.m_CPSerialNumber.Substring(1, 3) & clsWMI.m_Processor.Substring((Strings.Len(clsWMI.m_Processor) - 8), 4))
    End Function

    Public Shared Function GetOSType() As String
        Dim searcher As New ManagementObjectSearcher("SELECT * FROM Win32_ComputerSystem")
        Dim searcher2 As New ManagementObjectSearcher("SELECT * FROM Win32_OperatingSystem")
        Dim obj2 As ManagementObject
        For Each obj2 In searcher.Get
            clsWMI.m_strSystemType = obj2.Item("systemtype").ToString
        Next
        Return clsWMI.m_strSystemType
    End Function

    Public Shared Function StripNullCharacters(ByVal vstrStringWithNulls As String) As String
        Dim start As Integer = 1
        Dim str As String = vstrStringWithNulls
        Do While (start > 0)
            start = Strings.InStr(start, vstrStringWithNulls, ChrW(0), CompareMethod.Binary)
            If (start > 0) Then
                str = (Strings.Left(str, (start - 1)) & Strings.Right(str, (Strings.Len(str) - start)))
            End If
            If (start > str.Length) Then
                Return str
            End If
        Loop
        Return str
    End Function


    ' Properties
    Public ReadOnly Property ComputerName() As String
        Get
            Return Me.m_strComputerName
        End Get
    End Property

    Public Shared ReadOnly Property CPSerial() As String
        Get
            Return clsWMI.m_CPSerialNumber
        End Get
    End Property

    Public Shared ReadOnly Property HDModel() As String
        Get
            Return clsWMI.m_HDmodel
        End Get
    End Property

    Public ReadOnly Property HDSerial() As String
        Get
            Return Me.m_HDserial
        End Get
    End Property

    Public ReadOnly Property HDType() As String
        Get
            Return Me.m_HDtype
        End Get
    End Property

    Public ReadOnly Property Manufacturer() As String
        Get
            Return Me.m_strManufacturer
        End Get
    End Property

    Public ReadOnly Property Model() As String
        Get
            Return Me.m_StrModel
        End Get
    End Property

    Public ReadOnly Property OsName() As String
        Get
            Return clsWMI.m_strOSName
        End Get
    End Property

    Public ReadOnly Property OSVersion() As String
        Get
            Return Me.m_strOSVersion
        End Get
    End Property

    Public Shared ReadOnly Property Processor() As String
        Get
            Return clsWMI.m_Processor
        End Get
    End Property

    Public ReadOnly Property SystemType() As String
        Get
            Return clsWMI.m_strSystemType
        End Get
    End Property

    Public ReadOnly Property TotalPhysicalMemory() As String
        Get
            Return Me.m_strTPM
        End Get
    End Property

    Public ReadOnly Property WindowsDirectory() As String
        Get
            Return Me.m_strWindowsDir
        End Get
    End Property


    ' Fields
    Public Shared m_CPSerialNumber As String
    Public Shared m_HDmodel As String
    Private m_HDserial As String
    Private m_HDtype As String
    Public Shared m_Processor As String
    Private m_strComputerName As String
    Private m_strManufacturer As String
    Private m_StrModel As String
    Public Shared m_strOSName As String
    Private m_strOSVersion As String
    Public Shared m_strSystemType As String
    Private m_strTPM As String
    Private m_strWindowsDir As String
    Private objCS As ManagementObjectSearcher
    Private objHD As ManagementObjectSearcher
    Private objHD1 As ManagementObjectSearcher
    Private objMgmt As ManagementObject
    Private objOS As ManagementObjectSearcher
End Class


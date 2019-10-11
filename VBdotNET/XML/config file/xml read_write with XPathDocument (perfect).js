'>>>>>>>>>>>>>>>USAGE
Imports System.IO

Public Class Form1

    Dim kk As Settings

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If Not File.Exists("c:\test.txt") Then
            'If Not Directory.Exists(XmlHandler.SettingsDir) Then
            '    Directory.CreateDirectory(XmlHandler.SettingsDir)
            'End If
            Dim writer As New StreamWriter("c:\test.txt", False)
            writer.Write("<VPO_Settings></VPO_Settings>")
            writer.Close()
        End If


        kk = New Settings
        kk.SaveSettings()
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        kk = New Settings 'automatic load on NEW

        MsgBox(kk.MainMaximized)
    End Sub
End Class

'sample generate this :
'<?xml version="1.0" encoding="utf-8"?>
'<VPO_Settings>
'  <General>
'    <FirstStart>True</FirstStart>
'    <Lang>English</Lang>
'    <MainWidth>888</MainWidth>
'    <MainHeight>642</MainHeight>
'    <PEWidth>776</PEWidth>
'    <PEHeight>640</PEHeight>
'    <PEMax>False</PEMax>
'    <DefaultAlbumFolder>c:\test\</DefaultAlbumFolder>
'    <AssocVPOA>True</AssocVPOA>
'    <APSplitPos>208</APSplitPos>
'    <ShowQuickAlbumInfo>True</ShowQuickAlbumInfo>
'    <ShowQuickPhotoInfo>True</ShowQuickPhotoInfo>
'    <ShowSplashScreen>True</ShowSplashScreen>
'    <AutoUpdateCheck>True</AutoUpdateCheck>
'  </General>
'  <Photo>
'    <SlideShowInterval>1</SlideShowInterval>
'    <ThumbWidth>150</ThumbWidth>
'    <ThumbHeight>113</ThumbHeight>
'    <ShowImgRes>True</ShowImgRes>
'  </Photo>
'</VPO_Settings>


'>>>>>>>>>>>>>>>CLASS
Imports System.Xml.XPath
Imports System.Xml
Imports System.Text

Friend Class Settings
    Private _APSplitPos As Integer
    Private _AssocVPOA As Boolean
    Private _CheckForUpdates As Boolean
    Private _DefaultAlbumFolder As String
    Private _FirstStart As Boolean
    Private _Language As String
    Private _MainHeight As Integer
    Private _MainMaximized As Boolean
    Private _MainWidth As Integer
    Private _PhotoEditorHeight As Integer
    Private _PhotoEditorMax As Boolean
    Private _PhotoEditorWidth As Integer
    Private _ShowImgRes As Boolean
    Private _ShowQuickAlbumInfo As Boolean
    Private _ShowQuickPhotoInfo As Boolean
    Private _ShowSplashScreen As Boolean
    Private _SlideShowInterval As Integer
    Private _ThumbHeight As Integer
    Private _ThumbWidth As Integer
    Private LanguageChanged As Boolean


    Public Sub New()
        Dim navigator As XPathNavigator = New XPathDocument("c:\test.txt").CreateNavigator
        Dim iterator As XPathNodeIterator = navigator.Select("/VPO_Settings/General")
        iterator.MoveNext()
        Me.ReadGeneralSettings(iterator.Current)
        iterator = navigator.Select("/VPO_Settings/Photo")
        iterator.MoveNext()
        Me.ReadPhotoSettings(iterator.Current)
        Me.LanguageChanged = False
    End Sub

    Private Function GetElementContentAsBool(ByVal nav As XPathNavigator, ByVal xpath As String, ByVal defaultValue As Boolean) As Boolean
        Dim iterator As XPathNodeIterator = nav.Select(xpath)
        If iterator.MoveNext Then
            Try
                Return Boolean.Parse(iterator.Current.Value)
            Catch obj1 As Exception
                Return defaultValue
            End Try
        End If
        Return defaultValue
    End Function

    Private Function GetElementContentAsInt(ByVal nav As XPathNavigator, ByVal xpath As String, ByVal defaultValue As Integer) As Integer
        Dim iterator As XPathNodeIterator = nav.Select(xpath)
        If iterator.MoveNext Then
            Try
                Return Integer.Parse(iterator.Current.Value)
            Catch obj1 As Exception
                Return defaultValue
            End Try
        End If
        Return defaultValue
    End Function

    Private Function GetElementContentString(ByVal nav As XPathNavigator, ByVal xpath As String, ByVal defaultValue As String) As String
        Dim iterator As XPathNodeIterator = nav.Select(xpath)
        If iterator.MoveNext Then
            Return iterator.Current.Value
        End If
        Return defaultValue
    End Function

    Private Sub ReadGeneralSettings(ByVal nav As XPathNavigator)
        Me._FirstStart = Me.GetElementContentAsBool(nav, "FirstStart", True)
        Me._Language = Me.GetElementContentString(nav, "Lang", "English")
        Me._MainWidth = Me.GetElementContentAsInt(nav, "MainWidth", &H378)
        Me._MainHeight = Me.GetElementContentAsInt(nav, "MainHeight", &H282)
        Me._MainMaximized = Me.GetElementContentAsBool(nav, "MainMax", False)
        Me._PhotoEditorWidth = Me.GetElementContentAsInt(nav, "PEWidth", &H308)
        Me._PhotoEditorHeight = Me.GetElementContentAsInt(nav, "PEHeight", 640)
        Me._PhotoEditorMax = Me.GetElementContentAsBool(nav, "PEMax", False)
        Me._DefaultAlbumFolder = Me.GetElementContentString(nav, "DefaultAlbumFolder", "c:\test\")
        Me._AssocVPOA = Me.GetElementContentAsBool(nav, "AssocVPOA", True)
        Me._APSplitPos = Me.GetElementContentAsInt(nav, "APSplitPos", &HD0)
        Me._ShowQuickAlbumInfo = Me.GetElementContentAsBool(nav, "ShowQuickAlbumInfo", True)
        Me._ShowQuickPhotoInfo = Me.GetElementContentAsBool(nav, "ShowQuickPhotoInfo", True)
        Me._ShowSplashScreen = Me.GetElementContentAsBool(nav, "ShowSplashScreen", True)
        Me._CheckForUpdates = Me.GetElementContentAsBool(nav, "AutoUpdateCheck", True)
        Dim index As Integer = Me._Language.IndexOf(".xml")
        If (index > 0) Then
            Me._Language = Me._Language.Substring(0, index)
        End If
    End Sub

    Private Sub ReadPhotoSettings(ByVal nav As XPathNavigator)
        Me._SlideShowInterval = Me.GetElementContentAsInt(nav, "SlideShowInterval", 1)
        Me._ThumbWidth = Me.GetElementContentAsInt(nav, "ThumbWidth", 150)
        Me._ThumbHeight = Me.GetElementContentAsInt(nav, "ThumbHeight", &H71)
        Me._ShowImgRes = Me.GetElementContentAsBool(nav, "ShowImgRes", True)
    End Sub

    Public Sub RegisterVPOA()
        'Try
        '    Dim classesRoot As RegistryKey = Registry.ClassesRoot
        '    classesRoot.CreateSubKey("VirtuaPhotoOrganizer")
        '    classesRoot = classesRoot.OpenSubKey("VirtuaPhotoOrganizer", True)
        '    classesRoot.SetValue("", "Virtual Photo Organizer Album")
        '    classesRoot.CreateSubKey("DefaultIcon")
        '    classesRoot = classesRoot.OpenSubKey("DefaultIcon", True)
        '    classesRoot.SetValue("", (Application.ExecutablePath & ",0"))
        '    classesRoot.Close()
        '    classesRoot = Registry.ClassesRoot.OpenSubKey("VirtuaPhotoOrganizer", True)
        '    classesRoot.CreateSubKey("shell")
        '    classesRoot = classesRoot.OpenSubKey("shell", True)
        '    classesRoot.CreateSubKey("open")
        '    classesRoot = classesRoot.OpenSubKey("open", True)
        '    classesRoot.CreateSubKey("command")
        '    classesRoot = classesRoot.OpenSubKey("command", True)
        '    classesRoot.SetValue("", (""""c & Application.ExecutablePath & """ ""%1"""))
        '    classesRoot.Close()
        '    classesRoot = Registry.ClassesRoot
        '    classesRoot.CreateSubKey(".epga")
        '    classesRoot = classesRoot.OpenSubKey(".epga", True)
        '    classesRoot.SetValue("", "VirtuaPhotoOrganizer")
        '    classesRoot.Close()

        'Catch obj1 As Exception
        'End Try
    End Sub

    Private Sub SaveGeneralSettings(ByVal writer As XmlWriter)
        writer.WriteStartElement("General")
        Me.WriteElement(writer, "FirstStart", Me._FirstStart.ToString)
        Me.WriteElement(writer, "Lang", Me._Language)
        Me.WriteElement(writer, "MainWidth", Me._MainWidth.ToString)
        Me.WriteElement(writer, "MainHeight", Me._MainHeight.ToString)
        Me.WriteElement(writer, "MainMax", Me._MainMaximized.ToString)
        Me.WriteElement(writer, "PEWidth", Me._PhotoEditorWidth.ToString)
        Me.WriteElement(writer, "PEHeight", Me._PhotoEditorHeight.ToString)
        Me.WriteElement(writer, "PEMax", Me._PhotoEditorMax.ToString)
        Me.WriteElement(writer, "DefaultAlbumFolder", Me._DefaultAlbumFolder)
        Me.WriteElement(writer, "AssocVPOA", Me._AssocVPOA.ToString)
        Me.WriteElement(writer, "APSplitPos", Me._APSplitPos.ToString)
        Me.WriteElement(writer, "ShowQuickAlbumInfo", Me._ShowQuickAlbumInfo.ToString)
        Me.WriteElement(writer, "ShowQuickPhotoInfo", Me._ShowQuickPhotoInfo.ToString)
        Me.WriteElement(writer, "ShowSplashScreen", Me._ShowSplashScreen.ToString)
        Me.WriteElement(writer, "AutoUpdateCheck", Me._CheckForUpdates.ToString)
        writer.WriteEndElement()
    End Sub

    Private Sub SavePhotoSettings(ByVal writer As XmlWriter)
        writer.WriteStartElement("Photo")
        Me.WriteElement(writer, "SlideShowInterval", Me._SlideShowInterval.ToString)
        Me.WriteElement(writer, "ThumbWidth", Me._ThumbWidth.ToString)
        Me.WriteElement(writer, "ThumbHeight", Me._ThumbHeight.ToString)
        Me.WriteElement(writer, "ShowImgRes", Me._ShowImgRes.ToString)
        writer.WriteEndElement()
    End Sub

    Public Sub SaveSettings()
        Dim writer As New XmlTextWriter("c:\test.txt", Encoding.UTF8)
        writer.Formatting = Formatting.Indented
        writer.WriteStartDocument()
        writer.WriteStartElement("VPO_Settings")
        Me.SaveGeneralSettings(writer)
        Me.SavePhotoSettings(writer)
        writer.WriteEndElement()
        writer.Close()
        If Me.LanguageChanged Then
            Me.LanguageChanged = False
            'VpoResourceManager.CreateLangReader()
        End If
    End Sub

    Private Sub WriteElement(ByVal writer As XmlWriter, ByVal nodeName As String, ByVal content As String)
        writer.WriteStartElement(nodeName)
        writer.WriteString(content)
        writer.WriteEndElement()
    End Sub


    ' Properties
    Public Property APSplitPos() As Integer
        Get
            Return Me._APSplitPos
        End Get
        Set(ByVal value As Integer)
            Me._APSplitPos = value
        End Set
    End Property

    Public Property AssocVPOA() As Boolean
        Get
            Return Me._AssocVPOA
        End Get
        Set(ByVal value As Boolean)
            Me._AssocVPOA = value
        End Set
    End Property

    Public Property CheckForUpdates() As Boolean
        Get
            Return Me._CheckForUpdates
        End Get
        Set(ByVal value As Boolean)
            Me._CheckForUpdates = value
        End Set
    End Property

    Public Property DefaultAlbumFolder() As String
        Get
            Return Me._DefaultAlbumFolder
        End Get
        Set(ByVal value As String)
            Me._DefaultAlbumFolder = value
        End Set
    End Property

    Public Property FirstStart() As Boolean
        Get
            Return Me._FirstStart
        End Get
        Set(ByVal value As Boolean)
            Me._FirstStart = value
        End Set
    End Property

    Public Property Language() As String
        Get
            Return Me._Language
        End Get
        Set(ByVal value As String)
            Me._Language = value
            Me.LanguageChanged = True
        End Set
    End Property

    Public Property MainHeight() As Integer
        Get
            Return Me._MainHeight
        End Get
        Set(ByVal value As Integer)
            Me._MainHeight = value
        End Set
    End Property

    Public Property MainMaximized() As Boolean
        Get
            Return Me._MainMaximized
        End Get
        Set(ByVal value As Boolean)
            Me._MainMaximized = value
        End Set
    End Property

    Public Property MainWidth() As Integer
        Get
            Return Me._MainWidth
        End Get
        Set(ByVal value As Integer)
            Me._MainWidth = value
        End Set
    End Property

    Public Property PhotoEditorHeight() As Integer
        Get
            Return Me._PhotoEditorHeight
        End Get
        Set(ByVal value As Integer)
            Me._PhotoEditorHeight = value
        End Set
    End Property

    Public Property PhotoEditorMax() As Boolean
        Get
            Return Me._PhotoEditorMax
        End Get
        Set(ByVal value As Boolean)
            Me._PhotoEditorMax = value
        End Set
    End Property

    Public Property PhotoEditorWidth() As Integer
        Get
            Return Me._PhotoEditorWidth
        End Get
        Set(ByVal value As Integer)
            Me._PhotoEditorWidth = value
        End Set
    End Property

    Public Property ShowImgRes() As Boolean
        Get
            Return Me._ShowImgRes
        End Get
        Set(ByVal value As Boolean)
            Me._ShowImgRes = value
        End Set
    End Property

    Public Property ShowQuickAlbumInfo() As Boolean
        Get
            Return Me._ShowQuickAlbumInfo
        End Get
        Set(ByVal value As Boolean)
            Me._ShowQuickAlbumInfo = value
        End Set
    End Property

    Public Property ShowQuickPhotoInfo() As Boolean
        Get
            Return Me._ShowQuickPhotoInfo
        End Get
        Set(ByVal value As Boolean)
            Me._ShowQuickPhotoInfo = value
        End Set
    End Property

    Public Property ShowSplashScreen() As Boolean
        Get
            Return Me._ShowSplashScreen
        End Get
        Set(ByVal value As Boolean)
            Me._ShowSplashScreen = value
        End Set
    End Property

    Public Property SlideShowInterval() As Integer
        Get
            Return Me._SlideShowInterval
        End Get
        Set(ByVal value As Integer)
            Me._SlideShowInterval = value
        End Set
    End Property

    Public Property ThumbHeight() As Integer
        Get
            Return Me._ThumbHeight
        End Get
        Set(ByVal value As Integer)
            Me._ThumbHeight = value
        End Set
    End Property

    Public Property ThumbWidth() As Integer
        Get
            Return Me._ThumbWidth
        End Get
        Set(ByVal value As Integer)
            Me._ThumbWidth = value
        End Set
    End Property

End Class



'http://www.codeproject.com/KB/files/INIFileClass.aspx


'the form
        Dim signatures$ = ""
        Using srFile As IO.StreamReader = fiFile.OpenText
            signatures = srFile.ReadToEnd()

            srFile.Close()
        End Using

        Dim oINI As New INIFile
        oINI.Contents = signatures

        For Each INIentry As Section In oINI.Sections
            If INIentry.Keys(0).IsComment = False Then
                MsgBox(INIentry.Name.ToString)
                MsgBox(INIentry.Keys(0).Value)
            End If
        Next


'the class
#Region "License"
#If False Then 'allows for plain text in code file
=========================================================
All of the code in this file is protected under the
Creative Commons Attribution-ShareAlike 2.5 license.

What follows is a simple English version of what
this license entitles you to do as well as your
obligations. The full license is available at
http://creativecommons.org/licenses/by-sa/2.5/legalcode.
---
Attribution-ShareAlike 2.5

You are free:

    * to copy, distribute, display, and perform the work
    * to make derivative works
    * to make commercial use of the work

Under the following conditions:
    * Attribution. You must attribute the work in the
      manner specified by the author or licensor.
    * Share Alike. If you alter, transform, or build
      upon this work, you may distribute the resulting
      work only under a license identical to this one.

Pleas note: For any reuse or distribution, you must make
clear to others the license terms of this work. Any of
these conditions can be waived if you get permission
from the copyright holder. Your fair use and other rights
are in no way affected by the above.
=========================================================
#End If
#End Region

#Region "Class INIFile"
''' <summary>
''' Represents the contents of an INI file.
''' </summary>
Public Class INIFile

#Region "Constructor"
    ''' <summary>
    ''' Initializes a new instance of the <see cref="INIFile">INIFile</see> class.
    ''' </summary>
    ''' <remarks>No file is loaded with this constructor.</remarks>
    Public Sub New()
        MyBase.New()
    End Sub

    ''' <summary>
    ''' Initializes a new instance of the <see cref="INIFile">INIFile</see> class, specifying a <see cref="IO.FileInfo">FileInfo</see> class to load from.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the source file.</remarks>
    ''' <param name="File">Specifies the file to load from.</param>
    Public Sub New(ByVal File As IO.FileInfo)
        MyBase.New()
        LoadFile(File)
    End Sub

    ''' <summary>
    ''' Initializes a new instance of the <see cref="INIFile">INIFile</see> class, specifying a filename to load from.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the source file.</remarks>
    ''' <param name="FileName">Specifies the file to load from.</param>
    Public Sub New(ByVal FileName As String)
        MyBase.New()
        LoadFile(FileName)
    End Sub
#End Region

#Region "Properties"
    ''' <summary>
    ''' Character before the section name.
    ''' </summary>
    Public SectionOpenChar As Char = "["c

    ''' <summary>
    ''' Character after the section name.
    ''' </summary>
    Public SectionCloseChar As Char = "]"c

    ''' <summary>
    ''' Character between name and value of a key.
    ''' </summary>
    Public NameValueDelimChar As Char = "="c

    ''' <summary>
    ''' Character that begins a comment line.
    ''' </summary>
    Public CommentChar As Char = ";"c

    ''' <summary>
    ''' File used with <see cref="INIFile.LoadFile">LoadFile</see> and <see cref="INIFile.SaveFile">SaveFile</see> when no file is specified.
    ''' </summary>
    Public File As IO.FileInfo

    ''' <summary>
    ''' A <see cref="List(Of Section)">List(Of Section)</see> collection containing the sections of the INI file.
    ''' </summary>
    Public Sections As New Collections.Generic.List(Of Section)
#End Region

#Region "Methods"
#Region "File Operations"
#Region "LoadFile"
    ''' <summary>
    ''' Load an existing INI file into this class.
    ''' </summary>
    ''' <remarks>This overload uses the <see cref="INIFile.File">File</see> property as the source file.</remarks>
    ''' <exception cref="FileNotSpecifiedException">If <see cref="INIFile.File">File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub LoadFile()
        If File Is Nothing Then
            Throw New FileNotSpecifiedException
        Else
            LoadFile(File)
        End If
    End Sub

    ''' <summary>
    ''' Load an existing INI file into this class, specifying a filename.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the source file.</remarks>
    ''' <param name="FileName">Specifies the file to load from.</param>
    ''' <exception cref="FileNotSpecifiedException">If the file parameter is <see cref="String.empty">Empty</see> or is set to <c>Nothing</c>, this function falls back to <see cref="INIFile.LoadFile">LoadFile</see> with no parameters. If <see cref="INIFile.File">INIFIle.File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub LoadFile(ByVal FileName As String)
        If String.IsNullOrEmpty(FileName) Then
            LoadFile()
        Else
            LoadFile(New IO.FileInfo(FileName))
        End If
    End Sub

    ''' <summary>
    ''' Load an existing INI file into this class, specifying a <see cref="IO.FileInfo">FileInfo</see> class.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the source file.</remarks>
    ''' <param name="File">Specifies the file to load from.</param>
    ''' <exception cref="FileNotSpecifiedException">If the file parameter is set to <c>Nothing</c>, this function falls back to <see cref="INIFile.LoadFile">LoadFile</see> with no parameters. If <see cref="INIFile.File">INIFIle.File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub LoadFile(ByVal File As IO.FileInfo)
        Dim sBuffer As String

        If File Is Nothing Then
            LoadFile()
            Return
        End If

        Me.File = File

        Using srFile As IO.StreamReader = File.OpenText
            sBuffer = srFile.ReadToEnd
            'we buffer it so parsing happens after the file is closed
            srFile.Close()
        End Using

        Me.Contents = sBuffer
    End Sub
#End Region

#Region "SaveFile"
    'No params
    ''' <summary>
    ''' Save the class to an INI file, overwriting it.
    ''' </summary>
    ''' <remarks>This overload uses the <see cref="INIFile.File">File</see> property as the destination file.</remarks>
    ''' <exception cref="FileNotSpecifiedException">If <see cref="INIFile.File">File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub SaveFile()
        If File Is Nothing Then
            Throw New FileNotSpecifiedException
        Else
            SaveFile(File)
        End If
    End Sub

    'String
    ''' <summary>
    ''' Save the class to an INI file, specified by a filename, overwriting it.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the destination file.</remarks>
    ''' <param name="FileName">Specifies the file to save to.</param>
    ''' <exception cref="FileNotSpecifiedException">If the file parameter is <see cref="String.empty">Empty</see> or is set to <c>Nothing</c>, this function falls back to <see cref="INIFile.SaveFile">SaveFile</see> with no parameters. If <see cref="INIFile.File">INIFIle.File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub SaveFile(ByVal FileName As String)
        If String.IsNullOrEmpty(FileName) Then
            SaveFile()
        Else
            SaveFile(New IO.FileInfo(FileName))
        End If
    End Sub

    'FileInfo
    ''' <summary>
    ''' Save the class to an INI file, specified by a <see cref="IO.FileInfo">FileInfo</see> class, overwriting it.
    ''' </summary>
    ''' <remarks>This overload sets the <see cref="INIFile.File">File</see> property as the destination file.</remarks>
    ''' <param name="File">Specifies the file to save to.</param>
    ''' <exception cref="FileNotSpecifiedException">If the file parameter set to <c>Nothing</c>, this function falls back to <see cref="INIFile.SaveFile">SaveFile</see> with no parameters. If <see cref="INIFile.File">INIFIle.File</see> is set to <c>Nothing</c>, this exception is thrown.</exception>
    Public Sub SaveFile(ByVal File As IO.FileInfo)
        If File Is Nothing Then
            SaveFile()
            Return
        End If

        Me.File = File

        Using swFile As IO.StreamWriter = File.CreateText
            swFile.Write(Me.Contents)
            swFile.Flush()
            swFile.Close()
        End Using
    End Sub
#End Region
#End Region

#Region "Searching"
#Region "FindSection"

    ''' <summary>
    ''' Finds the first occurance of the specified <see cref="Section">Section</see>.
    ''' </summary>
    ''' <param name="SectionName"></param>
    ''' <returns>The first matching <see cref="Section">Section</see>.</returns>
    ''' <remarks>Matching is case-insensitive and is based on the <see cref="Section.name">name</see> property. If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is returned.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    Public Function FindSection(ByVal SectionName As String) As Section
        'we're lazy... find only the first matching section
        Dim oSection As Section

        For Each oSection In Sections
            If oSection.Name Is Nothing Then
                If SectionName Is Nothing Then Return oSection
            Else
                If oSection.Name.ToLower = SectionName.ToLower Then Return oSection
            End If
        Next

        Throw New SectionNotFoundException(SectionName)
    End Function

#End Region

#Region "FindKey"
    ''' <summary>
    ''' Finds the first occurance of the specified <see cref="Key">Key</see> in only the first occurance of the specified <see cref="Section">Section</see>.
    ''' </summary>
    ''' <param name="SectionName">The <see cref="Section">Section</see> the <see cref="Key">Key</see> should be searched under.</param>
    ''' <param name="KeyName">The <see cref="Key">Key</see> to search for.</param>
    ''' <returns>The first matching <see cref="Key">Key</see>.</returns>
    ''' <remarks>Matching is case-insensitive and is based on the section's <see cref="Section.name">name</see> and the key's<see cref="Key.name"> name</see> property. If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="Key">Key</see>s exist, only the first occurance is returned.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="Key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Function FindKey(ByVal SectionName As String, ByVal KeyName As String) As Key
        Dim oSection As Section = FindSection(SectionName)

        If oSection IsNot Nothing Then
            Return oSection.FindKey(KeyName)
        Else
            Return Nothing
        End If
    End Function
#End Region
#End Region

#Region "Simple Editing"
#Region "GetValue"
    ''' <summary>
    ''' Returns the <see cref="Key.Value">value</see> of a <see cref="key">Key</see> from a specified file.
    ''' </summary>
    ''' <param name="SectionName">The <see cref="Section">Section</see> the <see cref="key">Key</see> should be searched under.</param>
    ''' <param name="KeyName">The <see cref="key">Key</see> to return the <see cref="Key.Value">value</see> for.</param>
    ''' <returns>The key's value.</returns>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is returned.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Function GetValue(ByVal SectionName As String, ByVal KeyName As String) As String
        Dim oKey As Key = FindKey(SectionName, KeyName)

        If oKey IsNot Nothing Then
            Return oKey.Value
        Else
            Return Nothing
        End If
    End Function

    ''' <summary>
    ''' Returns the <see cref="Key.Value">value</see> of a <see cref="key">Key</see>.
    ''' </summary>
    ''' <param name="SectionName">The <see cref="Section">Section</see> the <see cref="key">Key</see> should be searched under.</param>
    ''' <param name="KeyName">The <see cref="key">Key</see> to return the <see cref="Key.Value">value</see> for.</param>
    ''' <param name="FileName">The file to return the <see cref="key">Key</see>'s <see cref="Key.Value">value</see> from.</param>
    ''' <returns>The <see cref="key">Key</see>'s <see cref="Key.Value">value</see>.</returns>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is returned.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Shared Function GetValue(ByVal SectionName As String, ByVal KeyName As String, ByVal FileName As String) As String
        Dim INI As New INIFile(FileName)

        Return INI.GetValue(SectionName, KeyName)
    End Function
#End Region

#Region "SetValue"
    ''' <summary>
    ''' Sets the <see cref="Key.Value">value</see> of a <see cref="key">Key</see> is a specified file.
    ''' </summary>
    ''' <param name="SectionName">The <see cref="Section">Section</see> the <see cref="key">Key</see> should be searched under.</param>
    ''' <param name="KeyName">The <see cref="key">Key</see> to set the <see cref="Key.Value">value</see> for.</param>
    ''' <param name="Value">The new value of the <see cref="key">Key</see>.</param>
    ''' <remarks>
    ''' If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is set.
    ''' 
    ''' The <see cref="key">Key</see> and/or <see cref="Section">Section</see> is created if it does not exist.
    ''' </remarks>
    ''' <exception cref="KeyNotFoundException">Thrown if <see cref="key">Key</see> as set to <c>Nothing</c> or is <see cref="String.empty">Empty</see>.</exception>
    Public Sub SetValue(ByVal SectionName As String, ByVal KeyName As String, ByVal Value As String)
        If String.IsNullOrEmpty(KeyName) Then
            Throw New KeyNotFoundException(Nothing)
        End If

        Dim oSection As Section
        Dim oKey As Key

        Try
            oSection = FindSection(SectionName)
        Catch SectionNotFound As SectionNotFoundException
            oSection = New Section(SectionName)
            Me.Sections.Add(oSection)
        End Try

        Try
            oKey = oSection.FindKey(KeyName)
        Catch KeyNotFound As KeyNotFoundException
            oKey = New Key
            oKey.Name = KeyName
        End Try

        oKey.Value = Value
    End Sub

    ''' <summary>
    ''' Sets the <see cref="Key.Value">value</see> of a <see cref="key">Key</see>.
    ''' </summary>
    ''' <remarks>
    ''' If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is set.
    ''' 
    ''' The key and/or <see cref="Section">Section</see> is created if it does not exist.
    ''' </remarks>
    ''' <param name="SectionName">The <see cref="Section">Section</see> the <see cref="key">Key</see> should be searched under.</param>
    ''' <param name="KeyName">The <see cref="key">Key</see> to set the <see cref="Key.Value">value</see> for.</param>
    ''' <param name="Value">The new value of the <see cref="key">Key</see>.</param>
    ''' <param name="FileName">The file to set the <see cref="key">Key</see>'s <see cref="Key.Value">value</see> from.</param>
    ''' <exception cref="KeyNotFoundException">Thrown if <see cref="key">Key</see> as set to <c>Nothing</c> or is <see cref="String.empty">Empty</see>.</exception>
    Public Shared Sub SetValue(ByVal SectionName As String, ByVal KeyName As String, ByVal Value As String, ByVal FileName As String)
        Dim INI As New INIFile(FileName)

        INI.SetValue(SectionName, KeyName, Value)
        INI.SaveFile()
    End Sub
#End Region

#Region "DeleteSection"
    ''' <summary>
    ''' Deletes the first occurance of a <see cref="Section">Section</see>.
    ''' </summary>
    ''' <remarks>If multiple matching sections exist, only the first occurance is deleted.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified section was not found.</exception>
    ''' <param name="SectionName">Name of the <see cref="Section">Section</see> to delete.</param>
    Public Sub DeleteSection(ByVal SectionName As String)
        Dim oSection As Section = FindSection(SectionName)

        If oSection IsNot Nothing Then
            Sections.Remove(oSection)
        End If
    End Sub

    ''' <summary>
    ''' Deletes the first occurance of a <see cref="Section">Section</see> in a specified file.
    ''' </summary>
    ''' <param name="SectionName">Name of the <see cref="Section">Section</see> to delete.</param>
    ''' <param name="FileName">File to delete the <see cref="Section">Section</see> from.</param>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is deleted.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    Public Shared Sub DeleteSection(ByVal SectionName As String, ByVal FileName As String)
        Dim INI As New INIFile(FileName)

        INI.DeleteSection(SectionName)
        INI.SaveFile()
    End Sub
#End Region

#Region "DeleteKey"
    ''' <summary>
    ''' Deletes the first occurance of a <see cref="key">Key</see>.
    ''' </summary>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see> exist, only the first occurance is deleted.</remarks>
    ''' <param name="SectionName">The name of the <see cref="Section">Section</see> to delete the <see cref="key">Key</see> from.</param>
    ''' <param name="KeyName">The name of the <see cref="key">Key</see> to delete.</param>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Sub DeleteKey(ByVal SectionName As String, ByVal KeyName As String)
        Dim oSection As Section = FindSection(SectionName)
        If oSection IsNot Nothing Then
            Dim oKey As Key = oSection.FindKey(KeyName)

            If oKey IsNot Nothing Then
                oSection.Keys.Remove(oKey)
            End If
        End If
    End Sub

    ''' <summary>
    ''' Deletes the first occurance of a <see cref="key">Key</see> in a specified file.
    ''' </summary>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see> exist, only the first occurance is deleted.</remarks>
    ''' <param name="SectionName">The name of the <see cref="Section">Section</see> to delete the <see cref="key">Key</see> from.</param>
    ''' <param name="KeyName">The name of the <see cref="key">Key</see> to delete.</param>
    ''' <param name="FileName">The file to delete the <see cref="key">Key</see> from.</param>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Shared Sub DeleteKey(ByVal SectionName As String, ByVal KeyName As String, ByVal FileName As String)
        Dim INI As New INIFile(FileName)

        INI.DeleteKey(SectionName, KeyName)
        INI.SaveFile()
    End Sub
#End Region

#Region "RenameSection"
    ''' <summary>
    ''' Renames the first occurance of a <see cref="Section">Section</see>.
    ''' </summary>
    ''' <param name="SectionName">Name of the <see cref="Section">Section</see> to rename.</param>
    ''' <param name="NewName">The new name of the <see cref="Section">Section</see>.</param>
    ''' <remarks>If multiple matching <see cref="Section">Section</see> exist, only the first occurance is renamed.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    Public Sub RenameSection(ByVal SectionName As String, ByVal NewName As String)
        Dim oSection As Section = FindSection(SectionName)

        'if found
        If oSection IsNot Nothing Then

            'if new name indicates top of file
            If NewName Is Nothing Then

                'if no top of file section
                If Sections(0).Name IsNot Nothing Then
                    'move current to top
                    Sections.Remove(oSection)
                    Sections.Insert(0, oSection)

                    'set its name to indicate top of file
                    oSection.Name = Nothing
                Else
                    'merge keys with existing top of file section
                    Sections(0).Keys.AddRange(oSection.Keys)
                    Sections.Remove(oSection)
                End If
            Else
                'rename the section
                oSection.Name = NewName
            End If
        End If
    End Sub

    ''' <summary>
    ''' Renames the first occurance of a <see cref="Section">Section</see> in a specified file.
    ''' </summary>
    ''' <param name="SectionName">Name of the <see cref="Section">Section</see> to rename.</param>
    ''' <param name="NewName">The new name of the <see cref="Section">Section</see>.</param>
    ''' <param name="FileName">File to rename the <see cref="Section">Section</see> from.</param>
    ''' <remarks>If multiple matching <see cref="Section">Section</see> exist, only the first occurance is renamed.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    Public Shared Sub RenameSection(ByVal SectionName As String, ByVal NewName As String, ByVal FileName As String)
        Dim INI As New INIFile(FileName)

        INI.RenameSection(SectionName, NewName)
        INI.SaveFile()
    End Sub
#End Region

#Region "RenameKey"
    ''' <summary>
    ''' Renames the first occurance of a <see cref="key">Key</see>.
    ''' </summary>
    ''' <param name="SectionName">The name of the <see cref="Section">Section</see> to rename the <see cref="key">Key</see> from.</param>
    ''' <param name="KeyName">The name of the <see cref="key">Key</see> to rename.</param>
    ''' <param name="NewName">The new name of the <see cref="key">Key</see>.</param>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is renamed.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Sub RenameKey(ByVal SectionName As String, ByVal KeyName As String, ByVal NewName As String)
        Dim oKey As Key = FindKey(SectionName, KeyName)

        If oKey IsNot Nothing Then
            oKey.Name = NewName
        End If
    End Sub

    ''' <summary>
    ''' Renames the first occurance of a <see cref="key">Key</see> in a specified file.
    ''' </summary>
    ''' <param name="SectionName">The name of the <see cref="Section">Section</see> to rename the <see cref="key">Key</see> from.</param>
    ''' <param name="KeyName">The name of the <see cref="key">Key</see> to rename.</param>
    ''' <param name="NewName">The new name of the <see cref="key">Key</see>.</param>
    ''' <param name="FileName">The file to rename the <see cref="key">Key</see> from.</param>
    ''' <remarks>If multiple matching <see cref="Section">Section</see>s exist, only the first occurance is searched. If multiple matching <see cref="key">Key</see>s exist, only the first occurance is renamed.</remarks>
    ''' <exception cref="SectionNotFoundException">Thrown if the specified <see cref="Section">Section</see> was not found.</exception>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified <see cref="key">Key</see> was not found in the first matching <see cref="Section">Section</see>.</exception>
    Public Shared Sub RenameKey(ByVal SectionName As String, ByVal KeyName As String, ByVal NewName As String, ByVal FileName As String)
        Dim INI As New INIFile(FileName)

        INI.RenameKey(SectionName, KeyName, NewName)
        INI.SaveFile()
    End Sub
#End Region
#End Region

#Region "Contents"
    ''' <summary>
    ''' A <see cref="String">String</see> that contains the current INI file.
    ''' </summary>
    ''' <remarks>This property processes the contents of the file upon each call. To increas performance, only call this property when needed and buffer cache the contents otherwise.</remarks>
    Public Property Contents() As String
        Get
            Dim sbBuffer As New System.Text.StringBuilder

            Dim oSection As Section
            Dim oKey As Key

            For Each oSection In Sections
                If oSection.Name IsNot Nothing Then
                    sbBuffer.AppendLine(SectionOpenChar & oSection.Name & SectionCloseChar)
                End If

                For Each oKey In oSection.Keys
                    If oKey.IsComment Then
                        sbBuffer.AppendLine(CommentChar & oKey.Value)
                    Else
                        sbBuffer.AppendLine(oKey.Name & NameValueDelimChar & oKey.Value)
                    End If
                Next
                sbBuffer.AppendLine()
            Next
            Return sbBuffer.ToString
        End Get
        Set(ByVal value As String)
            'clear out all the sections first
            Sections.Clear()

            If String.IsNullOrEmpty(value) Then Return

            Using srBuffer As New IO.StringReader(value)
                Dim sLine As String = srBuffer.ReadLine.Trim
                Dim sTrimmedLine As String = sLine.Trim

                Dim oCurrentSection As Section = Nothing

                Do
                    sTrimmedLine = sLine.Trim

                    If sTrimmedLine.Length > 0 Then
                        Select Case sTrimmedLine.Substring(0, 1)
                            Case SectionOpenChar
                                If sTrimmedLine.Contains(SectionCloseChar) Then
                                    oCurrentSection = New Section(sTrimmedLine.Substring(1, sTrimmedLine.IndexOf(SectionCloseChar) - 1))
                                Else
                                    oCurrentSection = New Section(sTrimmedLine.Substring(1, sTrimmedLine.Length - 1))
                                End If
                                Me.Sections.Add(oCurrentSection)
                            Case CommentChar
                                If oCurrentSection Is Nothing Then
                                    oCurrentSection = New Section()
                                    Me.Sections.Add(oCurrentSection)
                                End If

                                oCurrentSection.Keys.Add(New Key(sTrimmedLine.Substring(1)))
                            Case Else
                                Dim sKeyName As String
                                Dim sKeyValue As String

                                If sTrimmedLine.Contains(NameValueDelimChar) Then
                                    sKeyName = sTrimmedLine.Substring(0, sTrimmedLine.IndexOf(NameValueDelimChar))
                                    sKeyValue = sTrimmedLine.Substring(sKeyName.Length + 1)
                                Else
                                    sKeyName = sTrimmedLine
                                    sKeyValue = Nothing
                                End If

                                If oCurrentSection Is Nothing Then
                                    oCurrentSection = New Section(Nothing)
                                    Me.Sections.Add(oCurrentSection)
                                End If

                                oCurrentSection.Keys.Add(New Key(sKeyName, sKeyValue))
                        End Select
                    End If

                    sLine = srBuffer.ReadLine
                Loop Until sLine Is Nothing

                srBuffer.Close()
            End Using
        End Set
    End Property
    
#End Region
#End Region

End Class
#End Region

#Region "Class Section"
''' <summary>
''' Contains an individual section from an INI file.
''' </summary>
Public Class Section

#Region "Constructor"
    ''' <summary>
    ''' Initializes a new instance of the <see cref="Section">Section</see> class.
    ''' </summary>
    Public Sub New()
        MyBase.New()
    End Sub

    ''' <summary>
    ''' Initializes a new instance of the <see cref="Section">Section</see> class with a specified name.
    ''' </summary>
    ''' <param name="SectionName">The name of the section.</param>
    Public Sub New(ByVal SectionName As String)
        MyBase.new()
        MyClass.Name = SectionName
    End Sub
#End Region

    ''' <summary>
    ''' A <see cref="List(Of Key)">List(Of Key)</see> collection containing the keys of the section.
    ''' </summary>
    Public Keys As New List(Of Key)

    ''' <summary>
    ''' The name of the section.
    ''' </summary>
    ''' <remarks>A value of <c>Nothing</c> indicates a set of keys and comments at the top of the file before the first section.</remarks>
    Public Name As String

#Region "FindKey"
    ''' <summary>
    ''' Finds a key by name.
    ''' </summary>
    ''' <param name="KeyName"></param>
    ''' <returns>A reference to a matching key class within this section.</returns>
    ''' <remarks>Always returns only the first match.</remarks>
    ''' <exception cref="KeyNotFoundException">Thrown is the specified key was not found in the first matching section.</exception>
    Public Function FindKey(ByVal KeyName As String) As Key
        'we're lazy (still)... return only the first matching key
        Dim oKey As Key

        For Each oKey In Keys
            If oKey.Name IsNot Nothing Then
                If oKey.Name.ToLower = KeyName.ToLower Then Return oKey
            End If
        Next

        Throw New KeyNotFoundException(KeyName)
    End Function
#End Region
End Class
#End Region

#Region "Class Key"
''' <summary>
''' Represents a key and value pair or a comment in the INI file.
''' </summary>
Public Class Key

#Region "Constructor"
    ''' <summary>
    ''' Initializes a new instance of the <see cref="key">Key</see> class with a name and value pair.
    ''' </summary>
    ''' <param name="KeyName">The name of the key.</param>
    ''' <param name="Value">The value of the key.</param>
    Public Sub New(ByVal KeyName As String, ByVal Value As String)
        MyBase.new()

        MyClass.Name = KeyName
        MyClass.Value = Value
        IsComment = False
    End Sub

    ''' <summary>
    ''' Initializes a new instance of the <see cref="key">Key</see> class as a comment.
    ''' </summary>
    ''' <param name="Comment">Content of the comment.</param>
    Public Sub New(ByVal Comment As String)
        MyBase.new()

        Value = Comment
        IsComment = True
    End Sub

    ''' <summary>
    ''' Initializes a new instance of the <see cref="key">Key</see> class.
    ''' </summary>
    Public Sub New()
        MyBase.new()
    End Sub
#End Region

    ''' <summary>
    ''' The name of the key.
    ''' </summary>
    Public Name As String

    ''' <summary>
    ''' The value of the key.
    ''' </summary>
    Public Value As String

    ''' <summary>
    ''' Indicates if this key should be treated as a comment.
    ''' </summary>
    Public IsComment As Boolean


End Class
#End Region

#Region "Class FileNotSpecifiedException"
''' <summary>
''' The exception that is thrown when no file is specified for a file operation that requires a file and the <see cref="INIFile.file">INIFile.File</see> property is set to <c>Nothing</c>.
''' </summary>
Public Class FileNotSpecifiedException
    Inherits Exception

    ''' <summary>
    ''' Initializes a new instance of a <see cref="FileNotSpecifiedException">FileNotSpecifiedException</see> object.
    ''' </summary>
    ''' <remarks>The default constructor initializes any fields to their default values.</remarks>
    Sub New()
        MyBase.New("A file was not specified for reading or writing. The field 'File' is set to 'Nothing'.")
    End Sub
End Class
#End Region

#Region "Class SectionNotFoundException"
''' <summary>
''' The exception that is thrown when an attempt to find a <see cref="Section">Section</see> object by name that does not exist fails.
''' </summary>
Class SectionNotFoundException
    Inherits Exception

    ''' <summary>
    ''' Initializes a new instance of <see cref="SectionNotFoundException">SectionNotFoundException</see> object with the specified missing section's name.
    ''' </summary>
    Public Sub New(ByVal SectionName As String)
        MyBase.New("The section '" & SectionName & "' was not found.")
    End Sub
End Class
#End Region

#Region "Class KeyNotFoundException"
''' <summary>
''' The exception that is thrown when an attempt to find a <see cref="Key">Key</see> object by name that does not exist fails.
''' </summary>
Class KeyNotFoundException
    Inherits Exception

    ''' <summary>
    ''' Initializes a new instance of <see cref="KeyNotFoundException">KeyNotFoundException</see> object with the specified missing key name.
    ''' </summary>
    ''' <remarks></remarks>
    Public Sub New(ByVal KeyName As String)
        MyBase.New("The key '" & KeyName & "' was not found.")
    End Sub
End Class
#End Region
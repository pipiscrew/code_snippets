    Public Function RemoveUnwantedSTRs4Files(ByVal str$) As String
        str = Trim(str)
        str = Replace(str, "/", "")
        str = Replace(str, "\", "")
        str = Replace(str, ":", "")
        str = Replace(str, "*", "")
        str = Replace(str, "?", "")
        str = Replace(str, "<", "")
        str = Replace(str, ">", "")
        str = Replace(str, "|", "")
        str = Replace(str, ";", "")
        str = Replace(str, ",", "")
        '    str = Replace(str, ".", "")

        Return str
    End Function

or


    Public Function MakeFileNameValid(ByVal sFile As String) As String
        Dim Com As String = """"
        Return sFile.Replace(":", "").Replace("*", "").Replace("/", "").Replace("\", "").Replace("?", "").Replace("<", "").Replace(">", "").Replace("|", "").Replace(Com, "")
    End Function



or

'not remove
if (proposedFilename.IndexOfAny(System.IO.Path.GetInvalidFileNameChars()) != -1)
{
  MessageBox.Show("The filename is invalid");
  return;
}


            If txtExc.Text.IndexOfAny(System.IO.Path.GetInvalidFileNameChars()) <> -1 Then
                MsgBox("Not valid name for folder", MsgBoxStyle.Exclamation, apTitle)
                Exit Sub
            End If
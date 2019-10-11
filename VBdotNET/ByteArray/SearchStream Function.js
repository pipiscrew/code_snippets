    Private Function SearchStream(ByVal stream As Stream, ByVal HEXData As String()) As ArrayList
        stream.Seek(0, SeekOrigin.Begin)

        Dim totalLEN% = stream.Length
        Dim pos%
        Dim chunk$
        Dim counter%
        Dim resultPostion%
        Dim tmpArr As New ArrayList

        While counter <= totalLEN
            chunk = stream.ReadByte().ToString("X")

            If chunk = HEXData(pos) Then
                If pos = 0 Then
                    resultPostion = stream.Position - 1
                End If

                pos += 1

                If pos = UBound(HEXData) + 1 Then
                    tmpArr.Add(resultPostion)
                    'MsgBox(resultPostion & vbCrLf & Hex(resultPostion))
                    pos = 0
                End If
            Else
                pos = 0
            End If

            counter += 1
        End While

        Return tmpArr
    End Function
    
    
    ama den brei tpt tote to result einai 1 arraylist.count = 0
Private Sub txtSwmateio_KeyDown(KeyCode As Integer, Shift As Integer)
    If KeyCode = vbKeyReturn Then
        If Len(txtSwmateio.Text) = 0 Then
            FillGrid txtSwmCode.Tag
        Else
            txtSwmateio.Text = Replace(txtSwmateio.Text, "'", "")

            Dim v As Variant
            v = HOT_BringValue(txtSwmateio.Text, "Óùìáôåßá ", "Åðùíõìßá", "", , rsConn)

            If IsNull(v) Then
                txtSwmCode.Text = ""
                txtSwmCode.Tag = ""
                txtSwmateio.Text = ""
            Else
                txtSwmateio.Text = v(3)    'Swmateio Åðùíõìßá
                txtSwmCode.Tag = v(1)    'Kwdikos
                txtSwmCode.Text = v(4)   'Óõíôìçóç
            End If
        End If
    End If
End Sub


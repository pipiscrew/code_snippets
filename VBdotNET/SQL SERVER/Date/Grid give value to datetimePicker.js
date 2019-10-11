                If Not rd("DATESTART") Is DBNull.Value Then
                    txtDATESTART.Checked = True
                    txtDATESTART.Value = rd("DATESTART")
                Else
                    txtDATESTART.Checked = False
                End If
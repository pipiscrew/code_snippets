Private Function Miliatiempo(u) As String
        sg = Int(u / 1000)
        mn = Int(sg / 60)
        hh = Fix(mn / 60)
        If mn > 59 Then
            mn = mn Mod 60
        End If
        
        zz = sg Mod 60
        Miliatiempo = IIf(Format(str$(hh), "0#") = 0, "", Format(str$(hh), "0#") + ":") + Format(str$(mn), "0#") + ":" + Format(str$(zz), "0#")
End Function
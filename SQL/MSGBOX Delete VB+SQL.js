If MsgBox("Are u going to delete <Name" & "|" & MSHFl.TextMatrix(Prev, 1) & "|  " & MSHFl.TextMatrix(Prev, 2) & "> ;", vbInformation + vbYesNo, aPtitle) = vbNo Then Exit Sub

******

RsRes = Dor.ExecParamProc("s_DokimesAithshsCANCEL")

If RsRes <> 0 Then MsgBox "Ayth thn stigmh den einai dynath h leitoyrgia ayth", vbInformation, aPtitle & " - " & RsRes


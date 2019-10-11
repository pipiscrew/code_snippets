Public Function QuoteMod(Obj)
        if IsNull(Obj) or IsEmpty(Obj) then
           Prepare_MonoQuote = ""
        else
           Prepare_MonoQuote = Replace(Obj, "'", "''")
           Prepare_MonoQuote = Replace(Prepare_MonoQuote, """", "''")
        end if
End Function


   Function ReplaceMonoQuote(Obj)
    If IsNull(Obj) Then
       Obj = ""
    Else
       Obj = Replace(Obj, "'", "''")
    End If
    ReplaceMonoQuote = Obj
   End Function
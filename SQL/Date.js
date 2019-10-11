otan kanoyme ADD se ena pedio SmallDateTime

Dor.ArrADD 24, "@DateStart_25", asDateSmall, asInput, DTP1.Value

*****
Mesa sthn procedure gia na emfanizoyme me format dd/mm/yy tis hmeromhnies apey8eias
kai oxi yyyy/mm/dd
convert(varchar(20),DateKatax,103)
'h
convert(varchar(20),DateKatax,113) 'Gia date me wra
*****

otan kanoyme search se enan pinaka poy to pedio einai SmallDateTime
kai h parametros ths Procedure einai nVarChar

Dor.ArrADD 6, "@date1", asVarChar, asInput, Format(DTP1.Value, "yyyy/mm/dd"),10


****
Date Between dtp1 and dtp2
(CSTrans.daterec Between '" & Format(DTP1.Value, "yyyy/mm/dd") & "' And '" & Format(DTP2.Value + 1, "yyyy/mm/dd") & "')

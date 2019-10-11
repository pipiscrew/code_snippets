        Dim reg As Regex

        reg = New Regex("<p style=""text-align: center; font-family: arial;"">(.*?)<br />(.*?)</p>")

        For Each m As Match In reg.Matches(sourcehtml)
            MsgBox(m.Groups(2).Value)
        Next
        

sourcehtml
<p style="text-align: center; font-family: arial;">UserName: EAV-18386094<br />Password: 3tcshcb4kh</p><p style="text-align: center; font-family: arial;">UserName: EAV-18410085<br />Password: dnhbn6ehb7</p><p style="text-align: center; font-family: arial;">UserName: EAV-21041547<br />Password: h6hv2aa4au</p>

otan use (.*?) exw to abatzo oti ta grouparei dld
sto m.Groups(0).Value pernoyme to :
        UserName: EAV-18386094<br />Password: 3tcshcb4kh
sto m.Groups(1).Value pernoyme to :
        UserName: EAV-18386094
sto m.Groups(2).Value pernoyme to :
        Password: h6hv2aa4au
        
ama to trexoyme xwris paren8eseis
        reg = New Regex("<p style=""text-align: center; font-family: arial;"">.*?<br />.*?</p>")

apla pernoyme mono to 0
sto m.Groups(0).Value pernoyme to :
        UserName: EAV-18386094<br />Password: 3tcshcb4kh
        

'=======================

meta pio katw ston kwdika mporoyme apla 
        reg = New Regex("<h2 class='date-header'>(.*?)</h2>")
        Dim match As Match = reg.Match(sourcehtml)
        MsgBox(match.Groups(1).Value)

gia na paroyme ena value only
ama to string den bre8ei epistrefei '' keno

'=======================
'allo sample
'=======================
exoyme ayto to string :
<description>takis</description>
<description>makis</description>
<description>sakis</description>

            reg = New Regex("<description>(.*?)</description>")
            match = reg.Match(sourcehtml).NextMatch
            datePosted = match.Groups(1).Value

etsi pernoyme to makis

mporoyme na use kai  
		match = reg.Match(sourcehtml).NextMatch.NextMatch

gia na paroyme ton saki


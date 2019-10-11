SaveSetting "gLink", "Settings", "lastURL", Text1

Text1 = GetSetting("gLink", "Settings", "lastURL", "")

gia na selectareis olo to textbox
Text1.SelStart = 0
Text1.SelLength = Len(Text1)   ' set selection length.



default stored @:
HKEY_CURRENT_USER\Software\VB and VBA Program Settings\
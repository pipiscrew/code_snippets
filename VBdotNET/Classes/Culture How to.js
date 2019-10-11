Imports System.Globalization
Imports System.Threading

    Private Sub frm_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
         'ayto to kanoyme gia testing purpose
         'Thread.CurrentThread.CurrentUICulture = New CultureInfo("el-GR")
'        Thread.CurrentThread.CurrentUICulture = New CultureInfo("fr-FR")
		Thread.CurrentThread.CurrentCulture = New CultureInfo("el-GR") '"en-US") '"en-GB")

        'apo edw kai pera pianei to localization
        Dim frm As New Form1
        Form1.ShowDialog()
        Form1.Dispose()
    End Sub
    
    
'default user locale (standards and formats)
'becomes
'CurrentCulture

'default user UI language
'becomes
'CurrentUICulture
    
    
sthn FORM1 kanoyme ta caption multilanguage :
-exwntas epile3ei thn forma 
8etoyme ta properties :

Localizable = True
kai meta 
Language epilegoyme thn glwssa poy 8eloyme (px GREEK) allazoyme ta captions poy 8eloyme (labels etc.)
kai meta 3anakoyme thn idia diadikasia gia opoia glwssa 8eloyme 
prosoxh otan to Language einai default (einai pws 8a fainontai ta captions otan den exoyn oristei gia thn glwssa poy trexei)
    



gia na doyme pio culture trexei ayth th stigmh :
MsgBox(CultureInfo.CurrentUICulture.Name)
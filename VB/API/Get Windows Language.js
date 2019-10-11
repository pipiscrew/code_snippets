Private Declare Function GetUserDefaultLangID Lib "kernel32" () As Integer

Private Sub Command1_Click()
MsgBox GetLanguage(GetUserDefaultLangID)
End Sub

Function GetLanguage(ByRef iLang_ID As Integer) As String


    Select Case iLang_ID
        Case &H0
        GetLanguage = "Language_Neutral"
        Case &H400
        GetLanguage = "Default Language"
        Case &H401, &H801, &HC01, &H1001, _
        &H1401, &H1801, &H1C01, &H2001, _
        &H2401, &H2801, &H2C01, &H3001, _
        &H3401, &H3801, &H3C01, 16385
        GetLanguage = "Araabic"
        Case &H402
        GetLanguage = "Bulgarian"
        Case &H403
        GetLanguage = "Catalan"
        Case &H404, &H804, &HC04, 4100
        GetLanguage = "Chinese"
        Case &H405
        GetLanguage = "Czech"
        Case &H406
        GetLanguage = "Danish"
        Case &H407, &H807, &HC07, &H1007, 5127
        GetLanguage = "German"
        Case &H408
        GetLanguage = "Greek"
        Case &H409, &H809, &HC09, &H1009, &H1409, &H1809, _
        &H1C09, &H2009, &H2409, &H2809, 11273
        GetLanguage = "English"
        Case &H40A, &H80A, &HC0A, &H100A, &H140A, &H180A, _
        &H1C0A, &H200A, &H240A, &H280A, &H2C0A, _
        &H300A, &H340A, &H380A, &H3C0A, &H400A, _
        &H440A, &H480A, &H4C0A, 2049
        GetLanguage = "Spanish"
        Case &H40B
        GetLanguage = "Finnish"
        Case &H40C, &H80C, &HC0C, &H100C, 5132
        GetLanguage = "French"
        Case &H40D
        GetLanguage = "Hebrew"
        Case &H40E
        GetLanguage = "Hungarian"
        Case &H40F
        GetLanguage = "Icelandic"
        Case &H410, 2064
        GetLanguage = "Italian"
        Case &H411
        GetLanguage = "Japanese"
        Case &H412, 2066
        GetLanguage = "Korean"
        Case &H413, 2067
        GetLanguage = "Dutch"
        Case &H414, 2068
        GetLanguage = "Norwegian"
        Case &H415
        GetLanguage = "Polish"
        Case &H416, 2070
        GetLanguage = "Portuguese"
        Case &H418
        GetLanguage = "Romanian"
        Case &H419
        GetLanguage = "Russian"
        Case &H41A
        GetLanguage = "Croatian"
        Case &H81A, 3098
        GetLanguage = "Serbian"
        Case &H41B
        GetLanguage = "Slovak"
        Case &H41C
        GetLanguage = "Albanian"
        Case &H41D, 2077
        GetLanguage = "Swedish"
        Case &H41E
        GetLanguage = "Thai"
        Case &H41F
        GetLanguage = "Turkish"
        Case &H421
        GetLanguage = "Indonesian"
        Case &H422
        GetLanguage = "Ukrainian"
        Case &H423
        GetLanguage = "Belarusian"
        Case &H424
        GetLanguage = "Slovenian"
        Case &H425
        GetLanguage = "Estonian"
        Case &H426
        GetLanguage = "Latvian"
        Case &H427
        GetLanguage = "Lithuanian"
        Case &H429
        GetLanguage = "Farsi"
        Case &H42A
        GetLanguage = "Vietnamese"
        Case &H42D
        GetLanguage = "Basque"
        Case &H436
        GetLanguage = "Afrikaans"
        Case &H438
        GetLanguage = "Faeroese"
    End Select
End Function



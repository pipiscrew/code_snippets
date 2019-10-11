        Dim builder As System.Text.StringBuilder = New System.Text.StringBuilder("E116D99A00ECA71B")
        builder.Insert(2, "-", 1)
        builder.Insert(5, "-", 1)
        builder.Insert(8, "-", 1)
        builder.Insert(11, "-", 1)
        builder.Insert(14, "-", 1)
        builder.Insert(17, "-", 1)
        builder.Insert(20, "-", 1)
        'made:
        'E1-16-D9-9A-00-EC-A7-1B
        MsgBox(builder.ToString)
        
        
'example put - per 2chars
            builder = New System.Text.StringBuilder(SNKHEX)
            For i = 2 To 477 Step 3
                builder.Insert(i, "-", 1)
            Next
            
            
002400000480000094
00-24-00-00-04-80-00-00-94
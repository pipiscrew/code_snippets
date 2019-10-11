'-------SQL SYNTAX attached here
'you can view the build-in syntaxs with reflector @ check scrnshot

'from author :
'http://wiki.sharpdevelop.net/Syntax%20highlighting.ashx

'how to add custom syntax @:
'http://www.pksoftware.net/Articles/ICSharpCodeTextEditorSyntaxHighlighting.aspx


        Dim dir As String = "G:\dow\MiniSqlQuery.Source\MiniSqlQuery" 'Path.GetDirectoryName([GetType]().Assembly.Location)
        Dim fsmProvider As New FileSyntaxModeProvider(Dir)
        HighlightingManager.Manager.AddSyntaxModeFileProvider(fsmProvider)
        TextEditorControl1.SetHighlighting("SQL")
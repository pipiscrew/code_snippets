//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/6866-xml-parsing-xmlsax-library.html

Sub Globals
	Dim ListView1 As ListView
	Dim Title, Link, pubDate As String
End Sub

Sub Parser_EndElement (Uri As String, Name As String, Text As StringBuilder)
    If parser.Parents.IndexOf("item") > -1 Then
        If Name = "title" Then
            Title = Text.ToString
        Else If Name = "link" Then
            Link = Text.ToString
        End If
    End If
    If Name = "item" Then
        ListView1.AddSingleLine2(Title, Link) 'add the title as the text and the link as the value
    End If
End Sub


<?xml version="1.0" encoding="ISO-8859-1"?>
<rss version="2.0">
    <channel>
        <title>Basic4ppc  / Basic4android - Android programming</title>
        <link>http://www.basic4ppc.com/forum</link>
        <description>Basic4android - android programming and development</description>
        <ttl>60</ttl>
        <image>
            <url>http://www.basic4ppc.com/forum/images/misc/rss.jpg</url>
            <title>Basic4ppc  / Basic4android - Android programming</title>
            <link>http://www.basic4ppc.com/forum</link>
        </image>
        <item>
            <title>Phone library was updated - V1.10</title>
            <link>http://www.basic4ppc.com/forum/additional-libraries-official-updates/6859-phone-library-updated-v1-10-a.html</link>
            <pubDate>Sun, 12 Dec 2010 09:27:38 GMT</pubDate>
            <guid isPermaLink="true">http://www.basic4ppc.com/forum/additional-libraries-official-updates/6859-phone-library-updated-v1-10-a.html</guid>
        </item>
        ...MORE ITEMS HERE
    </channel>
</rss>
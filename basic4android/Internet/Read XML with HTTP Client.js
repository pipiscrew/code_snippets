'http://www.basic4ppc.com/android/help/randomaccessfile.html#countinginputstream

Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
 Dim hc As HttpClient
 Dim ServerSocket1 As ServerSocket
End Sub

Sub Globals
	'These global variables will be redeclared each time the activity is created.
	'These variables can only be accessed from this module.

End Sub

Sub Activity_Create(FirstTime As Boolean)
Activity.LoadLayout("test")

    If FirstTime Then
        hc.Initialize("hc")
    End If
	

End Sub

Sub hc_ResponseSuccess (Response As HttpResponse, TaskId As Int)
	Msgbox(Response.GetString("UTF8"),"res")
End Sub

'read file from local network
Sub Button1_Click
    Dim req As HttpRequest
    req.InitializeGet("http://10.0.0.185:8080/test.txt")
    hc.Execute(req, 1)
End Sub

'read XML from Internet
Sub Button2_Click
    Dim req As HttpRequest
    req.InitializeGet("http://www.newsbeast.gr/feeds/home") '"http://eortologio.gr/rss/si_el.xml")
    hc.Execute(req, 1)	
End Sub

------------
'http://www.basic4ppc.com/forum/basic4android-updates-questions/15021-wikipedia-api-xml.html
'Scripts should use an informative User-Agent string with contact information, or they may be IP-blocked without notice
Change line 65 in HttpUtilsService to:
Code:
    Else
    req.InitializeGet(link)
    req.SetHeader("User-Agent", "Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522+ (KHTML, like Gecko) Safari/419.3")
End If
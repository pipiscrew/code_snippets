//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/7618-twitter-feed-reader.html#post43332

The code includes 3 modules: Main - the main activity, RSSReader - the service that downloads and parses the feed and SavedTwits code module which is responsible for holding the list of twits, saving it to a file and loading it from a file when needed.

Starting the service is done when the user clicks on the Go button (or presses on the keyboard Done button):

Sub btnGo_Click
    If EditText1.Text.Length = 0 Then
        ToastMessageShow("Please enter your query.", True)
        Return
    End If
    RssReader.Query = EditText1.Text
    RssReader.shouldScheduleNextTask = chkAutomatic.Checked
    StartService(RssReader)    
End Sub
Before starting the service we set two process global variables. The query and whether the user wants to update automatically.

The code in Service_Start is:


Sub Service_Start
    'schedule the next run in 3 minutes
    If shouldScheduleNextTask Then
        StartServiceAt("", DateTime.Now + 3 * DateTime.TicksPerMinute, False)
    End If
    Dim req As HttpRequest
    req.InitializeGet(URL & su.EncodeUrl(Query, "UTF8"))
    HC.Execute(req, 1)
End Sub



First we check if we need to schedule another run in 3 minutes. This will actually cause the task to repeat itself every 3 minutes (as it will reschedule itself each time).
Note that if the device is sleeping our task will wait till it wakes up.
Then we submit the HttpRequest and asynchronously read the stream.

It is very important to understand that at some point the whole process will be killed and then recreated when the time for the next task arrives. 
This means that each time our activity is paused we need to save the current state. Later when the activity is created or the service is created we can use the saved state to start correctly.
A Map object together with File.ReadMap and File.WriteMap make it much easier to save and restore the state. The Map holds pairs of keys and values.

When the activity starts we check if it is the first time it is created. First time means that it is the first time since the containing process has started.



Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        'load previous values if file exists
        If File.Exists(File.DirInternal, "state.txt") Then
            state = File.ReadMap(File.DirInternal, "state.txt")
            Log(state)
        Else
            state.Initialize
        End If
    End If
    Activity.LoadLayout("1")
    'load the previous state or set the defaults if this is the first time.
    'GetDefault returns the stored value or the second parameter if the key was not found.
    EditText1.Text = state.GetDefault("EditText1", "#android")
    chkAutomatic.Checked = state.GetDefault("chkAutomatic", True)
And in Service_Create



Sub Service_Create
    If Query = "" Then
        'no query means that the process was killed.
        'so we load the query from the state file saved by the activity.
        Dim state As Map
        state = File.ReadMap(File.DirInternal, "state.txt")
        Query = state.Get("EditText1")
        Log("Loading query from file.")
    End If
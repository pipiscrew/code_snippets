//REQ OSMDroid - MapView LIB
//http://www.basic4ppc.com/android/help/osmdroid.html#mapview


//sample
http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/16310-osmdroid-mapview-b4a-tutorial.html

Sub Process_Globals
End Sub

Sub Globals
    Dim MapView1 As MapView
End Sub

Sub Activity_Create(FirstTime As Boolean)
    If File.ExternalWritable=False Then
        '    OSMDroid requires the use of external storage to cache tiles
        '    if no external storage is available then the MapView will display no tiles
        Log("WARNING NO EXTERNAL STORAGE AVAILABLE")
    End If
    
    '    no EventName is required as we don't need to listen for MapView events
    MapView1.Initialize("")
    Activity.AddView(MapView1, 0, 0, 100%x, 100%y)
    
    '    by default the map will zoom in on a double tap and also be draggable - no other user interface features are enabled
    
    '    enable the built in zoom controller - the map can now be zoomed in and out
    MapView1.SetZoomEnabled(True)
    
    '    enable the built in multi touch controller - the map can now be 'pinch zoomed'
    MapView1.SetMultiTouchEnabled(True)
    
    '    set the zoom level BEFORE the center (otherwise unpredictable map center may be set)
    MapView1.Zoom=14
    MapView1.SetCenter(52.75192, 0.40505)
End Sub

Sub Activity_Resume
End Sub

Sub Activity_Pause (UserClosed As Boolean)
End Sub
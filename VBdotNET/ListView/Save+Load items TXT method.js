
    Private Sub Form1_FormClosing(ByVal sender As Object, ByVal e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing
        SaveLOG()
    End Sub

    Private Sub SaveLOG()
        Dim i%

        If lstv.Items.Count > 0 Then
            Dim file As System.IO.StreamWriter
            file = My.Computer.FileSystem.OpenTextFileWriter(Application.StartupPath & "\AllinOneWWWservices.log", False)

            For i = 0 To lstv.Items.Count - 1
                file.WriteLine(lstv.Items(i).Text & "|" & lstv.Items(i).SubItems(1).Text & "|" & lstv.Items(i).SubItems(2).Text)
            Next

            file.Close()
        End If
    End Sub

    Private Sub LoadLOG()
        If My.Computer.FileSystem.FileExists(Application.StartupPath & "\AllinOneWWWservices.log") Then
            Dim sr As System.IO.StreamReader = New System.IO.StreamReader(Application.StartupPath & "\AllinOneWWWservices.log")
            Dim tmp$ = ""
            Dim arr() As String

            Do While sr.Peek() >= 0
                arr = Split(sr.ReadLine(), "|")
                If arr.Length = 3 Then Additem(arr(0).ToString, arr(1), arr(2))
            Loop

            sr.Close()
        End If
    End Sub

    Private Sub Form1_Leave(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Leave

    End Sub

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        lstv.Columns.Add("Date", 100)
        lstv.Columns.Add("Filename", 100)
        lstv.Columns.Add("Link", 100)
        LoadLOG()
        'Dim i%

        For i = 1 To 1
            Additem(Today.ToString, "takis" & i, "link" & i)
        Next

        'LoadLOG()
    End Sub

    Private Sub Additem(ByVal strName As String, ByVal rsKEY As String, ByVal strSubitem1 As String)

        'Declare the Listview Items for adding

        'The variable to hold the item in
        Dim oitem As ListViewItem = New ListViewItem()

        'The variable to hold a subitem in
        'Note: You can no longer do Oitem.subitems(x) or oitem.listsubitems(x) to access the items subitems
        Dim osItem As ListViewItem.ListViewSubItem

        oitem.Text = strName


        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = rsKEY
        oitem.SubItems.Add(osItem)

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = strSubitem1
        oitem.SubItems.Add(osItem)

        Me.lstv.Items.Add(oitem)
    End Sub
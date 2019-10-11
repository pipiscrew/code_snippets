//http://www.mindfiresolutions.com/Measure-execution-time-of-a-block-of-code-in-NET-880.php

<asp:Label ID="lblShowTime" runat="server" Text="Label"></asp:Label>

protected void Page_Load(object sender, EventArgs e)

  {

    System.Diagnostics.Stopwatch sWatch = new System.Diagnostics.Stopwatch();

    sWatch.Start();

     System.Threading.Thread.Sleep(400);
    sWatch.Stop();

    lblShowTime.Text = sWatch.ElapsedMilliseconds.ToString();

   }
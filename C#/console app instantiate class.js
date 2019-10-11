//https://stackoverflow.com/a/24180529/1320686

    class Program
    {
        WindowsSession session = new WindowsSession();

        static void Main(string[] args)
        {
            Program p = new Program();
            p.NonStaticMethod();
        }

         internal void NonStaticMethod()
         {
             session.StateChanged += new EventHandler<SessionSwitchEventArgs>(
                   session_StateChanged);
         }


         internal void session_StateChanged(object sender, SessionSwitchEventArgs e)
         {
             // Display the current state.
           string   lbState = string.Format("Current State: {0}    Detect Time: {1} ",
                 e.Reason, DateTime.Now);

             // Record the StateChanged event and add it to the list box.
            string lstRecord = (string.Format("{0}   {1} \tOccurred",
                 DateTime.Now, e.Reason));

            Console.WriteLine(lbState, "*", lstRecord);
         }
    }
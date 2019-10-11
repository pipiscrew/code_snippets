//http://www.marten-online.com/csharp/simple-custom-event-handling.html

  public string Name { get; set; }
  // Delegate
  public delegate void PropertyChangeHandler (object sender,  EventArgs data);
  // The event
  public event PropertyChangeHandler PropertyChange;
  // The method which fires the Event
  protected void OnPropertyChange (object sender,  EventArgs data)
  {
    // Check if there are any Subscribers
    if (PropertyChange!= null)
    {
      // Call the Event
      PropertyChange (this, data);
    }
  }
  
  
/////zero parameters

//the caller
	RenderRoom.ReportCompleted += new B1RenderSite.ReportCompletedHandler(RenderRoom_ReportCompleted);
	
        void RenderRoom_ReportCompleted()
        {
            FinishedProcessing = true;
        }
        
//the worker class
            // Delegate
            public delegate void ReportCompletedHandler();
            // The event
            public event ReportCompletedHandler ReportCompleted;
            
            //in a procedure
                if (ReportCompleted != null)
                    ReportCompleted();
//http://geekswithblogs.net/technetbytes/archive/2008/04/07/121110.aspx

		//microsoft reply to fix the issue of null! (already applied)
		//http://msdn.microsoft.com/en-us/library/ak9w5846(v=vs.80).aspx

//event class
    public class MyEventArgs : EventArgs
    {
        // ... your event args properties and methods here...
        public string Message { get; set; }
        public bool isWarning { get; set; }

        public MyEventArgs(string message, bool iswarning)
        {
            Message = message;
            isWarning = iswarning;
        }

    }
    
//@ interface
    public interface IdbType
    {
            event EventHandler<MyEventArgs> AddMessage;
            
            
//@ class implement interface^

        event EventHandler<MyEventArgs> sendMessage;

        event EventHandler<MyEventArgs> IdbType.AddMessage
        {

            add
            {
                if (sendMessage != null)
                {
                    lock (sendMessage)
                    {
                        sendMessage += value;
                    }
                }
                else
                {
                    sendMessage = new EventHandler<MyEventArgs>(value);
                }
            }
            remove
            {
                if (sendMessage != null)
                {
                    lock (sendMessage)
                    {
                        sendMessage -= value;
                    }
                }
            }
        }
            
            
	//raise event! whenever you like
    if (sendMessage != null)
    	sendMessage(this, new MyEventArgs("lol!", false));
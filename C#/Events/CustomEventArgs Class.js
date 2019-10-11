//http://www.codeproject.com/Articles/27037/Delegates-Events-Event-Arguments-and-How-They-Fit

//our EventArgs class
    public class myCustomEventArgs : EventArgs
    {
        public myCustomEventArgs(bool isEnabled, string bText, int duration)
        {
            _bText = bText;
            _isEnabled = isEnabled;
            _duration = duration;
        }

        public string _bText;
        public bool _isEnabled;
        public int _duration;
    }
    
//event parent class
	//declare
        public delegate void myDelegate(object sender, myCustomEventArgs e);
        public event myDelegate myEvent;
    
    //call
        if (bubble.Paint(g, Position))
            myEvent(new object(), new myCustomEventArgs(true, bubble.Text, bubble._duration));
        else
            myEvent(new object(), new myCustomEventArgs(false, bubble.Text, bubble._duration));
                        

//declare event on child at start
	panelVideo.myEvent += new VideoPanel.myDelegate(FrmParent_myEvent);
	
        void FrmParent_myEvent(object sender, myCustomEventArgs e)
        {
            if (e._isEnabled)
            {
                textBoxBubbleText.Text = e._bText;
                numericUpDown1.Value = e._duration;
               if (buttonAddBubble.Enabled)
                   buttonAddBubble.Enabled = false;
            }
            else
            {
                textBoxBubbleText.Text = "";
                numericUpDown1.Value = 0;
                if (!buttonAddBubble.Enabled)
                buttonAddBubble.Enabled = true;
            }
        }
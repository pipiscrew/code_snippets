private Timer Timer { get; set; }

ctor
                Timer = new Timer();
                Timer.Interval = 55;
                Timer.Tick += new EventHandler(Timer_Tick);
                Timer.Start();
                
                
        void Timer_Tick(object sender, EventArgs e)
        {
            if (CurrentPosition > Width)
                CurrentPosition = -Width;
            else
                CurrentPosition += 2;
                
          //  Invalidate();
        }
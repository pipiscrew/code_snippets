        private static Point pnt;
        int tick;
        
        
        private void button1_Click(object sender, EventArgs e)
        {
            pnt = base.Location;
            tick = Environment.TickCount + 500;
            timer1.Enabled = true;

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (tick > 0)
            {
                if (tick - Environment.TickCount > 0)
                {
                    Point point = pnt;
                    point.X += (((Environment.TickCount / timer1.Interval) % 2) * 6) - 3;

                    point.Y += (((Environment.TickCount / (timer1.Interval * 2)) % 2) * 2) - 1;
                    base.Location = point;
                }
            }
        }
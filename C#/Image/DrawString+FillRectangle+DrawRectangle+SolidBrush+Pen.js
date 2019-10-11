internal PrivateFontCollection MF = new PrivateFontCollection();
string app;
string creator;
string date;

//always on paint event othrewise if app minimized will loose what we wrote
private void pictureBox1_Paint(object sender, PaintEventArgs e)
{
    SolidBrush myBrush = new SolidBrush(Color.FromArgb(89, 89, 89));
    //here we draw with custom ttf from resources (the code not included)
    e.Graphics.DrawString(app, new Font(MF.Families[0], 14f, FontStyle.Regular), myBrush, new Point(152, 5));
    e.Graphics.DrawString(creator, new Font(MF.Families[0], 14f, FontStyle.Regular), myBrush, new Point(200, 35));
    e.Graphics.DrawString(date, new Font(MF.Families[0], 14f, FontStyle.Regular), myBrush, new Point(200, 45));
    //simple way
    //using (Font myFont = new Font("Calibri", 9))
    //{
    //    e.Graphics.DrawString("veteran", myFont, Brushes.Red, new Point(2, 2));
    //}
}


//if we want to draw not to paint event 
//the only way is to do it in a Timer 

	int frame = 0;
	bool status = false;
	private void timer1_Tick(object sender, EventArgs e)
	{
	    frame++; 
	    if(frame % 2 == 0) 
	    {
	        //red - error
	        if (status)
	        {
	            pictureBox1.CreateGraphics().DrawString("patch success", new Font(MF.Families[0], 13f, FontStyle.Regular), new SolidBrush(Color.FromArgb(34, 136, 47)), new Point(160, 83));
	        }
	        else
	        {
	            pictureBox1.CreateGraphics().DrawString("patch failed", new Font(MF.Families[0], 13f, FontStyle.Regular), new SolidBrush(Color.FromArgb(189, 16, 0)), new Point(168, 80));                      
	        }
	        //green - SUCCESS
	
	        timer1.Interval = 400;
	    }
	    else
	    {
	        if (status)
	        {
	            Rectangle r = new Rectangle(160, 85, 120, 14);
	            pictureBox1.CreateGraphics().FillRectangle(new SolidBrush(Color.FromArgb(35, 35, 35)), r);
	            //pictureBox1.CreateGraphics().DrawRectangle(new Pen(Color.Red), r);
	        }
	        else
	        {
	            Rectangle r = new Rectangle(168, 85, 105, 10);
	            //pictureBox1.CreateGraphics().DrawRectangle(new Pen(Color.Red), r);
	            pictureBox1.CreateGraphics().FillRectangle(new SolidBrush(Color.FromArgb(35, 35, 35)), r);
	        }
	
	    }
	}
	}
        private void DrawTreeview(string message)
        {
            Rectangle r = new Rectangle(0, 0, tr.Width , 14);
            tr.CreateGraphics().FillRectangle(new SolidBrush(Color.FromArgb(35, 35, 35)), r);

            tr.CreateGraphics().DrawString(message, new Font("Segoe UI", 8,FontStyle.Bold ), new SolidBrush(Color.Red ), new Point(70, 0));
        }
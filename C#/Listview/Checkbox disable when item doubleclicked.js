//http://stackoverflow.com/questions/3897071/winforms-listview-stop-automatically-checking-when-double-clicking
        private void lstv_ItemCheck(object sender, ItemCheckEventArgs e)
        {
            int i = ((ListView)sender).PointToClient(Cursor.Position).X;
            if (i > 22)
            {
                e.NewValue = e.CurrentValue;
            }
        }
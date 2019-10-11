//http://stackoverflow.com/questions/4810458/catching-focus-out-event-of-a-datagrid

//form load
dgBatt.LostFocus += new EventHandler(dgBatt_LostFocus);


        public void dgBatt_LostFocus(object sender,System.EventArgs e)
        {
            UpdateGrid(dgBatt);
        }
//datagrid bind
                //http://stackoverflow.com/questions/5398441/how-to-set-the-datasource-of-a-datagrid-in-wpf
                dg.SetBinding(ItemsControl.ItemsSourceProperty, new Binding { Source = XLSheets.Tables[0] });
        //where XLSheets.Tables[0] is our Datatable
        /the DG.AutoGenerateColumns must be TRUE!

//datagrid loop through columns
                foreach (DataGridColumn dC in dg.Columns)
                {
                    dC.Header = XLSheets.Tables[0].Rows[0][dC.DisplayIndex].ToString();
                }

//http://www.componentfactory.com/forums/viewtopic.php?f=3&t=3219&p=12614&hilit=datagridview#p12614

Thanks JoostS for the tip.
However, using those overrides, I was only able to emulate the behaviour of the datagridview property EditMode = DataGridViewEditMode.EditOnEnter, which saves 1 click.
My second approach was triggering the CellClick event and programmatically drop down the combobox:
CODE: SELECT ALL
        private void dataGrid_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            KryptonDataGridViewComboBoxEditingControl kryptonComboboxEdit = dataGrid.EditingControl as KryptonDataGridViewComboBoxEditingControl;
            if (kryptonComboboxEdit != null)
                kryptonComboboxEdit.DroppedDown = true;
        }

So, now my comboboxes are dropped down on first cell click.

-OR-
My third approach was handling the CellMouseEnter event:
CODE: SELECT ALL
        private void dataGrid_CellMouseEnter(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex > -1 && e.ColumnIndex > -1 &&
                e.RowIndex < dataGrid.RowCount && e.ColumnIndex < dataGrid.ColumnCount)
            {
                dataGrid.CurrentCell = dataGrid.Rows[e.RowIndex].Cells[e.ColumnIndex];
                dataGrid.BeginEdit(true);
            }
        }

This way, the comboboxes are enabled when the mouse pointer enters the cell.

The perfect scenario would be a property that enables comboboxes to be drawn even in un-selected cells, but these approaches work quite good!
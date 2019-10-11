//http://stackoverflow.com/questions/9351462/how-to-get-controls-from-tabpage-in-c

        private String getCurrentTSQL()
        {
           var rtb = tabEdit.SelectedTab.Controls.Cast<Control>()
                                .FirstOrDefault(x => x is TextEditorControl);

            return rtb.Text;
        }

        private void setCurrentTSQL(string val)
        {
            var rtb = tabEdit.SelectedTab.Controls.Cast<Control>()
                                          .FirstOrDefault(x => x is TextEditorControl);

            rtb.Text = val;
        }
        
        
        
        
        
        
        
//loop through
          for (int i = 0; i < tabControl1.TabCount; i++)
            {
                foreach (Control control in tabControl1.TabPages[i].Controls)
                {
                    if (control.GetType() == typeof(TextBox))
                        totalInputs[i, 0] = control.Text;
                    if (control.GetType() == typeof(ComboBox))
                        totalInputs[i, 1] = control.Text;
                }
            }
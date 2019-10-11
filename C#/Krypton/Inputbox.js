            string tmp =  ComponentFactory.Krypton.Toolkit.KryptonInputBox.Show("before : " + listV2.SelectedItems[0].Text, "Field [" + listV2.SelectedItems[0].Text + "] in XLS, column will named", listV2.SelectedItems[0].Text);

            if (tmp.Trim().Length > 0)
                listV2.SelectedItems[0].Text=tmp;

multiselect = false

        private void textBox2_KeyPress(object sender, KeyPressEventArgs e)
        {
            if ((lstv3.Items.Count > 0) && (e.KeyChar == 13) && (textBox2.Text.Length > 0))
            {
                e.Handled = true;

                int prevIndex = 0;
                if (lstv3.SelectedItems.Count > 0 && lstv3.SelectedItems[0].Text.ToLower().Contains(textBox2.Text.ToLower()))
                    prevIndex = lstv3.SelectedItems[0].Index +1;

                for (int i = prevIndex; i < lstv3.Items.Count; i++)
                {
                  if (lstv3.Items[i].Text.ToLower().Contains(textBox2.Text.ToLower()))
                  {
                      lstv3.Items[i].Selected = true;
                      lstv3.Items[i].EnsureVisible();
                      break;
                  }
                }
              }
        }
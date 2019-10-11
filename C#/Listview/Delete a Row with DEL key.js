        private void listV2_KeyDown(object sender, KeyEventArgs e)
        {
            if (listV2.SelectedItems.Count == 0)
                return;

            if (e.KeyCode == Keys.Delete)
            {
                int prevNIDX = listV2.SelectedItems[0].Index;

                listV2.SelectedItems[0].Remove();

                if ((prevNIDX > 0 ) &&  (listV2.Items.Count >0 ))
                    listV2.Items[prevNIDX-1].Selected = true;
                else if (listV2.Items.Count >0)
                    listV2.Items[prevNIDX].Selected = true;

            }
        } 
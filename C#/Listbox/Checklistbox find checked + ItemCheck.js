        bool dontUpdate = false;
        private void lstFramework_ItemCheck(object sender, ItemCheckEventArgs e)
        {
            if (dontUpdate)
                return;

            CheckedListBox.CheckedItemCollection checkedOnly = lstFramework.CheckedItems;

            dontUpdate = true;
            foreach (int indexChecked in lstFramework.CheckedIndices)
               lstFramework.SetItemCheckState(indexChecked,System.Windows.Forms.CheckState.Unchecked);

            dontUpdate = false;
            
        }
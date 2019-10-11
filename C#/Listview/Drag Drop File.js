to property ALLOWDROP = TRUE


        #region " LSTV DRAG and DROP "

        private void lstv_DragEnter(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                e.Effect = DragDropEffects.Move | DragDropEffects.Copy | DragDropEffects.Scroll;
            }
        }

        private void lstv_DragDrop(object sender, DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                string[] data = (string[])e.Data.GetData(DataFormats.FileDrop);

                for (int i = 0; i < data.Length; i++)
                {
                    MessageBox.Show(data[i]);
                }
             }
        }
        
		#endregion
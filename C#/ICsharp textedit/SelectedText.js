            if (e.KeyCode == Keys.F5)
            {
                if (txtSQL.ActiveTextAreaControl.SelectionManager.HasSomethingSelected)
                {
                    string selection = this.txtSQL.ActiveTextAreaControl.
                                                       SelectionManager.SelectedText;

                    runSQL(selection);
                }
                else
                    runSQL(txtSQL.Text);
            }
            
            
//http://www.codeproject.com/Articles/26422/Peter-Programmers-Extensive-Text-Editor
        /// <summary>
        /// This will show you how to get the selected text, and insert text...
        /// </summary>
        public void Duplicate()
        {
            if (this.m_Editor.ActiveTextAreaControl.SelectionManager.HasSomethingSelected)
            {
                string selection = this.m_Editor.ActiveTextAreaControl.
                                                   SelectionManager.SelectedText;
                int pos = this.m_Editor.ActiveTextAreaControl.
                               SelectionManager.SelectionCollection[0].EndOffset;
                this.m_Editor.Document.Insert(pos, selection);

                this.m_Editor.ActiveTextAreaControl.TextArea.Invalidate();
            }
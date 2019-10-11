//http://www.codeproject.com/Articles/26422/Peter-Programmers-Extensive-Text-Editor

        /// <summary>
        /// Scroll to a particular offset in the document...
        /// </summary>
        public void ScrollTo(int offset)
        {
            if (offset > this.m_Editor.Document.TextLength)
            {
                return;
            }
            int line = this.m_Editor.Document.GetLineNumberForOffset(offset);
            this.m_Editor.ActiveTextAreaControl.Caret.Position = 
                        this.m_Editor.Document.OffsetToPosition(offset);
            this.m_Editor.ActiveTextAreaControl.ScrollTo(line);//.CenterViewOn(line, 0);
        }
        
        
        
        public void Scroll2END()
        {
            int offset = this.txtSQL.Document.TextLength;
            //if (offset > this.txtSQL.Document.TextLength)
            //{
            //    return;
            //}
            int line = this.txtSQL.Document.GetLineNumberForOffset(offset);
            this.txtSQL.ActiveTextAreaControl.Caret.Position =
                        this.txtSQL.Document.OffsetToPosition(offset);
            this.txtSQL.ActiveTextAreaControl.ScrollTo(line);//.CenterViewOn(line, 0);
        }
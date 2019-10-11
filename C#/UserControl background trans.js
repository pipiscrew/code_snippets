//http://www.bobpowell.net/transcontrols.htm
//http://msdn.microsoft.com/en-us/library/wk5b13s4(v=VS.100).aspx
//http://www.track7.org/hb/thread107/
@ usercontrol code

        protected override CreateParams CreateParams
        {
            get
            {
                const int WS_EX_TRANSPARENT = 0x20;
                CreateParams cp = base.CreateParams;
                cp.ExStyle |= WS_EX_TRANSPARENT;
                return cp;
            }
        }

        //protected override System.Windows.Forms.CreateParams CreateParams
        //{
        //    get
        //    {
        //        CreateParams cp = base.CreateParams;
        //        cp.ExStyle = 0x20;
        //        return cp;
        //    }
        //}

        protected override void OnPaintBackground(System.Windows.Forms.PaintEventArgs e)
        {
            //do nothing here
        }

        public override void Refresh()
        {
            Parent.Invalidate(new Rectangle(this.Location, this.Size), true);
        }

        public EnglishNewsBar()
        {

            SetStyle(ControlStyles.SupportsTransparentBackColor, true);
            this.BackColor = Color.Transparent;
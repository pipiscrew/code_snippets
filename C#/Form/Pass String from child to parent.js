on main form:
        static string prevSearch="";
        protected override void MenFind_Click(object sender, EventArgs e)
        {
            string val=null;

            frmInputbox tmp = new frmInputbox();

            tmp.ShowDialog(out val);
            tmp.Dispose();
        }



on 2nd form
        public DialogResult ShowDialog(out string result)
        {
            DialogResult dialogResult = base.ShowDialog();

            result = textBox1.Text;
            return dialogResult;
        }
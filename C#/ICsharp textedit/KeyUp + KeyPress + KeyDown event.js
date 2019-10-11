        public MainForm()
        {
            InitializeComponent();


            this.txtSQL.ActiveTextAreaControl.TextArea.KeyUp += new KeyEventHandler(this.txtSQL_KeyUp);
            
            
        private void txtSQL_KeyUp(object sender, KeyEventArgs e)
        {
            if ((((e.KeyCode == Keys.Tab) || (e.KeyCode == Keys.Delete)) || ((e.KeyCode == Keys.Back) || (e.KeyCode == Keys.Return))) && (this.Text.IndexOf("*") <= 0))
            {
                this.Text = this.Text + "*";
            }
        }
        
//
    public partial class MainForm : Form
    {
        public MainForm()
        {
            //
            // The InitializeComponent() call is required for Windows Forms designer support.
            //
            InitializeComponent();
            
            this.textEditorControl1.ActiveTextAreaControl.TextArea.KeyDown += new KeyEventHandler(this.TextEditor_KeyDown);
            this.textEditorControl1.ActiveTextAreaControl.TextArea.KeyUp += new KeyEventHandler(this.TextEditor_KeyUp);
            this.textEditorControl1.ActiveTextAreaControl.TextArea.KeyPress += new KeyPressEventHandler(this.TextEditor_KeyPress);
        }
        
        private void TextEditor_KeyDown(object sender, KeyEventArgs e)
        {
            System.Diagnostics.Debug.Print("KeyDown: " + e.KeyData.ToString());
        }
        
        private void TextEditor_KeyUp(object sender, KeyEventArgs e)
        {
            System.Diagnostics.Debug.Print("KeyDown: " + e.Modifiers.ToString());
        }
        
        private void TextEditor_KeyPress(object sender, KeyPressEventArgs e)
        {
            System.Diagnostics.Debug.Print("KeyDown: " + e.KeyChar.ToString());
        }
    } 
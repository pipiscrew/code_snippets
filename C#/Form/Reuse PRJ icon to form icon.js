//http://stackoverflow.com/questions/596837/avoiding-duplicate-icon-resources-in-a-net-c-project

//we add a 32x32 icon to PROJECT Properties then on any form

        public Form1()
        {
            InitializeComponent();

            this.Text = Application.ProductName + " v" + Application.ProductVersion;
            this.Icon = Icon.ExtractAssociatedIcon(Application.ExecutablePath);
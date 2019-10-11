//http://msdn.microsoft.com/en-us/library/ms743695(v=vs.85).aspx
//http://msdn.microsoft.com/en-us/library/system.windows.forms.binding.bindingcomplete.aspx
//http://stackoverflow.com/questions/8721581/winforms-databinding-vs-propertychanged-event-ordering-issue

public partial class Form1 : Form
    {
        BindingSource test = new BindingSource();
        Customer cst = new Customer();

        public Form1()
        {
            InitializeComponent();

            test.DataSource = cst;
            textBox1.DataBindings.Add(new Binding("Text", test, "Takis", true, DataSourceUpdateMode.OnPropertyChanged));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //set property to class
            //automatically appear at binding to textbox
            cst.FName = "takis";
        }

        private void button2_Click(object sender, EventArgs e)
        {
            //ask class for current property value
            MessageBox.Show(cst.FName);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            //textBox1.DataBindings.Clear();
            //test.ResetBindings(false);
 
            //init binding + init class local variable
            cst = (Customer) test.AddNew() ;
        }

    }
    
    
//class
    class Customer : INotifyPropertyChanged
    {
        // Declare the event
        public event PropertyChangedEventHandler PropertyChanged;

        private string fname;
    

        public string FName
        {
          get { return fname; }
          set { 
              fname = value;
              OnPropertyChanged("Takis");
          }
        }

        // Create the OnPropertyChanged method to raise the event
        protected void OnPropertyChanged(string name)
        {
            PropertyChangedEventHandler handler = PropertyChanged;
            if (handler != null)
            {
                handler(this, new PropertyChangedEventArgs(name));
            }
        }

    }
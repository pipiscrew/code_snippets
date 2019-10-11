//http://stackoverflow.com/questions/801070/dynamically-invoking-any-function-by-passing-function-name-as-string
//http://msdn.microsoft.com/en-us/library/8zz808e6.aspx#Y1140
//special http://www.java2s.com/Code/CSharp/Development-Class/Invokemethodsusingreflection.htm 
        public Form1()
        {
            InitializeComponent();
        }

            public void MethodA() 
            {
                MessageBox.Show("gh");
            }

        private void button1_Click(object sender, EventArgs e)
        {
            MethodInfo mInfo = typeof(Form1).GetMethod("MethodA");
            mInfo.Invoke(this,null);
            Console.WriteLine("Found method: {0}", mInfo);
        }
        
#OR

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //form2 call
            Invoke("WindowsFormsApplication1.Form2", "MethodB");

        }

        public void Invoke(string typeName, string methodName)
        {
            Type type = Type.GetType(typeName);
            object instance = Activator.CreateInstance(type);
            MethodInfo method = type.GetMethod(methodName);
            method.Invoke(instance, null);
        }
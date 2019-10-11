//https://github.com/cefsharp/CefSharp/wiki/Frequently-asked-questions#CallJS

        //the browser
        private readonly WebView web_view;

        public Form1()
        {
            InitializeComponent();

            web_view = new WebView("http://y.com/", new BrowserSettings());
        }

        private void button1_Click(object sender, EventArgs e)
        {
            web_view.ExecuteScript("document.getElementById('email').value=" + '\'' + "takis" + '\'');
            web_view.ExecuteScript("alert('test');");
        }
        
        
//ex2
browser.ExecuteScriptAsync("document.getElementById('Email').value=" + '\'' + txtEmail.Text + '\'');   
browser.ExecuteScriptAsync("document.getElementById('Passwd').value=" + '\'' + txtPassword.Text + '\'');     
browser.ExecuteScriptAsync("document.getElementById('signIn').click()");


//ex3
web_view.ExecuteScript("document.getElementById('email').value=" + '\'' + General.login_name + '\'');
web_view.ExecuteScript("document.getElementById('pass').value=" + '\'' + General.login_password + '\'');
web_view.ExecuteScript("document.getElementById('login_form').submit();");
//web_view.ExecuteScript("document.getElementsByName('login').click()");
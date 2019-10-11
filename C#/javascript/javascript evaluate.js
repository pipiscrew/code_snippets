//http://www.pipiscrew.com/2015/07/net-js-evaluate/

using System;
using System.Web.Script.Serialization; //System.Web.Extensions.dll
using System.Windows.Forms;
using Microsoft.JScript; //Microsoft.JScript.dll

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            for (int i = 0; i < 5; i++)
            {
                listBox1.Items.Add(i);
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                string script = @"function xor_str(str) {
                                        var xor_key= 2;
	                                    var the_res='';
                                        var i;

	                                    for(i=0;i<str.length;++i)
	                                    {
		                                    the_res+=String.fromCharCode(xor_key^str.charCodeAt(i));
	                                    }

	                                    return the_res;
                                    };";  //xor function in JS w/ XOR_KEY=2

                    script += "var q = " + ToJSON(listBox1.Items) + ";"; //convert 'c# listbox' items to json and store it to 'q javascript variable'

                    script += @"
                                var return_a = xor_str(""pipiscrew"");
                                var return_b = xor_str(q.toString()); //convert JS json object to string

                                var arr = new Array(); //instantiate a JS array
                                arr.push(return_a);    //add item 0
                                arr.push(return_b);    //add item 1

                                arr;                   //plain as is - outputs the variable to 'C# Result'
                                "; //body main code

                Object Result = Microsoft.JScript.Eval.JScriptEvaluate(script, Microsoft.JScript.Vsa.VsaEngine.CreateEngine());

                if (Result.GetType().Name == "ConcatString" || Result.GetType().Name == "String")
                {
                    MessageBox.Show(Result.ToString());
                }
                else if (Result.GetType().Name == "ArrayObject")
                {
                    ArrayObject obj = Result as ArrayObject;

                    for (int i = 0; i < int.Parse(obj.length.ToString()); i++)
                    {
                        Console.WriteLine(obj[i]);

                    }
                }
                else
                {
                    MessageBox.Show("Type is "  + Result.GetType().Name);
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + ex.StackTrace);
            }
        }

        public string ToJSON(object obj)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            return serializer.Serialize(obj);
        }
    }
}

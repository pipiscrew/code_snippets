//http://stackoverflow.com/a/11958472/1320686

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Win32;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //Open the HKEY_CLASSES_ROOT\CLSID which contains the list of all registered COM files (.ocx,.dll, .ax) 
            //on the system no matters if is 32 or 64 bits.
            RegistryKey t_clsidKey = Registry.ClassesRoot.OpenSubKey("CLSID");

            //Get all the sub keys it contains, wich are the generated GUID of each COM.

            foreach (object subKey_loopVariable in t_clsidKey.GetSubKeyNames().ToList())
            {
                object subKey = subKey_loopVariable; // "{0A34DCB1-F738-4503-9924-B5EECE5594BC}"; // subKey_loopVariable;

                //For each CLSID\GUID key we get the InProcServer32 sub-key .
                RegistryKey InProcServer32 = Registry.ClassesRoot.OpenSubKey("CLSID\\" + subKey.ToString() + "\\InProcServer32");
                RegistryKey TypeLib = Registry.ClassesRoot.OpenSubKey("CLSID\\" + subKey.ToString() + "\\TypeLib");
                RegistryKey Control = Registry.ClassesRoot.OpenSubKey("CLSID\\" + subKey.ToString() + "\\Control");
                RegistryKey root_default = Registry.ClassesRoot.OpenSubKey("CLSID\\" + subKey.ToString());

                if (InProcServer32 != null && TypeLib != null && Control != null && root_default != null)
                {
                    //using #GetValue(null)# and #GetValueKind(null)# is the key 'default' value
                    if (InProcServer32.GetValue(null) != null && TypeLib.GetValue(null) != null && Control.GetValue(null) != null && root_default.GetValue(null) != null)
                    {
                        if (InProcServer32.GetValueKind(null) == RegistryValueKind.Binary && TypeLib.GetValueKind(null) == RegistryValueKind.Binary && Control.GetValueKind(null) == RegistryValueKind.Binary && root_default.GetValueKind(null) == RegistryValueKind.Binary)
                        {
                            textBox1.Text += subKey.ToString() + "\r\n";
                        }
                    }
                }

                //if ((t_clsidSubKey != null)) {
                //    //in the case InProcServer32 exist we get the default value wich contains the path of the COM file.
                //    string t_valueName = (from value in t_clsidSubKey.GetValueNames()where string.IsNullOrEmpty(value))(0).ToString;

                //    //Now gets the value.
                //    string t_value = t_clsidSubKey.GetValue(t_valueName).ToString;


                //    //And finaly if the value ends with the name of the dll (include .dll) we return it

                //    if (t_value.EndsWith(dllName)) {
                //        return t_value;

                //    }

                //}

            }

            label1.Visible = true;
        }
    }
}

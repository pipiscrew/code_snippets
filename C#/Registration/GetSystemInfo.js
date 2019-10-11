//form
        private void button1_Click(object sender, EventArgs e)
        {
            Console.WriteLine(GClass44.smethod_3());

        }

//class
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WindowsFormsApplication23
{
    public sealed class GClass44
    {
        // Methods
        private static byte[] smethod_0()
        {
            try
            {
                string str = "SELECT ProcessorId FROM Win32_Processor";
                Class30 class2 = new Class30(str);
                return class2.method_2("ProcessorId");
            }
            catch
            {
                return null;
            }
        }

        private static byte[] smethod_1()
        {
            try
            {
                string str = "SELECT SerialNumber FROM Win32_BaseBoard";
                Class30 class2 = new Class30(str);
                return class2.method_2("SerialNumber");
            }
            catch
            {
                return null;
            }
        }

        public static byte[] smethod_2()
        {
            byte[] buffer = smethod_0();
            byte[] buffer2 = smethod_1();
            if ((buffer == null) || (buffer2 == null))
            {
                return null;
            }
            byte[] buffer3 = new byte[buffer.Length];
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer3[i] = (byte)(buffer[i] ^ buffer2[i]);
            }
            return buffer3;
        }

        public static string smethod_3()
        {
            try
            {
                byte[] buffer = smethod_2();
                if (buffer != null)
                {
                    StringBuilder builder = new StringBuilder();
                    foreach (byte num in buffer)
                    {
                        builder.Append(string.Format("{0:X2}", num));
                    }
                    return builder.ToString();
                }
            }
            catch
            {
            }
            return string.Empty;
        }
    }
}


//class
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Management;
using System.Security.Cryptography;

namespace WindowsFormsApplication23
{
    internal sealed class Class30 : ManagementObjectSearcher
    {
        // Methods
        public Class30(string string_0)            : base(string_0)
        {
        }

        public ManagementObjectCollection method_0()
        {
            return base.Get();
        }

        public string method_1(string string_0)
        {
            string propertyValue = string.Empty;
            foreach (ManagementObject obj2 in this.method_0())
            {
                propertyValue = (string)obj2.GetPropertyValue(string_0);
            }
            return propertyValue;
        }

        public byte[] method_2(string string_0)
        {
            return MD5.Create().ComputeHash(Encoding.UTF8.GetBytes(this.method_1(string_0)));
        }
    }

 

}

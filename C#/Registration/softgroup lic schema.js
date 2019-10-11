//https://www.board4all.biz/threads/softgroup-net-keygen-for-all-products-c-source.623733/
//for new versions to get a valid serial - replace the version to aProdcuts
using System;
using System.Security.Cryptography;
using System.Text;
using System.Windows.Forms;


        private void Generate()
        {
            string LicenseName = "admin";
            string LicenseUser = "email@host.com";

            string[] aProducts = {".Net Controls Suite 7.0.0.0" ,
                                  ".Net BarCode Control 2.0.0.0" ,
                                  ".Net Calendar Control 3.0.0.0" ,
                                  ".Net Compiler Project 3.0.0.0" ,
                                  ".Net Data Objects 5.0.0.0" ,
                                  ".Net Error Object 3.0.0.0" ,
                                  ".Net Excel Xml 2.0.0.0" ,
                                  ".Net Forms Resize 8.0.0.0" ,
                                  ".Net Gantt Control 3.0.0.0" ,
                                  ".Net Multimedia Control 4.0.0.0" ,
                                  ".Net Olap Control 3.0.0.0"};

            string LettersAndDigits = "ABCDEFGHIJKLMNOPQRSTUVWYZ0123456789";
            string CSharpCode = "SoftGroup.Net Registration Utility \"ProductRegister.exe\" may be used to register \r\n" +
                                "and activate all products on a developer machine. Before deploying an application \r\n" + 
                                "remember to embed the license data directly into the sourcecode:\r\n\r\n";

            foreach (string ProductName in aProducts)
            {
                MD5CryptoServiceProvider provider = new MD5CryptoServiceProvider();
                UnicodeEncoding encoding = new UnicodeEncoding();

                string LicenseKey = "Softgroup s.r.l." + ProductName + LicenseName + LicenseUser;

                int index = 0;
                byte[] bytes = encoding.GetBytes(LicenseKey);
                LicenseKey = Convert.ToBase64String(provider.ComputeHash(bytes)).ToUpper();
                if (LicenseKey.Length > 0x13)
                {
                    LicenseKey = LicenseKey.Substring(0, 0x13);
                }
                else if (LicenseKey.Length < 0x13)
                {
                    bytes = new byte[((0x13 - LicenseKey.Length) - 1) + 1];
                    int upperBound = bytes.GetUpperBound(0);
                    for (index = bytes.GetLowerBound(0); index <= upperBound; index++)
                    {
                        bytes[index] = 0x58;
                    }
                    LicenseKey = LicenseKey + Encoding.ASCII.GetString(bytes);
                }
                int length = LicenseKey.Length;
                for (index = 1; index <= length; index++)
                {
                    if (!LettersAndDigits.Contains(LicenseKey.Substring(index - 1, 1)))
                        LicenseKey = LicenseKey.Replace(LicenseKey.Substring(index - 1, 1), "X");
                }

                LicenseKey = LicenseKey.Insert(2, LettersAndDigits.Substring(0, 1)).Insert(6, LettersAndDigits.Substring(DateTime.Now.Day - 1, 1)).Insert(10, LettersAndDigits.Substring(DateTime.Now.Month - 1, 1));

                string strYearRemainder = (DateTime.Now.Year % 100).ToString();
                if (strYearRemainder.Length == 1) strYearRemainder = "0" + strYearRemainder;

                LicenseKey = LicenseKey.Insert(14, LettersAndDigits.Substring((int)Math.Round(Convert.ToDouble(strYearRemainder.Substring(0, 1))), 1)).Insert(0x12, LettersAndDigits.Substring((int)Math.Round(Convert.ToDouble(strYearRemainder.Substring(1, 1))), 1));

                int startind, num, num2, num3, num4;
                startind = num = num3 = num4 = 0;
                num2 = 3;

                for (num4 = LicenseKey.Length; num4 >= 1; num4 += -1)
                {
                    num3 += ((int)LicenseKey[num4 - 1]) * num2;
                    num2 = 4 - num2;
                }
                num = num3 % 10;
                if (num != 0) startind = 10 - num;

                LicenseKey = LicenseKey.Insert(0x18, LettersAndDigits.Substring(startind, 1));

                string currCode = "private void Form1_Load(object sender, EventArgs e)" + "\r\n" +
                                "{" + "  // " + ProductName + "\r\n" +
                                "   License.LicenseName = \"" + LicenseName + "\";\r\n" +
                                "   License.LicenseUser = \"" + LicenseUser + "\";\r\n" +
                                "   License.LicenseKey  = \"" + LicenseKey + "\";\r\n" +
                                "}\r\n";
                                
                CSharpCode = CSharpCode + "\r\n\r\n" + currCode;
            }

            Clipboard.SetText(CSharpCode);
            MessageBox.Show("LicenseKeys copied to clipboard !", "SoftGroup .NET Keygen", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        

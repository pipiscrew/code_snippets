
//usage
var watch = System.Diagnostics.Stopwatch.StartNew();

if (checkVM())
    MessageBox.Show("ur in VM");

watch.Stop();
var elapsedMs = watch.ElapsedMilliseconds;
textBox1.Text = (elapsedMs.ToString());
            

        //text = BaseBoard_Manufacturer];
        //text2 = BaseBoard_Product];
        //text3 = ComputerSystem_Manufacturer];
        //text4 = ComputerSystem_Model];
        private static bool  checkVM(){
            System.StringComparison comparisonType = System.StringComparison.InvariantCultureIgnoreCase;

            string [] bbord =  RunQuery0("BaseBoard", "Product");
            string [] csp =  RunQuery0("ComputerSystem", "Model");
            string text, text2, text3, text4 = null;

            text = bbord[1];
            text2 = bbord[0];
            text3 = csp[1];
            text4 = csp[0];
            
            return (text2 != null && text2.IndexOf("Parallels Virtual Platform", comparisonType) > -1) || (text4 != null && text4.IndexOf("Parallels Virtual Platform", comparisonType) > -1) || (((text != null && text.IndexOf("Microsoft Corporation", comparisonType) > -1) || (text3 != null && text3.IndexOf("Microsoft Corporation", comparisonType) > -1)) && ((text2 != null && text2.IndexOf("Virtual Machine", comparisonType) > -1) || (text4 != null && text4.IndexOf("Virtual Machine", comparisonType) > -1))) || ((text2 != null && text2.IndexOf("VirtualBox", comparisonType) > -1) || (text4 != null && text4.IndexOf("VirtualBox", comparisonType) > -1)) || ((text3 != null && text3.IndexOf("VMware", comparisonType) > -1) || (text4 != null && text4.IndexOf("VMware Virtual Platform", comparisonType) > -1));

        }
        private static string[] RunQuery0(string tableName, string field1)
        {
            string fl1 = null;
            string fl2 = null;
            try
            {
                ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT " + field1 + ",Manufacturer FROM Win32_" + tableName);
                ManagementObject managementObject = searcher.Get().Cast<ManagementObject>().FirstOrDefault();


                if (managementObject != null)
                {
                    if (managementObject[field1] != null)
                        fl1 = managementObject[field1].ToString();

                    if (managementObject["Manufacturer"] != null)
                        fl2 = managementObject["Manufacturer"].ToString();
                }

              
            }
            catch            {            }

            return new string[] { fl1, fl2 };
        }
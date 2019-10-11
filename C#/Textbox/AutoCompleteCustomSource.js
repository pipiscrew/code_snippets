//http://www.codeproject.com/Articles/243368/AutoComplete-Textbox

            if (File.Exists(Application.StartupPath + "\\nodes.txt"))
            {
                string tmp = File.ReadAllText(Application.StartupPath + "\\nodes.txt");
                string[] tmpArr = tmp.Split('\n');

                AutoCompleteStringCollection tmpSource = new AutoCompleteStringCollection();
                tmpSource.AddRange(tmpArr);

                textBox1.AutoCompleteCustomSource = tmpSource;

                textBox1.AutoCompleteMode = AutoCompleteMode.SuggestAppend;

                textBox1.AutoCompleteSource = AutoCompleteSource.CustomSource;

            }
//http://www.csharp-examples.net/string-format-datetime/

Date Variable.ToString("yyyy/MM/dd")

//OR

String.Format("{0:M/d/yyyy}", dt);            // "3/9/2008"
String.Format("{0:MM/dd/yyyy}", dt);          // "03/09/2008"

//get the dayname
dTRunning.ToString("dddd");


 File.WriteAllText(Application.StartupPath + "\\" + DateTime.Now.ToString("yyyy-MM-dd HHmmss") + Path.GetFileName(txtFirebase.Text) , sb.ToString());
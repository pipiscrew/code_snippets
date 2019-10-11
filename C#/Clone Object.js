//http://bytes.com/topic/c-sharp/answers/606031-how-clone-control

        private object CloneObject(object o)
        {
            Type t = o.GetType();
            PropertyInfo[] properties = t.GetProperties();

            Object p = t.InvokeMember("", System.Reflection.BindingFlags.CreateInstance, null, o, null);

            foreach (PropertyInfo pi in properties)
            {
                if (pi.CanWrite)
                {
                    pi.SetValue(p, pi.GetValue(o, null), null);
                }
            }

            return p;
        }
        
        

            TabPage mypage = new TabPage();

            TextEditorControl tmp = (TextEditorControl)CloneObject(txtSQL);
            mypage.Controls.Add(tmp);

            tabEdit.TabPages.Add(mypage);
            
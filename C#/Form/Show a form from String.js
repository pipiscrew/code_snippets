//http://www.daniweb.com/software-development/csharp/threads/268537/open-an-instance-of-a-form-from-a-string
Type type = Type.GetType("WindowsFormsApplication1.Form2");
object obj = Activator.CreateInstance(type);
(obj as Form).Show();
//http://danielsaidi.wordpress.com/2009/05/25/c-get-all-classes-that-inherit-a-certain-base-class/
//http://stackoverflow.com/questions/1268397/how-to-find-all-the-types-in-an-assembly-that-inherit-from-a-specific-type-c-sha
//http://stackoverflow.com/questions/1262057/optimize-finding-all-classes-implementing-iinterfacet-and-those-explicitly-imp/1265532#1265532
//http://stackoverflow.com/questions/8816002/how-can-i-recursively-search-properties-in-c-sharp-only-if-those-properties-inhe

*framework v3.5 only*

using System.Linq;

        public static List<Type> GetClasses(Type baseType)
        {
            return System.Reflection.Assembly.GetCallingAssembly().GetTypes().Where(type => type.IsSubclassOf(baseType)).ToList();
        }
        
        private void btnImport_Click(object sender, EventArgs e)
        {
            List<Type> tmp = GetClasses(typeof(DboTable));

            foreach (var item in tmp)
            {
                object obj = Activator.CreateInstance(item,General.Conne.GetConnection());
                (obj as DboTable).AddMissingColumns();
            }
        }
        
//OR
        internal static void Check4Changes()
        {
            List<Type> tmp = General.GetClasses(typeof(DboTable));

            foreach (var item in tmp)
            {
                DboTable obj = (DboTable) Activator.CreateInstance(item, General.Conne.GetConnection());
                if (!obj.TableExists())
                    obj.CreateTable();
                else
                    obj.AddMissingColumns();

                obj.Dispose();
            }
        }
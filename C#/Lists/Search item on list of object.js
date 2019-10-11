//http://stackoverflow.com/questions/1568593/how-to-use-indexof-method-of-listobject
txtTmp.FindIndex(delegate(MethodData employee){return employee.Mname == inst.Operand.ToString();});


-or for int-
List<MethodInfo> methods;

int res;
res=methods.FindIndex(delegate(MethodInfo employee) { return employee.RVA > int.Parse(lstv.Items[i].SubItems[2].Text); });


//when list<> inside list<>
//http://stackoverflow.com/questions/17911767/c-sharp-searching-listt-inside-another-listt
List<FooOuter> fooOuterCollection = GetSomeData(); 

var tmp = fooOuterCollection.Find( f => f.FooOuterId == 2 );


//when is list<singleton>
      private static element Find(element node, string targetName)
        {
            if (node == null)
                return null;
            if (node.ID == targetName)
                return node;
            foreach (element child in node.properties)
            {
                var found = Find(child, targetName);

                if (found != null)
                    return found;
            }
            return null;
        }
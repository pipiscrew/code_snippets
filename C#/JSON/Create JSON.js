//http://techbrij.com/670/json-response-of-different-net-objects

	public string GetJSON(object obj){
	    System.Web.Script.Serialization.JavaScriptSerializer oSerializer =
	        new System.Web.Script.Serialization.JavaScriptSerializer();
	    return oSerializer.Serialize(obj);
	}

#ex1	
int[] oList = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
Label1.Text = GetJSON(oList);

	Output:
	[5,4,1,3,9,8,6,7,2,0]
	
#ex2	
string[,] oList = new string[,] { {"Col 1 Row 1 ","Col 2 Row 1"},{"Col 1 Row 2","Col 2 Row 2"}};
Label1.Text = GetJSON(oList);

	Output:
	["Col 1 Row 1 ","Col 2 Row 1","Col 1 Row 2","Col 2 Row 2"]
	
#ex3
public struct Person
    {
        public string Name { get; set; }
        public string Age { get; set; }
        public string ID { get; set; }
    }
Person oEmployee1 = new Person { Name = "Pini", ID = "111", Age = "30" };
        Person oEmployee2 = new Person { Name = "Yaniv", ID = "Cohen", Age = "31" };
        Person oEmployee3 = new Person { Name = "Yoni", ID = "Biton" };
        List<Person> oList = new List<Person>() { oEmployee1, oEmployee2, oEmployee3 };
        Label1.Text = GetJSON(oList);
        
	Output:
	[{"Name":"Pini","Age":"30","ID":"111"},{"Name":"Yaniv","Age":"31","ID":"Cohen"},{"Name":"Yoni","Age":null,"ID":"Biton"}]

#ex4
ArrayList oList = new ArrayList { oEmployee1, oEmployee2, stackObject, queueObject, oDict };
        Label1.Text = GetJSON(oList);

	Output:
	[{"Name":"Pini","Age":"30","ID":"111"},{"Name":"Yaniv","Age":"31","ID":"Cohen"},["Third","Second","First"],["First","Second","Third"],{“Key1″:”Value1″,”Key2″:”
	Value2″,”Key3″:”Value3″,”Key4″:”Value4″,”Key5″:”Value5″}]

#ex5
DataTable oList1 = GetDataTable();
       var oList = from t in oList1.AsEnumerable()
                   select new { Name = t.Field<string>("Name"), Amt = t.Field<string>("Amount") };
       Label1.Text = GetJSON(oList);

	Output:
	[{"Name":"NAME-0","Amt":"0"},{"Name":"NAME-1","Amt":"10"},{"Name":"NAME-1","Amt":"30"},{"Name":"NAME-0","Amt":"40"}]

#ex6
IDictionary<string, string> oDict = new Dictionary<string, string>();
       oDict.Add("Key1", "Value1");
       oDict.Add("Key2", "Value2");
       oDict.Add("Key3", "Value3");
       oDict.Add("Key4", "Value4");
       oDict.Add("Key5", "Value5");
       Label1.Text = GetJSON(oDict);

	Output:
	{“Key1″:”Value1″,”Key2″:”Value2″,”Key3″:”Value3″,”Key4″:”Value4″,”Key5″:”Value5″}
	
	
NameValueCollection oList = new NameValueCollection();
        oList.Add("Key1", "Value1");
        oList.Add("Key2", "Value2");
        oList.Add("Key3", "Value3");
        oList.Add("Key4", "Value4");
        oList.Add("Key5", "Value5");
        Label1.Text = GetJSON(oList);
        
	Output:
	["Key1","Key2","Key3","Key4","Key5"]
	
	
Stack stackObject = new Stack();
        stackObject.Push("First");
        stackObject.Push("Second");
        stackObject.Push("Third");
        Label1.Text = GetJSON(stackObject);
        
	Output:
	["Third","Second","First"]
	

Queue queueObject = new Queue();
        queueObject.Enqueue("First");
        queueObject.Enqueue("Second");
        queueObject.Enqueue("Third");
        Label1.Text = GetJSON(queueObject);
        
	Output:
	["First","Second","Third"]
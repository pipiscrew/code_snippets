//http://gargmanoj.wordpress.com/2008/08/07/reading-description-of-enum-values-using-reflection-in-net-20/
//for FRM2

class ActionItems
 {
     public string Text;
     public string Value;

     public ActionItems(string _text, string _value)
     {
         Text = _text;
         Value = _value;
     }
 }

 public List<ActionItems> GetActionListItems(Type EnumType)
 {
     List<ActionItems> items = new List<ActionItems>();
     foreach (string value in Enum.GetNames(EnumType))
     {
         /// Get field info
         FieldInfo fi = EnumType.GetField(value);

         /// Get description attribute
         object[] descriptionAttrs = fi.GetCustomAttributes(typeof(DescriptionAttribute), false);
         DescriptionAttribute description = (DescriptionAttribute)descriptionAttrs[0];

         ActionItems item = new ActionItems(description.Description, value);
         items.Add(item);
     }
     return items;
 }

public List<ActionItems> GetActionListItems(Type EnumType)

public enum Actions
    {
        [Description("Check in")]
        Checkin,
        [Description("Check out")]
        Checkout,
        [Description("Undo Check out")]
        UndoCheckOut,
        [Description("View File")]
        ViewFile,
    }
    
    
//This code can be used to call GetActionListItems method
//List<ActionItems> comboItems = GetActionListItems(typeof(Actions));
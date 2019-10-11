//http://stackoverflow.com/a/434751

List<KeyValuePair<object, object>> exta_pappoytsakia_menu_item = new List<KeyValuePair<object, object>>();

exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagId", 2));
exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagCode", "Offers"));
exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagOrder", -3));
exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagImage", "offers.png"));
exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagOnImage", false));
exta_pappoytsakia_menu_item.Add(new KeyValuePair<object, object>("FlagTitle", "wowΜεθοδολόγια"));

allProductFlags.AsEnumerable().Concat(new[] { exta_pappoytsakia_menu_item });
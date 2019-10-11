//http://wptrafficanalyzer.in/blog/android-json-parsing-with-jsonobject-and-loading-to-listview-example/

valOBJ =  jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONObject("Address");//.getJSONArray("Address");

valOBJ.getString("addr1");

ex.
    "Contact": {           <------------------------THIS IS OBJ
		"icon": "75-phone",
        "button_title": "Contact",
		"title": "Contact Us",
        "barColor": "156,10,25",
        "barTextcolor": "255,255,255",
        "pageColor": "255,255,255",
        "pageTextColor": "64,64,64",
        "image": "SoGood.jpg",
        "width": 320,
        "height": 122,
        "Address": {
            "name": "KFC Victoria Gardens",
            "addr1": "Shop 4",
        },
        "Groups": [           <------------------------THIS IS ARRAY
            {
                "heading": "KFC Victoria Gardens",
      	]
      	
//http://stackoverflow.com/questions/4407532/parse-json-object-with-string-and-value-only
//				  Map<String,String> map = new HashMap<String,String>();
//				    Iterator iter = valArray.keys();
//				    while(iter.hasNext()){
//				        String key = (String)iter.next();
//				        String value = valArray.getString(key);
//				        map.put(key,value);
//				    }
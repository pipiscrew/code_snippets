//http://stackoverflow.com/questions/6802483/how-to-directly-initialize-a-hashmap-in-a-literal-way

HashMap<String, String > h = new HashMap<String, String>(){{
        put("a","b");
    }};
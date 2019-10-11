//http://stackoverflow.com/questions/7051785/when-jsonobject-keys-are-iterate-it-is-not-in-the-same-order-as-in-response-from
 public static List listFromJsonSorted(JSONObject json) {
    if (json == null) return null;
    SortedMap map = new TreeMap();
    Iterator i = json.keys();
    while (i.hasNext()) {
        try {
            String key = i.next().toString();
            JSONObject j = json.getJSONObject(key);
            map.put(key, j);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    return new LinkedList(map.values());
}
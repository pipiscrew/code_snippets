Map<String, String> causeList = new HashMap<String, String>();

//set key,value
//update if exists // add new if not (automatically)
causeList.put(snapshot.getRef().getName().toString(), goalSUM);

//get by key
causeList.get(snapshot.getRef().getName().toString()


//when there is no items, even new HashMap. returns true
causeList.isEmpty()
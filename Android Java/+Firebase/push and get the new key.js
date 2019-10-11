
		db = new Firebase("https://testarea.firebaseio.com/competitions");

		Map<String, Object> rec = new HashMap<String, Object>();
		rec.put("Title", "Absalom, Absalom!");
		rec.put("dateStart", "1065793501");
		rec.put("dateEnd", "1071063901");
		rec.put("Comment", "William Faulkner");
		rec.put("Winner", "userX1");
		rec.put("Logo", "http://lamp.t-c.gr/csp/aaa/48.png");
		Firebase firebase = db.push();
		firebase.setValue(rec, 1);
		
		String key = firebase.getName(); //getKey of main node
		//1st ref
		db = new Firebase("https://testarea.firebaseio.com/competitions/" + key + "/causes");
		rec = new HashMap<String, Object>();
		rec.put("ref", "test");
		rec.put("text", "Pediatric Hospital of Karamandaneiou");
		firebase = db.push();
		firebase.setValue(rec);

		//2nd ref
		rec = new HashMap<String, Object>();
		rec.put("ref", "test");
		rec.put("text", "Ahepa");
		firebase = db.push();
		firebase.setValue(rec);
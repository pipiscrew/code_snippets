		//load save prefs
		Set<String> set = new HashSet<String>();
		
		for (Frag_Settings_Categories item : Frag_Settings_Categories_LIST) {
			if (item.getIs_selected())
				set.add(String.valueOf(item.getId()));
		}
		
		SharedPreferences.Editor prefs = General.get_pref(getActivity()).edit(); 	
		prefs.putStringSet("user_categories", set);
		prefs.commit();
			
			
		//load user prefs
		SharedPreferences prefs=  General.get_pref(getActivity());
		Set<String> user_categories_set = prefs.getStringSet("user_categories", null);
		
		if (user_categories_set!=null)
		{
			List<String> user_categories = new ArrayList<String>(user_categories_set);
	
		    for(int i = 0 ; i < user_categories.size() ; i++){
				for (Frag_Settings_Categories item : Frag_Settings_Categories_LIST) {
					if (user_categories.get(i).equals(String.valueOf(item.getId())))
						item.setIs_selected(true);
				}
		    }
		    
		    lstv_adapter.notifyDataSetChanged();
	    
		}
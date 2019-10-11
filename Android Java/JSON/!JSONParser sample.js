package com.example.testtab;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.R.color;
import android.content.Context;
import android.graphics.Color;

public class JSONParser {

	private static JSONParser cm;

	public static JSONParser getCommonMethods() {
		return cm;
	}

	public static void setCommonMethods() {
		cm = new JSONParser();
	}

	public tabVARS ReadJSON(Context baseContext, int posJSON, General.tabType tabType) {

		if (General.JSONtxt == null)
			General.JSONtxt = General.fileRead(baseContext, "essential.txt");

		// the object!
		JSONObject jsonObj = null;
		JSONArray nameArray = null;

		// the result set
		tabVARS returnList = new tabVARS();

		// ///////////////// READ JSON
		try {
			// parse JSON
			jsonObj = new JSONObject(General.JSONtxt);

			// get the names from JSON
			nameArray = jsonObj.names();// .getJSONArray(name)

		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// ///////////////// READ JSON

		// //////////////////////////// COMMON VARIABLES for all tabs
		try {
			returnList.icon = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("icon");
			returnList.button_title = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("button_title");
			returnList.title = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("title");
			returnList.barColor = RGB2HEX(jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("barColor"));
			try {
				returnList.barTextColor = RGB2HEX(jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("barTextColor"));
			} catch (Exception ex) {
				returnList.barTextColor = Color.WHITE;
			}

			returnList.pageColor = RGB2HEX(jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("pageColor"));

			// only for General.tabType = Catalog (0)
			try {
				returnList.idstart = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("idStart");
			} catch (Exception ex) {
			}

			// only for General.tabType = Contact (4)
			returnList.pagetextcolor = RGB2HEX(jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("pageTextColor"));
			returnList.image = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("image");
			returnList.width = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("width");
			returnList.height = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("height");

		} catch (JSONException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		// //////////////////////////// COMMON VARIABLES for all tabs

		if (tabType == tabType.Items) {
			// ex. Specials
			// "items": [
			// "name": "Crispy Rods",
			// "html": "<div

			JSONArray valArray = null;
			List<JSONObject> kk = null;
			returnList.JSONchildren = new ArrayList<tabVARSchildren>();
			tabVARSchildren Items = null;

			try {

				// get the array
				valArray = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONArray("items");

				// get the list of objects!
				kk = getStringListOBJFromJsonArray(valArray);

				String items = "";
				returnList.JSONItem = "";

				for (int i = 0; i < kk.size(); i++) {

					JSONObject desc = kk.get(i);

					Items = new tabVARSchildren();
					Items.setTitle(desc.getString("name"));
					Items.setHtml(desc.getString("html"));

					returnList.JSONchildren.add(Items);

					// for each item extract name + html
					// JSONObject desc = kk.get(i);
					//
					// items += "<h2>" + desc.getString("name") + "</h2><br>"
					// + desc.getString("html");
					//
					// if (items.endsWith(".pdf")) // WARNING when has 1line
					// with
					// // hypelink contains .pdf (?)
					// // webview tries to read the
					// // pdf!
					// items = items.substring(0, items.length() - 3)
					// + " extension not allowed!";
				}

				// returnList.JSONItem = items;
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// dispose
			kk = null;
			valArray = null;
			nameArray = null;
			jsonObj = null;

			// return list!
			return returnList;
		} else if (tabType == tabType.About) {
			// ex. "About": {
			// "icon": "42-info",
			// "button_title": "Info",
			// "title": "About KFC",
			// "barColor": "156,10,25",
			// "barTextColor": "255,255,255",
			// "pageColor": "255,255,255",
			// "html": "<sty"

			try {
				returnList.JSONItem = jsonObj.getJSONObject(nameArray.getString(posJSON)).getString("html");
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// dispose
			nameArray = null;
			jsonObj = null;

			// return list!
			return returnList;
		} else if (tabType == tabType.Contact) {
			// "Contact": {
			// "icon": "75-phone",
			// "button_title": "Contact",
			// "title": "Contact Us",
			// "barColor": "156,10,25",
			// "barTextcolor": "255,255,255",
			// "pageColor": "255,255,255",
			// "pageTextColor": "64,64,64",
			// "image": "SoGood.jpg",
			// "width": 320,
			// "height": 122,
			// "Address": {
			// "Groups": [
			// {
			// "items": [
			// {

			JSONArray valArray = null;
			List<JSONObject> kk = null;
			JSONObject valOBJ = null;

			tabVARSchildren Items = null;

			returnList.JSONItems = new ArrayList<String>();
			returnList.JSONchildren = new ArrayList<tabVARSchildren>();

			try {

				String items = "";
				returnList.JSONItem = "";

				// get the object *ADDRESS*
				valOBJ = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONObject("Address");

				// valOBJ.getString("addr1");
				items = "<b>" + valOBJ.getString("name") + "</b><br>" + valOBJ.getString("addr1") + "<br>" + valOBJ.getString("addr2") + "<br>" + valOBJ.getString("addr3")
						+ "<br>";

				returnList.JSONItems.add("MAP|" + valOBJ.getString("map") + "|" + items);

				// ////////////////////////////////////////////////////////////////
				// GROUPS
				// get the array
				valArray = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONArray("Groups");

				// get the list of objects!
				kk = getStringListOBJFromJsonArray(valArray);

				for (int i = 0; i < kk.size(); i++) {

					// for each item extract name + html
					JSONObject desc = kk.get(i);

					items = "<b>" + desc.getString("heading") + "</b><br>" + desc.getString("phone") + "<br>" + desc.getString("detail1") + "<br>" + desc.getString("detail2")
							+ "<br>";

					if (desc.getString("phone").trim().length() > 0)
						returnList.JSONItems.add("TEL|" + desc.getString("phone") + "|" + items);
					else if (desc.getString("heading").trim().equalsIgnoreCase("Email") && desc.getString("detail1").trim().length() > 0)
						returnList.JSONItems.add("MAIL|" + desc.getString("detail1") + "|" + items);
					else
						returnList.JSONItems.add("PLAIN| |" + items);

					// if (items.endsWith(".pdf")) // WARNING when has 1line
					// with
					// // hypelink contains .pdf (?)
					// // webview tries to read the
					// // pdf!
					// items = items.substring(0, items.length() - 3)
					// + " extension not allowed!";
				}

				valArray = null;

				// get the array
				valArray = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONArray("items");

				if (valArray != null) {
					// get the list of objects!
					kk = getStringListOBJFromJsonArray(valArray);

					for (int i = 0; i < kk.size(); i++) {
						JSONObject desc = kk.get(i);

						Items = new tabVARSchildren();

						Items.setTitle(desc.getString("title"));
						Items.setPageColor(RGB2HEX(desc.getString("pageColor")));
						Items.setHtml(desc.getString("html"));

						returnList.JSONchildren.add(Items);
					}
				}

			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// dispose
			kk = null;
			valArray = null;
			valOBJ = null;
			nameArray = null;
			jsonObj = null;

			// return list!
			return returnList;
		} else if (tabType == tabType.Catalog) {
			JSONArray valArray = null;
			List<JSONObject> kk = null;
			tabVARSchildren catalogItem = null;

			try {
				// instantiate the var class
				returnList.JSONchildren = new ArrayList<tabVARSchildren>();
				returnList.JSONchildren.add(null);

				// get the array
				valArray = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONArray("Pages");

				// get the list of objects!
				kk = getStringListOBJFromJsonArray(valArray);

				String items = "";
				returnList.JSONItem = "";

				for (int i = 0; i < kk.size(); i++) {
					catalogItem = new tabVARSchildren();

					// for each item extract name + html
					JSONObject desc = kk.get(i);

					catalogItem.id = desc.getString("id");
					catalogItem.title = desc.getString("title");
					catalogItem.html = desc.getString("html");

					returnList.JSONchildren.add(catalogItem);
				}
			} catch (JSONException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// dispose
			kk = null;
			valArray = null;
			nameArray = null;
			jsonObj = null;

			// return list!
			return returnList;
		} else if (tabType == tabType.Social) {
//			"orderNumber": 2,
//	        "icon": "08-chat",
//	        "button_title": "Social",
//			"title": "KFC Social",
//	        "barColor": "156,10,25",
//	        "barTextColor": "255,255,255",
//	        "pageColor": "255,0,0",
//	        "items": [
			List<JSONObject> kk = null;
			JSONArray valArray = null;
			tabVARSchildren catalogItem = null;
			
			returnList.JSONchildren = new ArrayList<tabVARSchildren>();
			
			try {
				// get the array
				valArray = jsonObj.getJSONObject(nameArray.getString(posJSON)).getJSONArray("items");
				// get the list of objects!
				kk = getStringListOBJFromJsonArray(valArray);

				for (int i = 0; i < kk.size(); i++) {
					// for each item extract name + html
					JSONObject desc = kk.get(i);
					
					catalogItem = new tabVARSchildren();
					catalogItem.setTitle(desc.getString("title"));
					catalogItem.setHtml(desc.getString("link"));
					catalogItem.setId(desc.getString("image"));
					returnList.JSONchildren.add(catalogItem);
				}
			} catch (Exception e) {
			}
			
			// dispose
			kk = null;
			valArray = null;
			nameArray = null;
			jsonObj = null;

			// return list!
			return returnList;
			
		}
		return null;

	}

	private int RGB2HEX(String RGB) {
		return Color.rgb(Integer.parseInt(RGB.split(",")[0]), Integer.parseInt(RGB.split(",")[1]), Integer.parseInt(RGB.split(",")[2]));
	}

	public static List<JSONObject> getStringListOBJFromJsonArray(JSONArray jArray) throws JSONException {
		List<JSONObject> returnList = new ArrayList<JSONObject>();
		for (int i = 0; i < jArray.length(); i++) {
			returnList.add(jArray.getJSONObject(i));
		}
		return returnList;
	}

}

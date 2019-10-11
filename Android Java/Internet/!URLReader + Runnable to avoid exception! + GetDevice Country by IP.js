//http://stackoverflow.com/questions/6343166/android-os-networkonmainthreadexception
//when called from main acitivity throws android.os.NetworkOnMainThreadException
//to avoid use thread or asynchtask

		////////////////////////////////get user country 
		new Thread(new Runnable(){
		    @Override
		    public void run() {
				String userCountry=null;
				
				try{
					//ask webservice
					String webServiceJSON =  new URLReader().getResponse("http://ipinfo.io/json");
					
					if (webServiceJSON!=null)
					{
						JSONObject jObject = new JSONObject(webServiceJSON);
						userCountry = jObject.getString("country");
					}
					
					if (userCountry==null)
					{
						//ask SIMCard!
//						userCountry=getTelephoneServiceCountry();
					}
				}
				catch(Exception ex) {
					userCountry=null;
				}
				
				General.userCOUNTRY = userCountry; 
		    }
		}).start();
		////////////////////////////////get user country
		
//with this one you cant manipulate the views^^
//http://stackoverflow.com/questions/5161951/android-only-the-original-thread-that-created-a-view-hierarchy-can-touch-its-vi
		runOnUiThread(new Runnable() {
		    @Override
		    public void run() {
				String userCountry=null;
				
				try{
					//ask webservice
####but this no working!!
					String webServiceJSON =  new URLReader().getResponse("http://ipinfo.io/json");
					
					if (webServiceJSON!=null)
					{
						JSONObject jObject = new JSONObject(webServiceJSON);
						userCountry = jObject.getString("country");
					}
					
					if (userCountry==null)
					{
						//ask SIMCard!
//						userCountry=getTelephoneServiceCountry();
					}
					
					
				}
				catch(Exception ex) {
					userCountry=null;
				}
				
				General.userCOUNTRY = userCountry; 
				
				getUserCountryCredit();
				
				
//				General.isAuthenticated = true;
//
				playgame();

				
		    }
		});
		
		
		
//the class
//http://stackoverflow.com/questions/9605913/how-to-parse-json-in-android
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;

public class URLReader {

	public String getResponse(String URL) {
		InputStream inputStream = null;

		try {
			DefaultHttpClient httpclient = new DefaultHttpClient(new BasicHttpParams());
			HttpGet httpGetRequest = new HttpGet(URL);

			HttpResponse response = httpclient.execute(httpGetRequest);
			HttpEntity entity = response.getEntity();

			inputStream = entity.getContent();
			// json is UTF-8 by default
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"), 8);
			StringBuilder sb = new StringBuilder();

			String line = null;
			while ((line = reader.readLine()) != null)
				sb.append(line + "\n");

			return sb.toString();

		} catch (Exception e) {
			return null;
		} finally {
			try {
				
				if (inputStream != null)
					inputStream.close();
				
			} catch (Exception squish) {
			}
		}

	}
}

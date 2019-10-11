**//http://stackoverflow.com/questions/10352719/android-event-listener
***http://stackoverflow.com/questions/2983250/custom-event-listener-on-android-app
//http://stackoverflow.com/questions/12102319/implementing-async-task-in-a-class
//http://stackoverflow.com/questions/9458258/return-value-from-async-task-in-android


////////////////////////////////main activity
		CustomHttpTask downloader = new CustomHttpTask();

		downloader.setListener(new IAsyncFetchListener() {

			@Override
			public void onComplete(String item) {
				final String tmp = item;

				runOnUiThread(new Runnable() { //manipulate GUI
					public void run() {
						prepareUI(tmp);
					}
				});
			}

		});

		downloader.execute("http://ipinfo.io/json");
		

	private void prepareUI(String webServiceJSON) {
		Toast.makeText(getApplicationContext(), webServiceJSON, Toast.LENGTH_SHORT).show();  
	}

////////////////////////////////asynch class
package com.tc.contests;

import java.util.EventListener;

import android.os.AsyncTask;

public class CustomHttpTask extends AsyncTask<Object, String, Void> {

	//base event
	public interface IAsyncFetchListener extends EventListener {
		void onComplete(String item);
	}

	//base listener
	public void setListener(IAsyncFetchListener listener) {
		this.fetchListener = listener;
	}

	IAsyncFetchListener fetchListener = null;

	private String response = null;

	@Override
	protected Void doInBackground(Object... params) {
		String url = (String) params[0];

		try {
			response = new URLReader().getResponse(url);
		} catch (Exception e) {
			response = null;
		}

		if (this.fetchListener != null)
			this.fetchListener.onComplete(response);

		return null;
	}

}


////////////////////////////////URLReader class
package com.tc.contests;

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

//http://androidsamples.blogspot.gr/2009/06/how-to-use-http-connection-saxparser.html
//http://code4j.blogspot.gr/2012/11/android-post-json-with-php-as-backend.html

//the use 
	public void btnAdd_Click(View v) {
		ArrayList<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();

		nameValuePairs.add(new BasicNameValuePair("mailto", "info@pipiscrew.com"));
		nameValuePairs.add(new BasicNameValuePair("subject", "test"));
		nameValuePairs.add(new BasicNameValuePair("thema_title", "testTHEMA"));
		nameValuePairs.add(new BasicNameValuePair("mail_type", "0"));
		nameValuePairs.add(new BasicNameValuePair("pass", "1234"));

		CustomHttpTask poster = new CustomHttpTask();
		poster.setHTTP_Method(CustomHttpTask.httpMethod.POST);
		poster.setNameValuePairs(nameValuePairs);

		poster.setListener(new IAsyncFetchListener() {

			@Override
			public void onComplete(String item) {
				final String tmp = item;

				runOnUiThread(new Runnable() { // manipulate GUI
					public void run() {
						complain(tmp);
					}
				});
			}

		});

		poster.execute("http://contests4causes.com/admin/mobile_procs/sendmail.php");
	}

	public void btnGET_Click(View v) {
				CustomHttpTask poster = new CustomHttpTask();
				poster.setHTTP_Method(CustomHttpTask.httpMethod.GET);

				poster.setListener(new IAsyncFetchListener() {

					@Override
					public void onComplete(String item) {
						final String tmp = item;

						runOnUiThread(new Runnable() { // manipulate GUI
							public void run() {


							}
						});
					}

				});

				poster.execute("http://www.petas.gr/gr/ajaxsearchports.html?modal=false&from=" + items.get(position).getId());
	}
	
	void complain(String message) {

		AlertDialog.Builder bld = new AlertDialog.Builder(this);
		bld.setMessage(message);
		bld.setNeutralButton("OK", null);

		bld.create().show();
	}
	


// CustomHttpTask class with internal classes

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.EventListener;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;

import android.os.AsyncTask;

public class CustomHttpTask extends AsyncTask<Object, String, Void> {

	// ////////////// HTTP METHOD ENUM
	public enum httpMethod {
		GET, POST
	}

	private httpMethod HTTP_Method;

	public httpMethod getHTTP_Method() {
		return HTTP_Method;
	}

	public void setHTTP_Method(httpMethod hTTP_Method) {
		HTTP_Method = hTTP_Method;
	}

	// ////////////// POST PAIRS
	private ArrayList<NameValuePair> nameValuePairs = null;

	public ArrayList<NameValuePair> getNameValuePairs() {
		return nameValuePairs;
	}

	public void setNameValuePairs(ArrayList<NameValuePair> nameValuePairs) {
		this.nameValuePairs = nameValuePairs;
	}

	// ////////////// EVENT
	// base event
	public interface IAsyncFetchListener extends EventListener {
		void onComplete(String item);
	}

	// base listener
	public void setListener(IAsyncFetchListener listener) {
		this.fetchListener = listener;
	}

	IAsyncFetchListener fetchListener = null;

	private String response = null;

	@Override
	protected Void doInBackground(Object... params) {
		String url = (String) params[0];

		try {
			if (HTTP_Method == httpMethod.GET)
				response = new URLReader().getResponse(url);
			else
				response = new URLPoster().getPost(url, nameValuePairs);

		} catch (Exception e) {
			response = null;
		}

		if (this.fetchListener != null)
			this.fetchListener.onComplete(response);

		return null;
	}

	private class URLPoster {

		public String getPost(String URL, ArrayList<NameValuePair> vars) {
			InputStream inputStream = null;
			HttpClient httpClient = new DefaultHttpClient();
			try {
				HttpPost post = (HttpPost) createNameValuePairEntity(nameValuePairs, URL);

				HttpResponse response = httpClient.execute(post);

				inputStream = response.getEntity().getContent(); // Get the data
																	// in the
																	// entity
				String ja = convertStreamToString(inputStream);

				return ja;

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

		private String convertStreamToString(java.io.InputStream is) {
			java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
			return s.hasNext() ? s.next() : "";
		}

		// for name pair
		private HttpUriRequest createNameValuePairEntity(ArrayList<NameValuePair> nameValuePairs, String url) {
			HttpPost post = null;
			try {
				post = new HttpPost(url);
				post.setEntity(new UrlEncodedFormEntity(nameValuePairs));
			} catch (Exception ex) {

			}
			return post;
		}

		// for JSON OBJ [start]
		// the call will be HttpPost post = (HttpPost)
		// createPostForJSONObject(json, "https://android.googleapis.com/gcm/send");
		private HttpUriRequest createPostForJSONObject(String params, String url) {
			HttpPost post = new HttpPost(url);
			post.setEntity(createStringEntity(params));
			return post;
		}

		private HttpEntity createStringEntity(String params) {
			StringEntity se = null;
			try {
				se = new StringEntity(params.toString(), "UTF-8");
				se.setContentType("application/json; charset=UTF-8");
			} catch (UnsupportedEncodingException e) {

			}
			return se;
		}
		// for JSON OBJ [end]
	}

	private class URLReader {

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
}

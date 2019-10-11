//http://www.pipiscrew.com/2014/11/phpandroid-secure-connection-with-session-variables/

//manifest
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.testan"
    android:versionCode="1"
    android:versionName="1.0" >

    <uses-sdk
        android:minSdkVersion="16"
        android:targetSdkVersion="16" />
    
    <uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme"
        android:name="AppClass" >
        <activity
            android:name="com.example.testan.MainActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>

//AppClass
package com.example.testan;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.DefaultHttpClient;

import android.app.Application;

public class AppClass  extends Application {
	
	private static HttpClient httpClient=null;
	
	@Override
	public void onCreate() {
		super.onCreate();
		
		httpClient = new DefaultHttpClient();
	}
	
	public HttpClient getNetClient() {
		return httpClient;
	}

	public void setAdapter(HttpClient adapter) {
		this.httpClient = adapter;
	}

}

//CustomHttpTask3.java
package com.example.testan;

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

import android.content.Context;
import android.os.AsyncTask;

public class CustomHttpTask3 extends AsyncTask<Object, String, Void> {

	Context cx ; 
	public CustomHttpTask3(Context cx ){
		this.cx=cx;
	}
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
			 
			HttpClient httpClient = ((AppClass) cx.getApplicationContext()).getNetClient();
			
			
			//new DefaultHttpClient();
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

//mainactivity.java
package com.example.testan;

import java.util.ArrayList;

import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.message.BasicNameValuePair;

import android.app.Activity;
import android.os.Bundle;
import android.os.StrictMode;
import android.view.Menu;
import android.view.View;
import android.widget.Toast;

import com.example.testan.CustomHttpTask3.IAsyncFetchListener;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	public void btnAdd_Click(View view)
	{
		StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy);
		

			HttpClient k = ((AppClass) this.getApplication()).getNetClient();
			
			ArrayList<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();
			nameValuePairs.add(new BasicNameValuePair("username", "admin"));
			nameValuePairs.add(new BasicNameValuePair("password", "admin"));


			CustomHttpTask3 poster = new CustomHttpTask3(MainActivity.this);
			poster.setHTTP_Method(CustomHttpTask3.httpMethod.POST);
			poster.setNameValuePairs(nameValuePairs);

			poster.setListener(new IAsyncFetchListener() { 

				@Override
				public void onComplete(String item) {
					final String tmp = item;

					runOnUiThread(new Runnable() { // manipulate GUI
						public void run() {
							if (tmp == null) {
								Toast.makeText(MainActivity.this, "Please connect to internet!", Toast.LENGTH_LONG).show();
								finish();
							} else {
								Toast.makeText(MainActivity.this, tmp, Toast.LENGTH_SHORT).show();
								
								ask4login();
							}
						}
					});
				}

			});

			poster.execute("http://x.com/testAREA/securetrans/login.php");
			
	}
	
    public void ask4login(){
    	

		HttpClient k = ((AppClass) this.getApplication()).getNetClient();
		
		ArrayList<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>();
//		nameValuePairs.add(new BasicNameValuePair("product", General.getApplicationName(MainActivity.this)));


		CustomHttpTask3 poster = new CustomHttpTask3(MainActivity.this);
		poster.setHTTP_Method(CustomHttpTask3.httpMethod.POST);
		poster.setNameValuePairs(nameValuePairs);

		poster.setListener(new IAsyncFetchListener() { 

			@Override
			public void onComplete(String item) {
				final String tmp = item;

				runOnUiThread(new Runnable() { // manipulate GUI
					public void run() {
						if (tmp == null) {
							Toast.makeText(MainActivity.this, "Please connect to internet!", Toast.LENGTH_LONG).show();
							finish();
						} else {
							Toast.makeText(MainActivity.this, tmp, Toast.LENGTH_SHORT).show();
						}
					}
				});
			}

		});

		poster.execute("http://x.com/testAREA/securetrans/content.php");
    }
    
	public void btnAdd2_Click(View view)
	{
		ask4login();
		
	}

}


//login.php
<?php
session_start();

if(isset($_POST['username']))
{
	$username = $_POST['username'];
	$password = $_POST['password'];

	if($username == 'admin' && $password == 'admin')
	{
		$_SESSION['username'] = $username;
		
		echo "admin setted";
		
		exit;
	}
	else
	{
		echo "-1";
	}
}
?>

<html>
	<body>
		<form action="" method="post">
			<input type="text" name="username" />
			<input type="password" name="password" />
			<input type="submit" name="submit" value="submit" />
		</form>
	</body>
</html>


//content.php
<?php
session_start();

if(isset($_SESSION['username']))
{
	echo "login ok";
}
else
{
	echo "not login";
}
?>
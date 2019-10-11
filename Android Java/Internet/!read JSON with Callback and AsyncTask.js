//http://stackoverflow.com/questions/9605913/how-to-parse-json-in-android

//the call
ProgressDialog dialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button bt;
        bt=(Button)findViewById(R.id.btnLogin);

        dialog = new ProgressDialog(this);
        dialog.setMessage("Processing. Please wait...");
        dialog.setCancelable(false);

        bt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                GetDataFromNetworkJSON request = new GetDataFromNetworkJSON(dialog, hit, new Callback() {
                    public void run(Object result) {

                        // looping through All Contacts
                        JSONArray records = (JSONArray) result;

                        for(int i = 0; i < records.length(); i++){

                            JSONObject c = null;
                            try {
                                c = records.getJSONObject(i);
                                General.showAlert( c.getString("GUID"),MainActivity.this);
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
                        //General.showAlert(result.toString(),MainActivity.this);
                    }
                });
                request.execute();
            }
        });
    }


//class
import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.util.Log;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;

public class GetDataFromNetworkJSON extends AsyncTask<Void, String, Object> {
    Callback callback;
    private ProgressDialog progressDialog;
    private String dURL;

    public GetDataFromNetworkJSON(ProgressDialog pb, String dURL, Callback callback) {
        this.callback = callback;

        this.dURL = dURL;
        this.progressDialog = pb;
    }

    protected void onPreExecute() {
        super.onPreExecute();
        progressDialog.show();
    }


    protected Object doInBackground(Void... params) {

        InputStream is = null;
        //JSONObject jObj = null;
        JSONArray jObj = null;
        String json = "";

        // Making HTTP request
        try {
            // defaultHttpClient
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpPost httpPost = new HttpPost(dURL);

            HttpResponse httpResponse = httpClient.execute(httpPost);
            HttpEntity httpEntity = httpResponse.getEntity();
            is = httpEntity.getContent();

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    is, "iso-8859-1"), 8);
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = reader.readLine()) != null) {
                sb.append(line + "\n");
            }
            is.close();
            json = sb.toString();
        } catch (Exception e) {
            Log.e("Buffer Error", "Error converting result " + e.toString());
        }

        // try parse the string to a JSON object
        try {
            // jObj = new JSONObject(json);
            jObj = new JSONArray(json);
        } catch (JSONException e) {
            Log.e("JSON Parser", "Error parsing data " + e.toString());
        }

        // return JSON String
        return jObj;
    }

    protected void onPostExecute(Object result) {
        callback.run(result);
        progressDialog.dismiss();
    }

}
//the call from activity
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

                GetDataFromNetwork request = new GetDataFromNetwork(dialog,new Callback(){
                    public void run(Object result){
                        Button bt;
                        bt=(Button)findViewById(R.id.btnLogin);
                        bt.setText(result.toString());
                        //Log.d("neww",result.toString());
                    }});
                request.execute();
            }
        });
    }
    
//the class
package com.example.pipiscrewnotes;

import android.app.ProgressDialog;
import android.os.AsyncTask;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * source :
 * http://stackoverflow.com/questions/8061571/how-use-progressdialog-and-async-task-get-method-simultaneously
 * http://www.codingforandroid.com/2011/06/basic-asynctask-with-progress-bar.html
 * http://stackoverflow.com/questions/8295003/best-way-to-manage-the-progressdialog-from-asynctask
 */
public class GetDataFromNetwork extends AsyncTask<Void,String,Object> {
    Callback callback;
    private ProgressDialog progressDialog;

    public GetDataFromNetwork(ProgressDialog pb,Callback callback){
        this.callback = callback;

        progressDialog=pb;
    }

    protected void onPreExecute() {
        super.onPreExecute();
        progressDialog.show();
    }


    protected Object doInBackground(Void... params) {
        BufferedReader reader = null;
        StringBuilder builder = new StringBuilder();

        try {
            URL url = new URL("http://pipiscrew.com/notes/login.php?w=sdfasdf");
            reader = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
            for (String line; (line = reader.readLine()) != null;) {
                builder.append(line.trim());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) try { reader.close(); } catch (IOException logOrIgnore) {}
        }

        return builder.toString();
    }

//    protected Object doInBackground(Void... params) {
//        Object result = null;
//        String page=null;
//        BufferedReader in = null;
//        try
//        {
//            HttpClient client = new DefaultHttpClient();
//            client.getParams().setParameter(CoreProtocolPNames.USER_AGENT, "android");
//            HttpGet request = new HttpGet();
//            request.setHeader("Content-Type", "text/plain; charset=utf-8");
//            request.setURI(new URI("http://pipiscrew.com/notes/login.php?w=sdfasdf"));
//            HttpResponse response = client.execute(request);
//            in = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
//
//            StringBuffer sb = new StringBuffer("");
//            String line = "";
//
//            String NL = System.getProperty("line.separator");
//            while ((line = in.readLine()) != null)
//            {
//                sb.append(line + NL);
//            }
//            in.close();
//             page = sb.toString();
//            //System.out.println(page);
//
//        } catch (ClientProtocolException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (URISyntaxException e) {
//            e.printStackTrace();
//        } finally
//        {
//
//            if (in != null)
//            {
//                try
//                {
//                    in.close();
//                }
//                catch (IOException e)
//                {
//                    Log.d("BBB", e.toString());
//                }
//            }
//        }
//
//        if (page == null)
//            return "";
//        else
//            return page;
//    }

    protected void onPostExecute(Object result) {
        callback.run(result);
        progressDialog.dismiss();
    }

}


//**by source template
//Example of Callback interface:

package example.app;

public interface Callback {

        void run(Object result);
}

//Example of AsyncTask using the Callback interface above:

public class GetDataFromNetwork extends AsyncTask<Void,String,Object> {
  Callback callback;
  public GetDataFromNetwork(Callback callback){
     this.callback = callback;
  }

   protected void onPreExecute() {
      super.onPreExecute();
      progressDialog.show();
  } 


   protected Object doInBackground(Void... params) {
      Object result = null;
      // do your stuff here
      return result;
  }

  protected void onPostExecute(Object result) {
     callback.run(result);
     progressDialog.dismiss();
  }

}

//Example of how to use the classes above in your app:

class Example {
   public onCreate(Bundle savedInstanceState){
      //initialize

      GetDataFromNetwork request = new GetDataFromNetwork(new Callback(){
                     public void run(Object result){
                             //do something here with the result
       }});
       request.execute();      
   }
}
package cbr.myki.CustomerPanel;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class CommonMethods {

	 private static CommonMethods cm;
	 
	 
	 public static CommonMethods getCommonMethods()
	 {
		 return cm;		
	 }
	
	 public static void setCommonMethods()
	 {
		cm = new  CommonMethods();
	 }
	
	
	 public String convertStreamToString(InputStream is) {
	        /*
	         * To convert the InputStream to String we use the BufferedReader.readLine()
	         * method. We iterate until the BufferedReader return null which means
	         * there's no more data to read. Each line will appended to a StringBuilder
	         * and returned as String.
	         */
	        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
	        StringBuilder sb = new StringBuilder();

	        String line = null;
	        try {
	            while ((line = reader.readLine()) != null) {
	                sb.append(line + "\n");
	            }
	        } catch (IOException e) {
	            e.printStackTrace();
	        } finally {
	            try {
	                is.close();
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        }
	        return sb.toString();
		}   
	 
	  public boolean checkNetworkConnection(Context c) {
		    try
		    {
				ConnectivityManager connectivity = (ConnectivityManager) c.getSystemService(Context.CONNECTIVITY_SERVICE);
		        NetworkInfo wifiInfo = connectivity.getNetworkInfo(ConnectivityManager.TYPE_WIFI);
		        NetworkInfo mobileInfo = connectivity.getNetworkInfo(ConnectivityManager.TYPE_MOBILE);
		        
		        if(!wifiInfo.isConnected() && !mobileInfo.isConnected())
		        {
		        	
		        	String error = "No network found please retry or check network settings.";       	
		        	AlertDialog.Builder alertbox = new AlertDialog.Builder(c);           
		            alertbox.setMessage(error);           
		            alertbox.setNeutralButton("Ok", new DialogInterface.OnClickListener() {              
		                public void onClick(DialogInterface arg0, int arg1) { 
		                	System.exit(0);
		                }
		            });
		             // show the alert box
		            alertbox.show();
		            return false;
		        }
		        else
		        {
		        	return true;
		        }
		    }
		    catch(Exception e)
		    {
		    	System.out.println(e.toString());
		    	 return false;
		    }
		   
	  }
}

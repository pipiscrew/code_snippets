import android.os.Environment;

ImageLoader im = new ImageLoader();

im.Download("http://www.essentialapps.com.au/AppData/AU/003/0000001/" +customer_id + "/" + download_image.get(img).trim() , "filename.png");

--

//the class
package ea.securecorp;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import android.os.Environment;
import android.util.Log;

public class ImageLoader
{
	
public String Download(String Url, String Downloaded_Filename)
{
		String filepath=null;
		File file =null;
		String dirName = "/IPatrol/";
		try {
			//set the download URL, a url that points to a file on the internet
			//this is the file to be downloaded
			URL url = new URL(Url);
			//create the new connection
			HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

			//set up some things on the connection
			urlConnection.setRequestMethod("GET");
			urlConnection.setDoOutput(true); 
			//and connect!
			urlConnection.connect();
			//set the path where we want to save the file
			//in this case, going to save it on the root directory of the
			//sd card.
			 String SDCardRoot = Environment.getExternalStorageDirectory().toString();
			 File dir = new File (SDCardRoot + dirName);
             dir.mkdir();
			   //create a new file, specifying the path, and the filename
			   //which we want to save the file as.
			   // you can download to any type of file ex:.jpeg (image) ,.txt(text file),.mp3 (audio file)
			Log.i("Local filename:",""+Downloaded_Filename);
			file = new File(dir,Downloaded_Filename);
//			if(file.createNewFile())
//			{
//				file.createNewFile();
//			}
			 FileOutputStream fileOutput = new FileOutputStream(file);

			   //this will be used in reading the data from the internet
			   InputStream inputStream = urlConnection.getInputStream();

			   //this is the total size of the file
			   int totalSize = urlConnection.getContentLength();
			   //variable to store total downloaded bytes
			   int downloadedSize = 0;

			   //create a buffer...
			   byte[] buffer = new byte[1024];
			   int bufferLength = 0; //used to store a temporary size of the buffer

			   //now, read through the input buffer and write the contents to the file
			   while ( (bufferLength = inputStream.read(buffer)) > 0 ) {
			    //add the data in the buffer to the file in the file output stream (the file on the sd card
			    fileOutput.write(buffer, 0, bufferLength);
			    //add up the size so we know how much is downloaded
			    downloadedSize += bufferLength;
			    //this is where you would do something to report the prgress, like this maybe
			    Log.i("Progress:","downloadedSize:"+downloadedSize+"totalSize:"+ totalSize) ;

			   }
			   //close the output stream when done
			   fileOutput.close();
			   if(downloadedSize==totalSize)   filepath=file.getPath();
			   
			  //catch some possible errors...
			  } catch (MalformedURLException e) {
			   e.printStackTrace();
			  } catch (IOException e) {
			   filepath=null;
			   e.printStackTrace();
			  }
			  Log.i("filepath:"," "+filepath) ;

			  return filepath;

}


}

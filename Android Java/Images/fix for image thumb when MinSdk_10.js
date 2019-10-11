//http://stackoverflow.com/questions/12088136/android-load-image-from-web-url
//fix for 
//    <uses-sdk
//        android:minSdkVersion="16"
//        android:targetSdkVersion="18" />
//the internet images displayed as thumbnails!
//
//when set minSdkVersion="10" all is ok.
        
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import android.os.Bundle;
import android.os.StrictMode;
import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.widget.ImageView;

public class MainActivity extends Activity {

    ImageView mImgView1;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder()
                .permitAll().build();
        StrictMode.setThreadPolicy(policy);

        mImgView1 = (ImageView) findViewById(R.id.mImgView1);
        String url = "https://www.morroccomethod.com/components/com_virtuemart/shop_image/category/resized/Trial_Sizes_4e4ac3b0d3491_175x175.jpg";
        BitmapFactory.Options bmOptions;
        bmOptions = new BitmapFactory.Options();
        //bmOptions.inSampleSize = 1;
        //or better
        bmOptions.inScaled = false;
        
        Bitmap bm = loadBitmap(url, bmOptions);
        mImgView1.setImageBitmap(bm);
    }

    public static Bitmap loadBitmap(String URL, BitmapFactory.Options options) {
        Bitmap bitmap = null;
        InputStream in = null;
        try {
            in = OpenHttpConnection(URL);
            bitmap = BitmapFactory.decodeStream(in, null, options);
            in.close();
        } catch (IOException e1) {
        }
        return bitmap;
    }

    private static InputStream OpenHttpConnection(String strURL)
            throws IOException {
        InputStream inputStream = null;
        URL url = new URL(strURL);
        URLConnection conn = url.openConnection();

        try {
            HttpURLConnection httpConn = (HttpURLConnection) conn;
            httpConn.setRequestMethod("GET");
            httpConn.connect();

            if (httpConn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                inputStream = httpConn.getInputStream();
            }
        } catch (Exception ex) {
        }
        return inputStream;
    }
}
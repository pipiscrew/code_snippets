//1-create an interface on separated class as :

import java.util.EventListener;


public interface post2socialInterface extends EventListener {
    public void responseResult(String val);
}


//2-at original class is like that :

public class post2social {

    // Used to communicate the result back to the Activity
    public post2socialInterface listener;
.
.
.


	//in a method raise the event like :
	listener.responseResult("Message posted on " + provider);
.
.
.


	//make the setListener on your own!
    public void setListener(post2socialInterface listener) {
        this.listener = listener;
    }

}




//then at activity
        post2social s = new post2social(Test.this, "", "", "", "", "", );

        s.setListener(new post2socialInterface() {


            @Override
            public void responseResult(String val) {
						final String tmp = val;

						runOnUiThread(new Runnable() {
							public void run() {
								if (progress != null)
									progress.dismiss();
								
									Toast.makeText(Competition_Details.this,tmp, Toast.LENGTH_LONG).show();
							}
						});
            }

        });
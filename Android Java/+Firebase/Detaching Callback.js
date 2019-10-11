//https://www.firebase.com/docs/reading-data.html

public class MainActivity2 extends Activity implements OnItemClickListener {

	Firebase db = null;

		//if previous listener exists DEATTACH!
		if (listenerChild!=null)
			db.removeEventListener(listenerChild);
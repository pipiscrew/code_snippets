//http://www.ericbt.com/Blog/147
//http://iamvijayakumar.blogspot.gr/2012/09/android-uncaughtexceptionhandler.html

//CustomUncaughtExceptionHandler.class
import java.io.FileWriter;
import java.io.PrintWriter;
import java.lang.Thread.UncaughtExceptionHandler;
import java.util.Date;

import android.app.Application;
import android.util.Log;

public class CustomUncaughtExceptionHandler implements UncaughtExceptionHandler {

	private static Application mApplication;

	public CustomUncaughtExceptionHandler(Application app) {
		mApplication = app;
	}

	@Override
	public void uncaughtException(Thread thread, Throwable tr) {

		String logMessage = String.format("CustomUncaughtExceptionHandler.uncaughtException: Thread %d Message %s", thread.getId(), tr.getMessage());

		Log.e("ww", logMessage);

		tr.printStackTrace();

		if (1 == 1) {
			PrintWriter printWriter = null;

			try {
				printWriter = new PrintWriter(new FileWriter("/sdcard/Vault3Log.txt", true));

				logMessage = String.format("%s\r\n\r\nThread: %d\r\n\r\nMessage:\r\n\r\n%s\r\n\r\nStack Trace:\r\n\r\n%s", new Date(), thread.getId(), tr.getMessage(), Log.getStackTraceString(tr));

				printWriter.print(logMessage);
				printWriter.print("\n\n---------------------------------------------------------------------------\n\n");
			} catch (Throwable tr2) {
			} finally {
				if (printWriter != null) {
					printWriter.close();
				}

			}
		}
	}
}

//@ android application class
import android.app.Application;

public class Dynomite extends Application {
	
	@Override
	public void onCreate() {
		super.onCreate();
		Thread.setDefaultUncaughtExceptionHandler(new CustomUncaughtExceptionHandler(this));

	}


}
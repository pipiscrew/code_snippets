'http://supportforums.blackberry.com/t5/Java-Development/Making-vibrate-non-stop/m-p/119000
import net.rim.device.api.system.Alert;
import net.rim.device.api.system.AlertListener;
import net.rim.device.api.system.Application; 
import net.rim.device.api.ui.component.Dialog;
import net.rim.device.api.ui.component.LabelField;
import net.rim.device.api.ui.component.RichTextField;
import net.rim.device.api.ui.container.MainScreen;

class SalutationScreen extends MainScreen implements AlertListener {

    public SalutationScreen() {

        //no working with the simple way
        //Application.addAlertListener(AlertListener);
        
        UiApplication.getUiApplication().addAlertListener(this);
        

        setTitle( new LabelField( "Vibrate - Test Application" ) );

        add( new RichTextField( "Vibrating!" ) );

        startVibrate();
    }

    public void startVibrate() {

        Alert.startVibrate( 5000 );
    }

    public void stopVibrate() {

        Alert.stopVibrate();
    }

    public void vibrateDone( int reason ) {
        
        startVibrate();

   
    }

    public void audioDone( int reason ) {

    // do nothing
    }

    public void buzzerDone( int reason ) {

    // do nothing
    }

    public boolean onClose() {

        stopVibrate();

        Dialog.alert( "Bye!" );

		//also always on close
		UiApplication.getUiApplication().removeAlertListener(this);
        
        System.exit( 0 );

        return true;
    }
}
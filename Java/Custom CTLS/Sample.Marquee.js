import java.util.Timer;
import java.util.TimerTask;

import net.rim.device.api.ui.DrawStyle;
import net.rim.device.api.ui.Field;
import net.rim.device.api.ui.Font;
import net.rim.device.api.ui.Graphics;
import net.rim.device.api.ui.UiApplication;
import net.rim.device.api.ui.component.LabelField;
import net.rim.device.api.ui.container.MainScreen;

public class MarqueeApp extends UiApplication {

    public MarqueeApp() {
    pushScreen(new MarqueeScreen());
    }

    public static void main(String[] args) {
        (new MarqueeApp()).enterEventDispatcher();
    }
}

class MarqueeScreen extends MainScreen {
    public MarqueeScreen() {
        setTitle(new LabelField("hi"));
        MarqueeLabel testLabel1 = new MarqueeLabel("This is a marquee",
                Field.FOCUSABLE);
        add(testLabel1);

        MarqueeLabel testLabel2 = new MarqueeLabel("This is a long long " +
                "long long long long long long long long long long long " +
                "long long marquee", Field.FOCUSABLE);
        add(testLabel2);
    }
}

class MarqueeLabel extends LabelField {
    int currentChar = 0;
    String currentText = null;
    Font ourFont;
    private Timer _scrollTimer;
    private TimerTask _scrollTimerTask;

    public MarqueeLabel(String text, long style) {
        super(text, style);     
    }

    public void paint(Graphics graphics) {
        currentText = this.getText();
        if (currentChar < currentText.length()) {
            currentText = currentText.substring(currentChar);

        }
        graphics.drawText(currentText, 0, 0, DrawStyle.ELLIPSIS, 200);
        super.paint(graphics);
    }

    public void layout(int width, int height) {
        ourFont = this.getFont();
        setExtent(500, ourFont.getHeight());
    }

    protected void onDisplay() {
        startScroll();
    }

    protected void onUnfocus() {
        startScroll();
    }

    private void startScroll() {
        // Start scrolling
        final String fullText = this.getText();
        if (_scrollTimer == null) {
            _scrollTimer = new Timer();
            _scrollTimerTask = new TimerTask() {
                public void run() {
                    currentChar = currentChar + 4;
                    if (currentChar > fullText.length()) {
                        currentChar = 0;
                    }
                    invalidate();
                }
            };
            _scrollTimer.scheduleAtFixedRate(_scrollTimerTask, 0, 300);
        }
    }

    protected void onFocus(int direction) {
        if (_scrollTimer != null) {
            _scrollTimerTask.cancel();
            _scrollTimer.cancel();
            _scrollTimer = null;
            _scrollTimerTask = null;
        }
    }

    protected boolean navigationMovement(int dx, int dy, 
        int status, int time) {
        currentText = this.getText();
        int oldCurrentChar = currentChar;
        if (Math.abs(dx) > Math.abs(dy)) {
            // horizontal scroll
            if (dx > 0) {
                currentChar = Math.min(currentText.length() - 1,
                        currentChar + 1);
            } else if (dx < 0) {
                currentChar = Math.max(0, currentChar - 1);
            }
            if (oldCurrentChar != currentChar) {
                this.invalidate();
            }
            return true;
        } else {
            return super.navigationMovement(dx, dy, status, time);
        }
    }
}
//http://stackoverflow.com/questions/4468380/android-textview-change-text-color-on-click
You can create your own TextView class that extends the Android TextView class and override the onTouchEvent(MotionEvent event)

You can then modify the instances text color based on the MotionEvent passed.

For example:

@Override
public boolean onTouchEvent(MotionEvent event) {
    if (event.getAction() == MotionEvent.ACTION_DOWN) {
       // Change color
    } else if (event.getAction() == MotionEvent.ACTION_UP) {
       // Change it back
    }
    return super.onTouchEvent(event);
}
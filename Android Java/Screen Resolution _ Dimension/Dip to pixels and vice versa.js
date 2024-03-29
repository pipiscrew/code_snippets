//50 is our needed 50dip value
//tested&working
int dip = (int) (50 * getBaseContext().getResources().getDisplayMetrics().density + 0.5f);

//http://stackoverflow.com/questions/4605527/converting-pixels-to-dp-in-android
/**
 * This method convets dp unit to equivalent device specific value in pixels. 
 * 
 * @param dp A value in dp(Device independent pixels) unit. Which we need to convert into pixels
 * @param context Context to get resources and device specific display metrics
 * @return A float value to represent Pixels equivalent to dp according to device
 */
public static float convertDpToPixel(float dp,Context context){
    Resources resources = context.getResources();
    DisplayMetrics metrics = resources.getDisplayMetrics();
    float px = dp * (metrics.densityDpi/160f);
    return px;
}
/**
 * This method converts device specific pixels to device independent pixels.
 * 
 * @param px A value in px (pixels) unit. Which we need to convert into db
 * @param context Context to get resources and device specific display metrics
 * @return A float value to represent db equivalent to px value
 */
public static float convertPixelsToDp(float px,Context context){
    Resources resources = context.getResources();
    DisplayMetrics metrics = resources.getDisplayMetrics();
    float dp = px / (metrics.densityDpi / 160f);
    return dp;

}
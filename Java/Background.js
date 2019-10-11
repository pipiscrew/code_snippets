//http://www.blackberry.com/knowledgecenterpublic/livelink.exe/fetch/2000/348583/800332/800505/800608/How_To_-_Use_a_background_image_in_application_screens.html?nodeid=1187850&vernum=0

Bitmap backgroundBitmap = Bitmap.getBitmapResource("background.png");

HorizontalFieldManager horizontalFieldManager = new
HorizontalFieldManager(HorizontalFieldManager.USE_ALL_WIDTH |
HorizontalFieldManager.USE_ALL_HEIGHT){

//Override the paint method to draw the background image.
public void paint(Graphics graphics)
{

//Draw the background image and then call super.paint
//to paint the rest of the screen.
graphics.drawBitmap(0, 0, graphics.getScreenWidth(), graphics.getScreenHeight(),
backgroundBitmap, 0, 0);
super.paint(graphics);
}
};




With BlackBerry® Device Software 4.6 and later, backgrounds can be added to any type of field, including managers and screens without having to override the paint method.

You can create any of the following types of backgrounds:

    * Solid color
    * Transparent
    * Linear gradient
    * Bitmap

To use background images, you must create a Background object using net.rim.device.api.ui.decor.BackgroundFactory as in the following code:

Background bg = BackgroundFactory.createSolidBackground(int colour);
Background bg = BackgroundFactory.createSolidTransparentBackground(int colour, int alpha);
Background bg = BackgroundFactory.createLinearGradientBackground(int color top left, int color top right, int color bottom right, int bottom left);
Background bg = BackgroundFactory.createBitmapBackground(Bitmap bitmap);
Background bg = BackgroundFactory.createBitmapBackground(Bitmap bitmap, int positionX, int positionY, int repeat);

where

    * colour is the value 0x00RRGGBB (red, green, blue)
    * alpha is the transparency level (from 0: clear to 255: opaque)
    * Bitmap is an image usually created from the file as in the following example:

      Bitmap bm = Bitmap.getBitmapResource("sample.png");
    * positionX is the horizontal bitmap anchoring using any of the following positions:
          o POSITION_X_LEFT
          o POSITION_X_CENTER
          o POSITION_X_RIGHT
    * positionY is the vertical bitmap anchoring using any of the following positions:
          o POSITION_Y_LEFT
          o POSITION_Y_CENTER
          o POSITION_Y_RIGHT
    * repeat is the tiling option that can be any following values:
          o REPEAT_NONE
          o REPEAT_HORIZONTAL
          o REPEAT_VERTICAL
          o REPEAT_BOTH
          o REPEAT_SCALE_TO_FIT

To assign background to the specific field, manager or screen, the following is used:

    * field.setBackground(Background bg);
    * field.setBackground(int visual, Background bg);
    * field.setVisualState(int visual);

where

    * bg is the background created using BackgroundFactory or retrieved using the following:
          o field.getBackground();
          o field.getBackground(int visual);
    * visual is the visual state of the field, such as the following:
          o VISUAL_STATE_NORMAL
          o VISUAL_STATE_ACTIVE
          o VISUAL_STATE_FOCUS
          o VISUAL_STATE_DISABLED
          o VISUAL_STATE_DISABLED_FOCUS
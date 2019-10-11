//http://zaman91.wordpress.com/category/blackberry/
package com.mycompany;

import net.rim.device.api.system.Display;
import net.rim.device.api.ui.Color;
import net.rim.device.api.ui.Field;
import net.rim.device.api.ui.Font;
import net.rim.device.api.ui.Graphics;

//Custom ButtonField with custom color option used in LoginScreen
final class CustomButtonField extends Field {

// By default, the button is Dim Gray in color with a white background. It attains the custom color when focused
private int backgroundColor = Color.LIGHTGREY;
private int backgroundBorder = Color.LIGHTGREY;
private int textColor=Color.CORNFLOWERBLUE;
// Focus color of the button
private int color;
// Field width and height are calculated
private int fieldWidth;
private int fieldHeight;
// Text to be displayed in the button
private String text;
private int padding = 15;
private int arc = 20;
//width – ratio of screen width
public static final int SCREEN_WIDTH=1;
public  static  final int ONE_THIRD_SCREEN_WIDTH=2;
public  static final int TWO_THIRD_SCREEN_WIDTH=3;
public  static  final int THREE_FOURTH_SCREEN_WIDTH=4;
public  static  final int HALF_SCREEN_WIDTH=5;

public CustomButtonField(String label, int color) {
super(Field.FOCUSABLE | Field.FIELD_HCENTER);
// Text on the button
text = label;
this.color = color;
Font defaultFont = Font.getDefault();

// Height and width of the field
fieldHeight = defaultFont.getHeight() + padding;
fieldWidth = defaultFont.getAdvance(text) + (padding * 2);
this.setPadding(2, 2, 2, 2);
}
public CustomButtonField(String label, int color, long style)
{
super(Field.FOCUSABLE | style);
// Text on the button
text = label;
this.color = color;
Font defaultFont = Font.getDefault();

// Height and width of the field
fieldHeight = defaultFont.getHeight() + padding;
fieldWidth = defaultFont.getAdvance(text) + (padding * 2);
this.setPadding(2, 2, 2, 2);
}
//newly added
public CustomButtonField(String label, int color,int maxWidthScreenRatio)
{
super(Field.FOCUSABLE | Field.FIELD_HCENTER);
// Text on the button
text = label;
this.color = color;
Font defaultFont = Font.getDefault();
this.setPadding(2, 2, 2, 2);
// Height and width of the field
fieldHeight = defaultFont.getHeight() + padding;
//fieldWidth = defaultFont.getAdvance(text) + (padding * 2);
switch(maxWidthScreenRatio)
{
case SCREEN_WIDTH:
//left-right margin
fieldWidth = Display.getWidth()-10*2;
break;
case ONE_THIRD_SCREEN_WIDTH:
//fieldWidth = ((Graphics.getScreenWidth() * 1) / 3)+ (padding * 2);
fieldWidth = ((Display.getWidth() * 1) / 3)+ (padding * 2);
break;
case TWO_THIRD_SCREEN_WIDTH:
//fieldWidth = ((Graphics.getScreenWidth() * 2) / 3)+ (padding * 2);
fieldWidth = ((Display.getWidth() * 2) / 3)+ (padding * 2);
break;
case THREE_FOURTH_SCREEN_WIDTH:
fieldWidth = ((Display.getWidth() * 3) / 4) + (padding * 2);
break;
case HALF_SCREEN_WIDTH:
//fieldWidth = (Graphics.getScreenWidth()  / 2) – (padding * 2);
fieldWidth = (Display.getWidth() / 2) - (padding * 2);
break;
default:
fieldWidth = defaultFont.getAdvance(text) + (padding * 2);
}

}
protected void onFocus(int direction) {
// Color set
backgroundColor = color;
textColor = Color.WHITE;
invalidate();
super.onFocus(direction);
}

protected void onUnfocus() {
// Color set to dim gray
backgroundColor = Color.LIGHTGREY;
textColor = Color.CORNFLOWERBLUE;
invalidate();
super.onUnfocus();
}

protected boolean navigationClick(int status, int time) {
// Field change notify
fieldChangeNotify(1);
return false;
}

public int getPreferredWidth() {
return fieldWidth;
}

public int getPreferredHeight()
{
return fieldHeight;
}

protected void layout(int arg0, int arg1) {
setExtent(getPreferredWidth(), getPreferredHeight());
}

protected void drawFocus(Graphics graphics, boolean on) {
}

protected void fieldChangeNotify(int context) {
try
{
// Alert the change listener
this.getChangeListener().fieldChanged(this, context);
}
catch (Exception e)
{
System.out.println("te" + e.getMessage());
}
}
protected void paint(Graphics graphics) {
graphics.setColor(backgroundBorder);
// Fill a white rectangle
graphics.fillRoundRect(0, 0, fieldWidth, fieldHeight, arc, arc);
// Draw a white rectangle – (this will give a white ring like effect)
graphics.drawRoundRect(0, 0, fieldWidth, fieldHeight, arc, arc);
graphics.setColor(backgroundColor);
// Fill with the background color
graphics.fillRoundRect(1, 1, fieldWidth-2, fieldHeight-2, arc, arc);
//
graphics.setColor(textColor);
graphics.setFont(graphics.getFont().derive(Font.BOLD));
//graphics.drawText(text, padding – 1, padding / 2 – 1);
int x = (fieldWidth/2)-(graphics.getFont().getAdvance(text)/2);
graphics.drawText(text, x , padding/2-1);
}
}//end of class
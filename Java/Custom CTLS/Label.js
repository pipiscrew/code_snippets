//http://zaman91.wordpress.com/category/blackberry/
package com.mycompany;

import net.rim.device.api.system.Display;
import net.rim.device.api.ui.Color;
import net.rim.device.api.ui.Field;
import net.rim.device.api.ui.Font;
import net.rim.device.api.ui.Graphics;
import net.rim.device.api.ui.XYEdges;
import net.rim.device.api.ui.component.LabelField;

//Custom Label field used in LoginScreen
class CustomLabelField extends LabelField
{
private int _txtColor;
public CustomLabelField(String label)
{
super(label, LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH | LabelField.RIGHT);
_txtColor = Color.DARKBLUE;
setPadding(new XYEdges(2,15,0,0));
}
public CustomLabelField(String label,long style)
{
super(label,style);
_txtColor = Color.DARKBLUE;
setPadding(new XYEdges(2,15,0,0));
}
public CustomLabelField(String label,int color)
{
super(label, LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH | LabelField.RIGHT);
_txtColor = color;
setPadding(new XYEdges(2,15,0,0));
}

protected void paint(Graphics g) {
// text is displayed in white
//g.setColor(Color.WHITE);
g.setColor(_txtColor);
super.paint(g);
}

protected void layout(int width, int height) {
// occupies 5/12 (approx. half) of the screen width
super.layout(Display.getWidth()*4/12, height);
//setExtent(width, height)
}
}
//http://davidjhinson.wordpress.com/2010/02/26/simple-list-ui-using-the-blackberry-sdk/
Here is an ObjectListField that displays a graphic and a text message:

import net.rim.device.api.system.Display;
import net.rim.device.api.ui.Graphics;
import net.rim.device.api.ui.component.ListField;
import net.rim.device.api.ui.component.ObjectListField;

public class MainMenuList extends ObjectListField {

int _offset = Display.getWidth() / 2;
int _height = 27;

public void drawListRow(ListField list, Graphics g, int i, int y, int w) {
MainMenuData rowData = (MainMenuData)get(list, i);
setRowHeight(_height);
// I want a gray highlight, not the default blackberry blue.
if(list.getSelectedIndex() == i)
{
g.setColor(0xCFCFCF);
g.fillRect(0,(i*_height),Display.getWidth(),_height);
g.setColor(0x000000);
}
else {
g.setColor(0xFFFFFF);
g.fillRect(0,(i*_height),Display.getWidth(),_height);
g.setColor(0x000000);
}
g.drawBitmap(_offset - 80, y, rowData.getBitmap().getWidth(), rowData.getBitmap().getHeight(), rowData.getBitmap(), 0, 0);
g.drawText(rowData.getText(), _offset - 60 + rowData.getBitmap().getWidth(), y);
}

}

And here is the setup, inside of a class that extends MainScreen:


MainMenuData mmr1 = new MainMenuData("Friends", Bitmap.getBitmapResource("friends.png"));
MainMenuData mmr2 = new MainMenuData("Public", Bitmap.getBitmapResource("world.png"));
MainMenuData mmr3 = new MainMenuData("Popular", Bitmap.getBitmapResource("toprated.png"));
MainMenuData mmr4 = new MainMenuData("Me", Bitmap.getBitmapResource("me.png"));
MainMenuData mmr5 = new MainMenuData("Options", Bitmap.getBitmapResource("options.png"));

MainMenuData[] items = new MainMenuData[] { mmr1, mmr2, mmr3, mmr4, mmr5 };
list.set(items);

add(list);
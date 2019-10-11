//http://www.codeproject.com/KB/Blackberry/EndToEndBlackBerryApp.aspx

private class MyObjectListField extends ObjectListField {
        
    private Bitmap icon = Bitmap.getBitmapResource("img/star_green.png");
    
    // We are going to take care of drawing the item.
    public void drawListRow(ListField listField, Graphics graphics, 
            int index, int y, int width) {
        if (null != icon) {
            int offsetY = (this.getRowHeight() - icon.getHeight())/2;
            graphics.drawBitmap(1,y + offsetY, icon.getWidth(),
                    icon.getHeight(),icon,0,0);
            graphics.drawText(mainMenuItems[index], 
                icon.getWidth() + 2, y, DrawStyle.ELLIPSIS, width);
        } else {
            graphics.drawText("- " + mainMenuItems[index], 0,
                y, DrawStyle.ELLIPSIS, width);
        }
    }
};
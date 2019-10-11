//http://gmariotti.blogspot.com/2013/10/how-to-export-view-as-bitmap.html

//A simple way to export the view is to use following code:
    Bitmap bitmap = Bitmap.createBitmap(view.getWidth(), view.getHeight(), 
                                       Bitmap.Config.ARGB_8888);
    Canvas canvas = new Canvas(bitmap);
    view.draw(canvas);
Pay attention where you will use this code.

//If you use this in onCreate() method, the View didn't go through a layout, so its size is null (0x0).
//In these cases you have to use something like this before drawing the bitmap:
    view.measure(widthSpec, heightSpec);
    view.layout(left, top, right, bottom);
//An example:
    int spec = MeasureSpec.makeMeasureSpec(0,MeasureSpec.UNSPECIFIED);
    view.measure(spec,spec);
    view.layout(0, 0, view.getMeasuredWidth(), view.getMeasuredHeight());

    Bitmap b = Bitmap.createBitmap(view.getWidth(), view.getHeight(), 
                                   Bitmap.Config.ARGB_8888);
    Canvas canvas = new Canvas(bitmap);
    view.draw(canvas);
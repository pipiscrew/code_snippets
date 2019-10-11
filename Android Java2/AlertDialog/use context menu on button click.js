//http://www.stealthcopter.com/blog/2010/04/android-context-menu-example-on-long-press-gridview/

import android.view.ContextMenu;  
import android.view.View;  
import android.view.ContextMenu.ContextMenuInfo;  

//onCreate
Button btn = (Button) findViewById(R.id.button_example);  
registerForContextMenu(btn);  

//override
 @Override  
   public void onCreateContextMenu(ContextMenu menu, View v,ContextMenuInfo menuInfo) {  
super.onCreateContextMenu(menu, v, menuInfo);  
    menu.setHeaderTitle("Context Menu");  
    menu.add(0, v.getId(), 0, "Action 1");  
    menu.add(0, v.getId(), 0, "Action 2");  
}  

   @Override  
public boolean onContextItemSelected(MenuItem item) {  
        if(item.getTitle()=="Action 1"){function1(item.getItemId());}  
    else if(item.getTitle()=="Action 2"){function2(item.getItemId());}  
    else {return false;}  
return true;  
}  
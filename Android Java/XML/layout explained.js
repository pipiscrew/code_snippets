FrameLayout : Layout that acts as a view frame to display a single object.

RelativeLayout :Enables you to specify the location of child objects relative to each other (child A to the left of child B)
 or to the parent (aligned to the top of the parent).

LinearLayout :A layout that organizes its children into a single horizontal or vertical row. It creates a scrollbar 
if the length of the window exceeds the length of the screen.

TableLayout :A tabular layout with an arbitrary number of rows and columns, each cell holding the widget of your choice.
 The rows resize to fit the largest column. The cell borders are not visible.
 
 <*>
 
fill_parent will make the width or height of the element to be as large as the parent element, in other words, the container.

wrap_content will make the width or height be as large as needed to contain the elements within it.

//when RelativeLayout
 android:layout_alignParentBottom="true"
 android:layout_alignParentLeft="true"
 
android:layout_below="@id/horizontalScrollView1"
android:layout_above="@+id/causebuttonsupport"
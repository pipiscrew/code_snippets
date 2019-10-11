-Fix listview item height with General.setListViewHeightBasedOnChildren
-Scrollview can grow with fillViewport
-Scroll to Top

WARNING the listview_item.xml (filled on adapter) MUST contains LinearLayouts non Relatives. On old devices users got

java.lang.NullPointerException at android.widget.RelativeLayout.onMeasure(RelativeLayout.java)

//source - http://stackoverflow.com/a/8406253/1320686
<ScrollView
        android:id="@+id/product_detail_scrollView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@+id/product_details"
        android:fillViewport="true" >
 
        <RelativeLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" >
.
.
        <ListView
            android:id="@+id/product_detail_lstv"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:focusable="false"
            android:layout_below="@+id/x"
            android:layout_marginBottom="2dip"
            android:divider="#c4cacb"
            android:dividerHeight="2dp" />
    </RelativeLayout>
</ScrollView>
 
 
...fill listview
.
..
} finally {
    lstv_adapter.notifyDataSetChanged();
 
    //scroll to top
    ((ScrollView) findViewById(R.id.product_detail_scrollView)).smoothScrollTo(0,0);
 
    //fix listview height
    General.setListViewHeightBasedOnChildren(lstv);
}
 
public final class General {
 
    public static void setListViewHeightBasedOnChildren(ListView listView) {
        ListAdapter listAdapter = listView.getAdapter(); 
        if (listAdapter == null) {
            // pre-condition
            return;
        }
 
        int totalHeight = 0;
        for (int i = 0; i < listAdapter.getCount(); i++) {
            View listItem = listAdapter.getView(i, null, listView);
            listItem.measure(0, 0);
            totalHeight += listItem.getMeasuredHeight();
        }
 
        ViewGroup.LayoutParams params = listView.getLayoutParams();
        params.height = totalHeight + (listView.getDividerHeight() * (listAdapter.getCount() - 1));
        listView.setLayoutParams(params);
        listView.requestLayout();
    }     
}
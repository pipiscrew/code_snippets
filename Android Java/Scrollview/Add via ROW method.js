//http://stackoverflow.com/questions/17242493/android-adding-items-dynamically-to-scrollview

//a layout like this:
<ScrollView 
    android:layout_width="match_parent"
    android:layout_height="match_parent">


            <TableLayout
                android:id="@+id/tableLayoutList"
                android:layout_width="match_parent"
                android:layout_height="wrap_content" /> 

</ScrollView>

//And have my row defined like this (mRowLayout.xml):

<TableRow xmlns:android="http://schemas.android.com/apk/res/android"
android:id="@+id/LinearLayoutRow"
android:layout_width="match_parent"
android:layout_height="match_parent">

    <CheckBox
        android:id="@+id/checkBoxServEmail"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />
</TableRow>

//And then I use the following code to inflate my row:

private void fillTable(View v, Cursor c) {

TableLayout ll = (TableLayout) v.findViewById(R.id.tableLayoutList);

View mTableRow = null;
int i = 0;
while(!c.isAfterLast()){
    i++;
    mTableRow = (TableRow) View.inflate(getActivity(), R.layout.mRowLayout, null);

     CheckBox cb = (CheckBox)mTableRow.findViewById(R.id.checkBoxServEmail);
     cb.setText( c.getString(c.getColumnIndex(Empleado.EMAIL)));


     mTableRow.setTag(i);

    //add TableRows to TableLayout
    ll.addView(mTableRow);

    c.moveToNext();
}
}
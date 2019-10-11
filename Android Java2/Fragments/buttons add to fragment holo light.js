//http://stackoverflow.com/a/9809697
//http://stackoverflow.com/a/25610531

    <LinearLayout
        style="?android:buttonBarStyle"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal" >

        <Button
            android:id="@+id/btn_save"
            style="?android:attr/borderlessButtonStyle"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="@string/save" />

        <Button
            android:id="@+id/btn_cancel"
            style="?android:attr/borderlessButtonStyle"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="@string/cancel" />
    </LinearLayout>
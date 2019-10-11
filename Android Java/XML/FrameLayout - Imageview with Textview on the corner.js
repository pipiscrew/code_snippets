//with textview @ imageview bottom-right corner

    <FrameLayout
        android:id="@+id/frmLogo"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:paddingBottom="4dp" >

        <ImageView
            android:id="@+id/logoACT2supp"
            android:layout_width="90dp"
            android:layout_height="90dp"
            android:scaleType="fitStart" />

        <TextView
            android:id="@+id/datesACT2supp"
            android:layout_width="70dp"
            android:layout_height="wrap_content"
            android:layout_gravity="bottom|right"
            android:background="#000000"
            android:gravity="center_horizontal"
            android:textColor="#FFFFFF"
            android:textSize="15sp" />
    </FrameLayout>
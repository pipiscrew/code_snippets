sc.setVisibility(View.VISIBLE);

//when setted as gone, does take place to layout

            <LinearLayout
                android:id="@+id/socialSPONSORLinear"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_below="@id/txtSUPPdescrLarge"
                android:layout_centerHorizontal="true"
                android:orientation="horizontal"
                android:paddingBottom="13dp"
                android:paddingTop="13dp" >

                <ImageView
                    android:id="@+id/FBsponsor"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_marginRight="10dp"
                    android:onClick="btnSOCIALsponsor_Click"
                    android:src="@drawable/facebook_square"
                    android:visibility="gone" />

                <ImageView
                    android:id="@+id/TWsponsor"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:onClick="btnSOCIALsponsor_Click"
                    android:src="@drawable/twitter_square"
                    android:visibility="gone" />
            </LinearLayout>
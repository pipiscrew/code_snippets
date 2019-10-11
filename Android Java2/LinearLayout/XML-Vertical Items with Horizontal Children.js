            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_below="@id/txtCAUSEdescrLarge"
                android:orientation="vertical"
                android:paddingLeft="10dp"
                android:paddingTop="5dp" >

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:paddingBottom="7dp" >

                    <TextView
                        android:id="@+id/txtCauseAddressLBL"
                        android:layout_width="80dp"
                        android:layout_height="wrap_content"
                        android:layout_below="@id/txtCAUSEdescrLarge"
                        android:gravity="right"
                        android:text="@string/address"
                        android:textSize="14sp" />

                    <TextView
                        android:id="@+id/txtCauseAddress"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:clickable="true"
                        android:gravity="left"
                        android:onClick="txtCauseAddress_Clicked"
                        android:textColor="@drawable/textview_click_color_cyan"
                        android:textSize="14sp" />
                </LinearLayout>

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:paddingBottom="7dp" >

                    <TextView
                        android:id="@+id/txtCauseTelephoneLBL"
                        android:layout_width="80dp"
                        android:layout_height="wrap_content"
                        android:gravity="right"
                        android:text="@string/telephone"
                        android:textSize="14sp" />

                    <TextView
                        android:id="@+id/txtCauseTelephone"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:clickable="true"
                        android:gravity="left"
                        android:onClick="txtCauseTelephone_Clicked"
                        android:textColor="@drawable/textview_click_color_cyan"
                        android:textSize="14sp" />
                </LinearLayout>

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:paddingBottom="7dp" >

                    <TextView
                        android:id="@+id/txtCauseEmailLBL"
                        android:layout_width="80dp"
                        android:layout_height="wrap_content"
                        android:gravity="right"
                        android:text="@string/email"
                        android:textSize="14sp" />

                    <TextView
                        android:id="@+id/txtCauseEmail"
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:clickable="true"
                        android:gravity="left"
                        android:onClick="txtCauseEmail_Clicked"
                        android:textColor="@drawable/textview_click_color_cyan"
                        android:textSize="14sp" />
                </LinearLayout>
            </LinearLayout>
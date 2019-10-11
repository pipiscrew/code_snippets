//http://wptrafficanalyzer.in/blog/a-popup-menu-example-in-android/

//@ R.menu.main_activity2 we have build the menu as :
			<menu xmlns:android="http://schemas.android.com/apk/res/android" >
			
			    <item
			        android:id="@+id/causes"
			        android:title="Causes"/>
			    <item
			        android:id="@+id/categories"
			        android:title="Categories"/>
			    <item
			        android:id="@+id/help"
			        android:showAsAction="always"
			        android:title="Help"/>
			
			</menu>


//on button
		PopupMenu popup = new PopupMenu(MainActivity2.this,view);

        /** Adding menu items to the popumenu */
        popup.getMenuInflater().inflate(R.menu.main_activity2, popup.getMenu());

        /** Defining menu item click listener for the popup menu */
        popup.setOnMenuItemClickListener(new OnMenuItemClickListener() {

            @Override
            public boolean onMenuItemClick(MenuItem item) {
                Toast.makeText(getBaseContext(), "You selected the action : " + item.getTitle(), Toast.LENGTH_SHORT).show();
                return true;
            }
        });

        /** Showing the popup menu */
        popup.show();
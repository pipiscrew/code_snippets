//http://developer.android.com/guide/topics/ui/actionbar.html

In order to make sure there aren't Views under your Action Bar, you can add a top margin to it in the XML.

<SomeView
    ...
    android:layout_marginTop="?android:attr/actionBarSize" />
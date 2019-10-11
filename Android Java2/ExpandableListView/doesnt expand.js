//http://stackoverflow.com/questions/19732816/android-expandablelistview-does-not-expand-not-clickable

the checkbox inside the groupheader was focusable, stealing all the clicks away from the list. to solve this problem simply set the focusable attribute of the checkbox/button in your list to false with either:

checkbox.setFocusable(false); in java, or android:focusable="false"
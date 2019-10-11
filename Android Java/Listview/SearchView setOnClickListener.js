public static void setSearchViewOnClickListener(View v, OnClickListener listener) {
    if (v instanceof ViewGroup) {
        ViewGroup group = (ViewGroup)v;
        int count = group.getChildCount();
        for (int i = 0; i < count; i++) {
            View child = group.getChildAt(i);
            if (child instanceof LinearLayout || child instanceof RelativeLayout) {
                setSearchViewOnClickListener(child, listener);
            }
 
            if (child instanceof TextView) {
                TextView text = (TextView)child;
                text.setFocusable(false);
            }
            child.setOnClickListener(listener);
        }
    }
}
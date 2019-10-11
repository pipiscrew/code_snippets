//http://stackoverflow.com/questions/2335813/how-to-inflate-one-view-with-an-layout

RelativeLayout item = (RelativeLayout)findViewById(R.id.item);
View child = getLayoutInflater().inflate(R.layout.child, null);
item.addView(child);
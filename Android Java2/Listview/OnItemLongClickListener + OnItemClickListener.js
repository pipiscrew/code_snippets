//http://stackoverflow.com/a/19858446

ListView listview = (ListView) findViewById(R.id.yourlistviewId);

listview.setOnItemClickListener(new OnItemClickListener() {

            @Override
            public void onItemClick(AdapterView<?> arg0, View v, int position, long id) {
                adapter.disableHighlightedItem();
            }

        });


listview.setOnItemLongClickListener(new OnItemLongClickListener() {

            @Override
            public boolean onItemLongClick(AdapterView<?> arg0, View arg1, int position, long arg3) {
        		adapter.highlightImageView(position);
            }

        });
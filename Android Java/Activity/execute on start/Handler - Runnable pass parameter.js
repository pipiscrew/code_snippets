
//must be final
				final int position = listView.getFirstVisiblePosition();
				
				adapter.notifyDataSetChanged();
				listView.post(new Runnable() {
					@Override
					public void run() {
						listView.setSelection(position);
					}
				});
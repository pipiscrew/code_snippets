				post2social s = new post2social(Competition_Details.this, message, "", "Contests4Causes - the micro-fundraising mobile app", "", "http://contests4causes.com/newsite/details.php?id=" + Competition_Key, Competition_Logo);

				s.setListener(new post2socialInterface() {
				
				
					@Override
					public void responseResult(String val) {
						final String tmp = val;

						runOnUiThread(new Runnable() {
							public void run() {
								if (progress != null)
									progress.dismiss();
								
									Toast.makeText(Competition_Details.this,tmp, Toast.LENGTH_LONG).show();
							}
						});
					}
				
				});
				
//in adapter
		    				((Activity)c).runOnUiThread(new Runnable() { // manipulate GUI
		    					public void run() {
		    						if (tmp.equals("ok"))
		    							Toast.makeText(c, "is valid!", Toast.LENGTH_LONG).show();
		    						else 
		    							Toast.makeText(c, tmp, Toast.LENGTH_LONG).show();
		    					}
		    				});
When we like to have progressdialog and show the "processing 0 to 100" etc.
we have to know that only on 1 async task that called by activity/view can do it,
couldnt be updated from 2nd AsyncTask (if we have AsyncTask in AsyncTask).


//more solutions @ 
//http://stackoverflow.com/questions/3028306/download-a-file-with-android-and-showing-the-progress-in-a-progressdialog

	class asyncTask extends AsyncTask<Void, Integer, Void> {

		@Override
		protected void onPostExecute(Void result) {
			// TODO Auto-generated method stub
			// do something after loading
		}

		@Override
		protected void onPreExecute() {
			// TODO Auto-generated method stub
			dialog = new ProgressDialog(MainActivity.this);
			dialog.setMessage("updating catalog");
			// dialog.setIndeterminate(true);
			dialog.setCancelable(false);
			dialog.setProgressStyle(ProgressDialog.STYLE_HORIZONTAL);
			dialog.setProgress(0);
			dialog.setMax(100);
			dialog.show();

		}

		@Override
		protected void onProgressUpdate(Integer... values) {
				dialog.setProgress(values[0]);

		}

		@Override
		protected Void doInBackground(Void... params) {

			try {
					/////////////////////////////////////////// IMAGE DOWNLOADER
					int processingIMG=0;
					
					//create application folder if doesnt exist.
					General.createSDdir(getBaseContext(), "/");
					
					try {
						String myPattern = "<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>";
						Pattern p = Pattern.compile(myPattern);
						Matcher m = p.matcher(General.JSONtxt.replace("\\", ""));
						String link = null;
						
						dialog.setMax(General.JSONtxt.split("<img").length);
						
						while (m.find()) {
							processingIMG+=1;
							
							publishProgress(processingIMG);
							//dialog.setProgress(processingIMG);
							
							link = m.group(1);
							General.downloadFile(link,
									"/sdcard/download/takis/" + General.extractFilename(link));

						}

					} catch (Exception e) {

					}
					////////////////////////////////////////// IMAGE DOWNLOADER
				}
			} catch (Exception e) {
				System.out.println("ERROR - null" + e.getMessage());
			}

			return null;
		}

	}
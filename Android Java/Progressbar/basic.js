Declare your progress dialog:

ProgressDialog progress;
//When you're ready to start the progress dialog:

progress = ProgressDialog.show(this, "dialog title", "dialog message", true);
//and to make it go away when you're done:

progress.dismiss();


//Here's a little thread example for you:

// Note: declare ProgressDialog progress as a field in your class.

progress = ProgressDialog.show(this, "dialog title",
  "dialog message", true);

new Thread(new Runnable() {
  @Override
  public void run()
  {
    // do the thing that takes a long time

    runOnUiThread(new Runnable() {
      @Override
      public void run()
      {
        progress.dismiss();
      }
    });
  }
}).start();
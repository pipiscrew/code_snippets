//http://stackoverflow.com/questions/5161951/android-only-the-original-thread-that-created-a-view-hierarchy-can-touch-its-vi

runOnUiThread(new Runnable() {
     public void run() {

//stuff that updates ui

    }
});
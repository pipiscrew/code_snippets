//simple just add this to your main form
//when user press the navigation button (options) your new command appear there!

protected void makeMenu(Menu menu, int instance) {
 super.makeMenu(menu, instance);
 menu.add(new MenuItem("About", 10, 20) {
  public void run() {
   doAbout();
  }
 });

 menu.add(new MenuItem("Logout", 20, 10) {
  public void run() {
   doLogout();
  }
 });

}

private void doLogout() {
 //TODO: Implement doLogout
}

private void doAbout() {
 //TODO: Implement doAbout
}
DialogFieldManager manager = new DialogFieldManager();
manager.addCustomField(new LabelField("Please Wait..."));
final Screen popup = new PopupScreen(manager);
UiApplication.getUiApplication().invokeLater(new Runnable() {
 public void run() {
  UiApplication.getUiApplication().pushScreen(popup);
 }
});

//Do something long and important

UiApplication.getUiApplication().invokeLater(new Runnable() {
 public void run() {
  UiApplication.getUiApplication().popScreen(UiApplication.getUiApplication().getActiveScreen());
 }
});
Dialog.alert("Goodbye!");

or only when we are @ debug (output to console tab)
System.out.println("Button pressed!");

protected static void showError(final String message) {
	UiApplication.getUiApplication().invokeLater(new Runnable() {
		public void run() {
			Dialog.alert(message);
		}
	});
}
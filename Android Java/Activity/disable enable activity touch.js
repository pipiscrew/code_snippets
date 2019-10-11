//http://stackoverflow.com/questions/4280608/disable-a-whole-activity-from-user-action

//disable
getWindow().setFlags(WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE,
WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE);

//enable
getWindow().clearFlags(WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE);
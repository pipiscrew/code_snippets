//http://stackoverflow.com/questions/7203668/how-permission-can-be-checked-at-runtime-without-throwing-securityexception

private boolean checkWriteExternalPermission()
{

    String permission = "android.permission.WRITE_EXTERNAL_STORAGE";
    int res = getContext().checkCallingOrSelfPermission(permission);
    return (res == PackageManager.PERMISSION_GRANTED);            
}

//or
private boolean doesUserHavePermission()
{
    int result = context.checkCallingOrSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);
    return result == PackageManager.PERMISSION_GRANTED;
}

//or
PackageManager pm = context.getPackageManager();
int hasPerm = pm.checkPermission(
    android.Manifest.permission.WRITE_EXTERNAL_STORAGE, 
    context.getPackageName());
if (hasPerm != PackageManager.PERMISSION_GRANTED) {
   // do stuff
}
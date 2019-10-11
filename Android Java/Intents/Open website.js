//http://stackoverflow.com/questions/2762861/android-goto-http-url-on-button-click

public void openWebURL( String inURL ) {
    Intent browse = new Intent( Intent.ACTION_VIEW , Uri.parse( inURL ) );

    startActivity( browse );
}
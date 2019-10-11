@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
  if ((keyCode == KeyEvent.KEYCODE_BACK) && mWebView.canGoBack()) {
    mWebView.goBack();
    return true;
  }
  return super.onKeyDown(keyCode, event);
}
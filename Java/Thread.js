  public void parse(final String url) {
    Thread t = new Thread() {
      public void run() {
        // set up the network connection
        HttpConnection hc = null;
        
        try {
          hc = (HttpConnection)Connector.open(url);
          parse(hc.openInputStream());
        }
        catch (IOException ioe) {
          mRSSListener.exception(ioe);
        }
        finally {
          try { if (hc != null) hc.close(); }
          catch (IOException ignored) {}
        }
      }
    };
    t.start();
  }
		      try
		      {
		      ..
		      ..
		      ..
		      }
		      catch (Exception e)
		      {
		          System.out.println("Failed to create user interface components");
		      }

      if (_inputStream != null) try {_inputStream.close();}catch (Exception e) {}
      if (_outputStream != null) try {_outputStream.close();}catch (Exception e) {}
      if (_connection != null) try {_connection.close();}catch (Exception e) {}




	public static boolean downloadFile(String URL, String pathFilename) {
		// from web
		try {
			URL = URL.replace(" ","%20"); //for spaces
			
			//Bitmap bitmap = null;
			URL imageUrl = new URL(URL);
			
			//make valid URL
//			URI uri = new URI(imageUrl.getProtocol(), imageUrl.getUserInfo(), imageUrl.getHost(), imageUrl.getPort(), imageUrl.getPath(), imageUrl.getQuery(), imageUrl.getRef());
//			imageUrl = uri.toURL();
			//
			
			
			HttpURLConnection conn = (HttpURLConnection) imageUrl
					.openConnection();
			conn.setConnectTimeout(30000);
			conn.setReadTimeout(30000);
			conn.setInstanceFollowRedirects(true);
			InputStream is = conn.getInputStream();
			OutputStream os = new FileOutputStream(pathFilename);
			CopyStream(is, os);
			os.close();
			// bitmap = decodeFile(f);
			// return bitmap;
			return true;
		} catch (Exception ex) {
				System.out.println("sdfasdfSD - " + ex.getMessage());
			return false;
		}

	}
	
	
	// copy the contains from inputstream to outputstream
	public static void CopyStream(InputStream is, OutputStream os) {
		final int buffer_size = 1024;
		try {
			byte[] bytes = new byte[buffer_size];
			for (;;) {
				int count = is.read(bytes, 0, buffer_size);
				if (count == -1)
					break;
				os.write(bytes, 0, count);
			}
		} catch (Exception ex) {
		}
	}
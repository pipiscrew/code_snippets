//verified is the same as OpenSSL

	public void btnSIGN_Click(View v) {
		try {
			packageInfo = getPackageManager().getPackageInfo("com.example.test2.test2.fb", PackageManager.GET_SIGNATURES);
			for (Signature signature : packageInfo.signatures) {
				MessageDigest md = MessageDigest.getInstance("SHA");
				md.update(signature.toByteArray());
				String key = new String(Base64.encode(md.digest(), 0));
				Toast.makeText(MainActivity.this, key + "\r\nsee LogCat", Toast.LENGTH_LONG).show();
				Log.d("KeyHash:", key);

			}
		} catch (NameNotFoundException e1) {
			Log.e("Name not found", e1.toString());
		}

		catch (NoSuchAlgorithmException e) {
			Log.e("No such an algorithm", e.toString());
		} catch (Exception e) {
			Log.e("Exception", e.toString());
		}

	}
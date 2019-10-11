          Intent localIntent = new Intent("android.intent.action.DELETE", Uri.parse(String.format("package:%s", arrayOfObject)));
          EnrollmentActivity.this.startActivity(localIntent);
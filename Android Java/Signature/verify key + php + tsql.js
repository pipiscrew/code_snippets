//login.java
String sign = "";
String version = "";
PackageInfo info;

try {
	info = getPackageManager().getPackageInfo(getPackageName(), PackageManager.GET_SIGNATURES);
	version = String.valueOf(info.versionCode);

	for (Signature signature : info.signatures) {
		MessageDigest md = MessageDigest.getInstance("SHA");
		md.update(signature.toByteArray());
		sign = Base64.encodeToString(md.digest(), Base64.DEFAULT).replace("\n", "");
		// Log.e("key_hash:", sign);
	}
} catch (Exception e1) {
	sign = "pipiscrew";
	e1.printStackTrace();
}

//using - http://loopj.com/android-async-http/
AsyncHttpClient client = new AsyncHttpClient();
RequestParams clparam = new RequestParams();

clparam.add("mail", Dynomite.user_mail);
clparam.add("password", Dynomite.user_password);
clparam.add("today_sign", sign);
clparam.add("today_version", version);

client.post(this, Dynomite.PHP_baseURL + getString(R.string.filename_user_login), clparam, new AsyncHttpResponseHandler() {

	@Override
	public void onFailure(Throwable t, String error) {
		General.mes(SplashScreen.this, "no network");
	}

	@Override
	public void onSuccess(String response) {
		if (response == null) {
			General.alert_user(SplashScreen.this, response, getString(R.string.empty_response));
			return;
		}

		String resp = response;

		int resp_validation = -1;
		try {
			resp_validation = Integer.valueOf(resp);
		} catch (NumberFormatException e) {
			resp_validation = -1;
		} finally {
			splash_timer();
		}

		if (resp_validation == 1) {
			General.mes(SplashScreen.this, getString(R.string.logged_in));
		} else if (resp_validation == 0) {
			Dynomite.user_login_way = 0;
			General.mes(SplashScreen.this, getString(R.string.user_not_found));
		} else {
			Dynomite.user_login_way = 0;
			General.alert_user(SplashScreen.this, response, getString(R.string.server_error));
		}
	}
});
		
		
//PHP
if (!$_POST)
	die("E0x84654654");
	
if(!isset($_POST["mail"]) || !isset($_POST["password"]) || !isset($_POST["today_sign"]) || !isset($_POST["today_version"]))
    die("E0x23423");
 
require_once ('config.php');

try {

$db = connect_mysql();
	
}
catch (Exception $e)
{
	//echo  $e->getMessage();
	die("E1x83457");
}

$sign = getRow($db,"select * from app_details limit 1", null);

if (!$sign)
{
	echo json_encode(array("result" => 0, "error" => "ETx1"));
	return;
}
	
if ($sign["app_sign"] != $_POST["today_sign"])
{
	echo json_encode(array("result" => 0, "error" => "ETx2"));
	return;
}

if ($sign["app_version_code"] != $_POST["today_version"])
{
	echo json_encode(array("result" => 0, "error" => "ETx3"));
	return;
}

$res = getScalar($db,"select user_id from users where user_mail=? and user_password=?", array($_POST["mail"], $_POST["password"]));

if ($res)
{
	executeSQL($db,"update users set last_seen=? where user_id=?", array(date("Y-m-d H:i:s"), $res));
	
	$res = 1; //user found
}
else 
	$res = 0; //user not found

echo $res;

?>

//SQL
CREATE TABLE `app_details` (
  `app_version_code` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `app_sign` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_mail` varchar(50) NOT NULL DEFAULT '',
  `user_password` varchar(100) NOT NULL DEFAULT '',
  `last_seen` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

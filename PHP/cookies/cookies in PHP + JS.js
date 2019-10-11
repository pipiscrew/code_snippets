//http://www.pontikis.net/blog/create-cookies-php-javascript

#Create cookies with PHP#
//Use setcookie to create a cookie with PHP. This cookie will expire after 30 days.
//Using "/", cookie is available in all website (otherwise, select the directory you prefer).

$cookie_name = 'pontikis_net_php_cookie';
$cookie_value = 'test_cookie_set_with_php';
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), '/'); // 86400 = 1 day



#Read cookies with PHP#
//Use $_COOKIE to retrieve a cookie with PHP. Once the cookies have been set, they can be accessed on the next page load.

$cookie_name = 'pontikis_net_php_cookie';
if(!isset($_COOKIE[$cookie_name])) {
  print 'Cookie with name "' . $cookie_name . '" does not exist...';
} else {
  print 'Cookie with name "' . $cookie_name . '" value is: ' . $_COOKIE[$cookie_name];
}



#Update#
//Actually, there is not a way to update a cookie. Just set (again) this cookie using setcookie.

$cookie_name = 'pontikis_net_php_cookie';
$cookie_value = 'test_cookie_updated_with_php';
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), '/'); // 86400 = 1 day


#Delete#
//Actually, there is not a way to directly delete a cookie.
//Just use setcookie with expiration date in the past, to trigger the removal mechanism in your browser.

$cookie_name = 'pontikis_net_php_cookie';
unset($_COOKIE[$cookie_name]);
// empty value and expiration one hour before
$res = setcookie($cookie_name, '', time() - 3600);


##############
JAVASCRIPT
##############

#Create#
//Create cookies with Javascript
//Using document.cookie with following format:
document.cookie="name_here=value_here; expires=date_in_UTC_here; path=path_here";

//You many use a function like this one:

/**
 * Create cookie with javascript
 *
 * @param {string} name cookie name
 * @param {string} value cookie value
 * @param {int} days2expire
 * @param {string} path
 */
function create_cookie(name, value, days2expire, path) {
  var date = new Date();
  date.setTime(date.getTime() + (days2expire * 24 * 60 * 60 * 1000));
  var expires = date.toUTCString();
  document.cookie = name + '=' + value + ';' +
                   'expires=' + expires + ';' +
                   'path=' + path + ';';
}

//So, to create a cookie which will expire after 30 days:
var cookie_name = 'pontikis_net_js_cookie';
var cookie_value = 'test_cookie_created_with_javascript';
create_cookie(cookie_name, cookie_value, 30, "/");

#Read#
//document.cookie will return all cookies in one string as following: 
cookie1=value; cookie2=value; cookie3=value;
//So to get the value of a cookie you have to parse this string. You many use a function like this one:

/**
 * Retrieve cookie with javascript
 *
 * @param {string} name cookie name
 */
function retrieve_cookie(name) {
  var cookie_value = "",
    current_cookie = "",
    name_expr = name + "=",
    all_cookies = document.cookie.split(';'),
    n = all_cookies.length;
 
  for(var i = 0; i < n; i++) {
    current_cookie = all_cookies[i].trim();
    if(current_cookie.indexOf(name_expr) == 0) {
      cookie_value = current_cookie.substring(name_expr.length, current_cookie.length);
      break;
    }
  }
  return cookie_value;
}

//So, to retrieve a cookie with name "pontikis_net_js_cookie":

var cookie_name = 'pontikis_net_js_cookie';
var res = retrieve_cookie(cookie_name);
if(res) {
  alert('Cookie with name "' + cookie_name + '" value is ' + '"' res + '"');
} else {
  alert('Cookie with name "' + cookie_name + '" does not exist...');
}


#Update#
//Just, recreate cookie with new values:
var cookie_name = 'pontikis_net_js_cookie';
var cookie_name = 'test_cookie_updated_with_javascript';
create_cookie(cookie_name, cookie_value, 60, "/");


#Delete#
//Just give an expiration date in the past. Cookie value not needed.
You many use a function like this one:

/**
 * Delete cookie with javascript
 *
 * @param {string} name cookie name
 */
function delete_cookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}


//So, to delete a cookie:
var cookie_name = 'pontikis_net_js_cookie';
delete_cookie(cookie_name);
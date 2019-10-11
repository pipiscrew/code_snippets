//http://www.pontikis.net/tip/?id=30

	//check if is AJAX call
  	$isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
  	if(!$isAjax) {
    	header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    	exit;
  	}
  	
///author
/**
 * Check if request is an AJAX call
 *
 * @param string $script script path
 */
function check_is_ajax($script) {
  $isAjax = isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND
  strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
  if(!$isAjax) {
    trigger_error('Access denied - not an AJAX request...' . ' (' . $script . ')', E_USER_ERROR);
  }
}
Example
Put the following at the top of your AJAX call:

1
check_is_ajax(__FILE__); // prevent direct access
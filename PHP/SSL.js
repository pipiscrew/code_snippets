//http://stackoverflow.com/questions/3865143/php-what-do-i-have-to-code-to-use-https

if($_SERVER['SERVER_PORT'] !== 443 &&
   (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off')) {
  header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
  exit;
}
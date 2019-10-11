$query =  "SELECT * from users where 
user_name COLLATE nocase ='" . $u . "' and 
user_password COLLATE nocase ='" . $p . "' limit 1";
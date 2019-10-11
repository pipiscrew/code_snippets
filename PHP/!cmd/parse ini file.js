$params = parse_ini_file(sprintf('%s/parameters.ini', __DIR__), true);


$params['database']['host']
$params['database']['user']
$params['database']['password']

//the parameters.ini
[database]
    host = "localhost"
    port = ""
    user = "root"
    password = ""
    name = "test"

    $db = new PDO('sqlite:../dbase') or die("cannot open the database");

    $t = $_POST['CUSTOMERS'];

    $r = $db -> query("SELECT * FROM CUSTOMERS where CUST_ID=" . $t);

    //unicode
    header("Content-Type: application/json", true);
    if ($aRow = $r -> fetch(PDO::FETCH_ASSOC)) {
        echo json_encode($aRow);
    } else {
        echo json_encode(null);
    }
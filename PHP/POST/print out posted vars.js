//http://stackoverflow.com/questions/9332718/how-to-print-all-post-results-when-a-form-is-submitted

<?php print_r($_POST); ?>

//on paypal is the only way
//https://developer.paypal.com/docs/classic/ipn/ht_ipn/
$p_vardmp = file_get_contents('php://input');

//or

<table>
<?php 


    foreach ($_POST as $key => $value) {
        echo "<tr>";
        echo "<td>";
        echo $key;
        echo "</td>";
        echo "<td>";
        echo $value;
        echo "</td>";
        echo "</tr>";
    }


?>
</table>
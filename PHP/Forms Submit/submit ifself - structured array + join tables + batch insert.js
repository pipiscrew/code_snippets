<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<title>CMS</title>
<link href="assets/bootstrap.min.css" rel="stylesheet">

<?php
session_start();

include('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if(!isset($_POST['order_email']) || !isset($_POST['order_phone']) || !isset($_POST['order_billing_address']) || !isset($_POST['order_billing_city']) || !isset($_POST['order_billing_state']) || !isset($_POST['order_shipping_address']) || !isset($_POST['order_shipping_city']) || !isset($_POST['order_shipping_state'])){
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
		exit;
	}

	$db = connect();

	class product_record {
	    public $product_id;
	    public $product_item_price;
		public $quantity;
		public $product_price;
	}

	$list_products; // = array(product_record);
	$rec;
	
	
	$products = $_SESSION["cart_items"];
	
	//loop through cart items
	foreach($products as $product) {

		//get product details by *DB*
		$row = getRow($db,"select * from products where product_id=?",array($product["product_id"]));
		
		//sales or regular	
		if ($row["product_price_sale"] > 0 )
			$price=$row["product_price_sale"];
		else 
			$price=$row["product_price_regular"];
		//sales or regular
		
		//quantity
		$quantity = $product["quantity"];
		
		//product cost
		$product_cost = sprintf('%01.2f', $quantity*$price);
		
		//////////////////////////////////////////////
		$rec = new product_record();
		$rec->product_id = $row["product_id"];
		$rec->product_item_price = $price;
		$rec->quantity = $quantity;
		$rec->product_price = $product_cost;
		
		//add to array!	
		$list_products[] = $rec;
		//////////////////////////////////////////////
	
		$subtotal += $product_cost;
		$order_total += $product_cost;
	}
	

	

	$sql = "INSERT INTO `orders` (user_ip, subtotal, tax, tax_value, shipping_value, total_cost, order_type, order_firstname, order_lastname, order_email, order_phone, order_billing_address, order_billing_address2, order_billing_city, order_billing_state, order_billing_zip, order_billing_country, order_shipping_address, order_shipping_address2, order_shipping_city, order_shipping_state, order_shipping_zip, order_shipping_country, order_comment, daterec_added) VALUES (:user_ip, :subtotal, :tax, :tax_value, :shipping_value, :total_cost, :order_type, :order_firstname, :order_lastname, :order_email, :order_phone, :order_billing_address, :order_billing_address2, :order_billing_city, :order_billing_state, :order_billing_zip, :order_billing_country, :order_shipping_address, :order_shipping_address2, :order_shipping_city, :order_shipping_state, :order_shipping_zip, :order_shipping_country, :order_comment, :daterec_added)";
	$stmt = $db->prepare($sql);

	$stmt->bindValue(':user_ip' , $_SERVER['REMOTE_ADDR']);
	$stmt->bindValue(':subtotal' , $subtotal);
	$stmt->bindValue(':tax' , 0);
	$stmt->bindValue(':tax_value' , 0);
	$stmt->bindValue(':shipping_value' , 0);
	$stmt->bindValue(':total_cost' , $order_total);
	$stmt->bindValue(':order_type' , $_POST['trans_type']);
	$stmt->bindValue(':daterec_added' , date("Y-m-d H:i:s"));
	
	//form fields
	$stmt->bindValue(':order_firstname' , $_POST['order_firstname']);
	$stmt->bindValue(':order_lastname' , $_POST['order_lastname']);
	$stmt->bindValue(':order_email' , $_POST['order_email']);
	$stmt->bindValue(':order_phone' , $_POST['order_phone']);
	$stmt->bindValue(':order_billing_address' , $_POST['order_billing_address']);
	$stmt->bindValue(':order_billing_address2' , $_POST['order_billing_address2']);
	$stmt->bindValue(':order_billing_city' , $_POST['order_billing_city']);
	$stmt->bindValue(':order_billing_state' , $_POST['order_billing_state']);
	$stmt->bindValue(':order_billing_zip' , $_POST['order_billing_zip']);
	$stmt->bindValue(':order_billing_country' , $_POST['order_billing_country']);
	$stmt->bindValue(':order_shipping_address' , $_POST['order_shipping_address']);
	$stmt->bindValue(':order_shipping_address2' , $_POST['order_shipping_address2']);
	$stmt->bindValue(':order_shipping_city' , $_POST['order_shipping_city']);
	$stmt->bindValue(':order_shipping_state' , $_POST['order_shipping_state']);
	$stmt->bindValue(':order_shipping_zip' , $_POST['order_shipping_zip']);
	$stmt->bindValue(':order_shipping_country' , $_POST['order_shipping_country']);
	$stmt->bindValue(':order_comment' , $_POST['order_comment']);
	

	$stmt->execute();
	
	$order_id = $db->lastInsertId();
	
	$res = $stmt->rowCount();

	if($res == 1) //when added
	{
			$sql = "INSERT INTO `order_items` (order_id, product_id, product_item_cost, quantity, product_cost) VALUES (:order_id, :product_id, :product_item_cost, :quantity, :product_cost)";
			
		    if ($stmt = $db -> prepare($sql)) {
			
				for ($x=0; $x <= sizeof($list_products)-1 ; $x++){
					
					$stmt->bindValue(':order_id' , $order_id);
					$stmt->bindValue(':product_id' , $list_products[$x]->product_id);
					$stmt->bindValue(':product_item_cost' , $list_products[$x]->product_item_price);
					$stmt->bindValue(':quantity' , $list_products[$x]->quantity);
					$stmt->bindValue(':product_cost' , $list_products[$x]->product_price);

					$stmt->execute();

					$res = $stmt->rowCount();
					
					if($res != 1)
					{?>
						<br/>
						<div class="container">
							<div class="alert alert-danger">There was a problem (0xUXy1aNQj) with your order. Please try again.</div>	
						</div> 
					
					<?php
					exit;
					}
				}
				
			}
	}
	else 
	{?>
		<br/>
		<div class="container">
			<div class="alert alert-danger">There was a problem (2xGB5m8Uol) with your order. Please try again.</div>	
		</div> 
	
	<?php
	exit;
	}
?>


<br/>
<div class="container">
	<div class="alert alert-success">Thank you for your order. Your information has been received.</div>	
	
</div> 

<?
exit;
}
elseif (!isset($_GET["type"]) || ((strcmp ($_GET["type"], "cod") != 0) && (strcmp ($_GET["type"], "deposit") != 0)))
{
	die("error 0xWW2zoqhK");
}


?>

<!--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

<title>CMS</title>
<link href="assets/bootstrap.min.css" rel="stylesheet">-->

<script type='text/javascript' src='assets/jquery-1.11.0.min.js'></script>
<script type='text/javascript' src='assets/bootstrap.min.js'></script>

<script>
$(function() {

	$('#order_shipping_is_same').click(function(){

		if($('#order_shipping_is_same').prop('checked')) {

			$('#order_shipping_address').val($('#order_billing_address').val());
			$('#order_shipping_address2').val($('#order_billing_address2').val());
			$('#order_shipping_city').val($('#order_billing_city').val());
			$('#order_shipping_state').val($('#order_billing_state').val());
			$('#order_shipping_zip').val($('#order_billing_zip').val());
			$('#order_shipping_country').val($('#order_billing_country').val());

		} else {

			$("#order_shipping_address").val('');
			$('#order_shipping_address2').val('');
			$('#order_shipping_city').val('');
			$('#order_shipping_state').val('');
			$('#order_shipping_zip').val('');
			$('#order_shipping_country').change();

		}

	});

});
</script>
</head>


<body>
<br>
<h1 style="display: inline;">Address</h1><span style="margin-left:5px; font-size:10;color:#ccc"><?= $_GET["type"] ?></span>
<form method="post">
	<hr>
	<input type="hidden" name="trans_type" value="<?= $_GET["type"] ?>">
	
	<div class="container">
		<div class="row">
		    <div class="col col-sm-4">

		      <label for="order_firstname">First Name</label><input name="order_firstname" class="form-control" maxlength="255" type="text" id="order_firstname"><br>
		      <label for="order_lastname">Last Name</label><input name="order_lastname" class="form-control" maxlength="255" type="text" id="order_lastname"><br>
			  <label for="order_email">Email</label><input name="order_email" class="form-control" maxlength="255" type="email" id="order_email" required="required"><br>
			  <label for="order_phone">Phone</label><input name="order_phone" class="form-control" maxlength="255" type="tel" id="order_phone" required="required"><br>
			  <label for="order_comment">Comment</label><textarea name="order_comment" class="form-control" maxlength="255" style="resize: none;" rows=2 id="order_comment"></textarea><br>
		        <div class="checkbox">
		          <label>
		            <input type="checkbox" id='order_shipping_is_same'> Copy Billing Address to Shipping
		          </label>
		        </div>

		    </div>
		    <div class="col col-sm-4">

				<label for="order_billing_address">Billing Address</label><input name="order_billing_address" class="form-control" maxlength="255" type="text" id="order_billing_address" required="required"><br>
				<label for="order_billing_address2">Billing Address2</label><input name="order_billing_address2" class="form-control" maxlength="255" type="text" id="order_billing_address2"><br>
				<label for="order_billing_city">Billing City</label><input name="order_billing_city" class="form-control" maxlength="255" type="text" id="order_billing_city" required="required"><br>
				<label for="order_billing_state">Billing State</label><input name="order_billing_state" class="form-control" maxlength="255" type="text" id="order_billing_state" required="required"><br>
				<label for="order_billing_zip">Billing Zip</label><input name="order_billing_zip" class="form-control" maxlength="255" type="text" id="order_billing_zip"><br>
				<label for="order_billing_country">Billing Country</label><select name="order_billing_country" class="form-control" id="order_billing_country"><option>Greece</option><option disabled>————————</option><option>Albania</option><option>Andorra</option><option>Armenia</option><option>Austria</option><option>Azerbaijan</option><option>Belarus</option><option>Belgium</option><option>Bosnia and Herzegovina</option><option>Bulgaria</option><option>Croatia</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Estonia</option><option>Finland</option><option>France</option><option>Georgia</option><option>Germany</option><option>Hungary</option><option>Iceland</option><option>Ireland</option><option>Italy</option><option>Kazakhstan</option><option>Kosovo</option><option>Latvia</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option><option>Macedonia</option><option>Malta</option><option>Moldova</option><option>Monaco</option><option>Montenegro</option><option>Netherlands</option><option>Norway</option><option>Poland</option><option>Portugal</option><option>Romania</option><option>Russia</option><option>San Marino</option><option>Serbia</option><option>Slovakia</option><option>Slovenia</option><option>Spain</option><option>Sweden</option><option>Switzerland</option><option>Turkey</option><option>Ukraine</option><option>United Kingdom</select><br>
				
		        <br>
		    </div>
		    <div class="col col-sm-4">

				<label for="order_shipping_address">Shipping Address</label><input name="order_shipping_address" class="form-control" maxlength="255" type="text" id="order_shipping_address" required="required"> <br>
				<label for="order_shipping_address2">Shipping Address2</label><input name="order_shipping_address2" class="form-control" maxlength="255" type="text" id="order_shipping_address2">   <br>
				<label for="order_shipping_city">Shipping City</label><input name="order_shipping_city" class="form-control" maxlength="255" type="text" id="order_shipping_city" required="required"> <br>
				<label for="order_shipping_state">Shipping State</label><input name="order_shipping_state" class="form-control" maxlength="255" type="text" id="order_shipping_state" required="required"> <br>
				<label for="order_shipping_zip">Shipping Zip</label><input name="order_shipping_zip" class="form-control" maxlength="255" type="text" id="order_shipping_zip"><br>
				<label for="order_shipping_country">Shipping Country</label><select name="order_shipping_country" class="form-control" id="order_shipping_country"><option>Greece</option><option disabled>————————</option><option>Albania</option><option>Andorra</option><option>Armenia</option><option>Austria</option><option>Azerbaijan</option><option>Belarus</option><option>Belgium</option><option>Bosnia and Herzegovina</option><option>Bulgaria</option><option>Croatia</option><option>Cyprus</option><option>Czech Republic</option><option>Denmark</option><option>Estonia</option><option>Finland</option><option>France</option><option>Georgia</option><option>Germany</option><option>Hungary</option><option>Iceland</option><option>Ireland</option><option>Italy</option><option>Kazakhstan</option><option>Kosovo</option><option>Latvia</option><option>Liechtenstein</option><option>Lithuania</option><option>Luxembourg</option><option>Macedonia</option><option>Malta</option><option>Moldova</option><option>Monaco</option><option>Montenegro</option><option>Netherlands</option><option>Norway</option><option>Poland</option><option>Portugal</option><option>Romania</option><option>Russia</option><option>San Marino</option><option>Serbia</option><option>Slovakia</option><option>Slovenia</option><option>Spain</option><option>Sweden</option><option>Switzerland</option><option>Turkey</option><option>Ukraine</option><option>United Kingdom</select><br>
		        <br>
				<button style="float:right;" class="btn btn-default btn-primary" type="submit">Order</button>
		    </div>
		</div>
	</div>

</form>
</body>
</html>
//http://php.net/manual/en/pdo.lastinsertid.php

<?php

include 'ChromePhp.php';

//session_start();

if (isset($_POST['submit']))//If the form has been submitted
{
    $db = new PDO('sqlite:dbase') or die("cannot open the database");

    $sql = "INSERT INTO CUSTOMERS (
                                USER_ID,
                                CUST_TYPE,
                                custName,
                                custAddress1,
                                custAddress2,
                                custAddress3,
                                AFM,
                                DOY,
                                custTK,
                                Tel1,
                                Tel2,
                                Mobile1,
                                Mobile2,
                                Fax1,
                                Fax2,
                                EMAIL1,
                                EMAIL2,
                                SITE1,
                                SITE2,
                                Comments,
                                custAnalysis,
                                Discount,
                                Praktoreio) VALUES (
                                :userID,
                                :custtype,
                                :custName,
                                :custAddress1,
                                :custAddress2,
                                :custAddress3,
                                :AFM,
                                :DOY,
                                :custTK,
                                :Tel1,
                                :Tel2,
                                :Mobile1,
                                :Mobile2,
                                :Fax1,
                                :Fax2,
                                :EMAIL1,
                                :EMAIL2,
                                :SITE1,
                                :SITE2,
                                :Comments,
                                :custAnalysis,
                                :Discount,
                                :Praktoreio)";

    if ($stmt = $db -> prepare($sql)) {
        try {

            //read the URL parameters from form POST
            $userID = $_POST['1'];
            $custtype = $_POST['1'];
            $custName = $_POST['cname'];
            $custAddress1 = $_POST['address1'];
            $custAddress2 = $_POST['address2'];
            $custAddress3 = $_POST['address3'];
            $AFM = $_POST['afm'];
            $DOY = $_POST['doy'];
            $custTK = $_POST['tk'];
            $Tel1 = $_POST['tel1'];
            $Tel2 = $_POST['tel2'];
            $Mobile1 = $_POST['mob1'];
            $Mobile2 = $_POST['mob2'];
            $Fax1 = $_POST['fax1'];
            $Fax2 = $_POST['fax2'];
            $EMAIL1 = $_POST['email1'];
            $EMAIL2 = $_POST['email2'];
            $SITE1 = $_POST['web1'];
            $SITE2 = $_POST['web2'];
            $Comments = $_POST['comments'];
            $custAnalysis = "";
            // $_POST['user'];
            $Discount = "";
            //$_POST['user'];
            $Praktoreio = "";
            //$_POST['user'];

            //bind the parameters to insert query
            $stmt -> bindParam(':userID', $userID);
            $stmt -> bindParam(':custtype', $custtype);
            $stmt -> bindParam(':custName', $custName);
            $stmt -> bindParam(':custAddress1', $custAddress1);
            $stmt -> bindParam(':custAddress2', $custAddress2);
            $stmt -> bindParam(':custAddress3', $custAddress3);
            $stmt -> bindParam(':AFM', $AFM);
            $stmt -> bindParam(':DOY', $DOY);
            $stmt -> bindParam(':custTK', $custTK);
            $stmt -> bindParam(':Tel1', $Tel1);
            $stmt -> bindParam(':Tel2', $Tel2);
            $stmt -> bindParam(':Mobile1', $Mobile1);
            $stmt -> bindParam(':Mobile2', $Mobile2);
            $stmt -> bindParam(':Fax1', $Fax1);
            $stmt -> bindParam(':Fax2', $Fax2);
            $stmt -> bindParam(':EMAIL1', $EMAIL1);
            $stmt -> bindParam(':EMAIL2', $EMAIL2);
            $stmt -> bindParam(':SITE1', $SITE1);
            $stmt -> bindParam(':SITE2', $SITE2);
            $stmt -> bindParam(':Comments', $Comments);
            $stmt -> bindParam(':custAnalysis', $custAnalysis);
            $stmt -> bindParam(':Discount', $Discount);
            $stmt -> bindParam(':Praktoreio', $Praktoreio);

            //execute!
            $stmt -> execute();
            
            //get the new ID!
            ChromePhp::log($db -> lastInsertId());
            
            //close DB
            $db = null;
        } catch (PDOException $e) {
            print "Error!: " . $e -> getMessage() . "<br/>";
            die();
        }

    }
}
?>


//html submit form

		<!-- NEW CUSTOMER MODAL [START] -->
		<div class="modal fade" id="newCustomer" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
							&times;
						</button>
						<h4 class="modal-title">Νέος Πελάτης</h4>
					</div>
					<div class="modal-body">
						<form method="post" action="income_new.php">
						<!-- <form role="form" accept-charset="UTF-8" method="post" action="income_new.php"> -->
							<form role="form">
								<div class="form-group">
									<label>Ονοματεπώνυμο :</label>
									<input name="cname" class="form-control" placeholder="Ονοματεπώνυμο">
								</div>
								<div class="form-group">
									<label>Διεύθυνση1 :</label>
									<input name="address1" class="form-control" placeholder="Διεύθυνση1">
								</div>
								<div class="form-group">
									<label>Διεύθυνση2 :</label>
									<input name="address2" class="form-control" placeholder="Διεύθυνση2">
								</div>
								<div class="form-group">
									<label>Πόλη :</label>
									<input name="address3" class="form-control" placeholder="Πόλη">
								</div>
								<div class="form-group">
									<label>ΤΚ :</label>
									<input name="tk" class="form-control" placeholder="ΤΚ">
								</div>
								<div class="form-group">
									<label>ΑΦΜ :</label>
									<input name="afm" class="form-control" placeholder="ΑΦΜ">
								</div>
								<div class="form-group">
									<label>ΔΟΥ :</label>
									<input name="doy" class="form-control" placeholder="ΔΟΥ">
								</div>
								<div class="form-group">
									<label>Τηλέφωνο1 :</label>
									<input name="tel1" class="form-control" placeholder="Τηλέφωνο1">
								</div>
								<div class="form-group">
									<label>Τηλέφωνο2 :</label>
									<input name="tel2" class="form-control" placeholder="Τηλέφωνο2">
								</div>
								<div class="form-group">
									<label>Κινητό1 :</label>
									<input name="mob1" class="form-control" placeholder="Κινητό1">
								</div>
								<div class="form-group">
									<label>Κινητό2 :</label>
									<input name="mob2" class="form-control" placeholder="Κινητό2">
								</div>
								<div class="form-group">
									<label>FAX1 :</label>
									<input name="fax1" class="form-control" placeholder="FAX1">
								</div>
								<div class="form-group">
									<label>FAX2 :</label>
									<input name="fax2" class="form-control" placeholder="FAX2">
								</div>
								<div class="form-group">
									<label>EMAIL1 :</label>
									<input name="email1" class="form-control" placeholder="EMAIL2">
								</div>
								<div class="form-group">
									<label>EMAIL2 :</label>
									<input name="email2" class="form-control" placeholder="EMAIL2">
								</div>
								<div class="form-group">
									<label>WebSite1 :</label>
									<input name="web1" class="form-control" placeholder="WebSite1">
								</div>
								<div class="form-group">
									<label>WebSite2 :</label>
									<input name="web2" class="form-control" placeholder="WebSite2">
								</div>
								<div class="form-group">
									<label>Σχόλια :</label>
									<input name="comments" class="form-control" placeholder="Σχόλια">
								</div>
							
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">
							ακύρωση
						</button>
						<button id="newCustomer_bntSave" class="btn btn-primary" type="submit" name="submit">
							απόθηκευση
						</button>
					</div>
					</form>
				</div>
				<
			</div>
		</div>
		<!-- NEW CUSTOMER MODAL [END] -->
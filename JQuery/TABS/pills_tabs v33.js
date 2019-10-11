		<ul class='nav nav-pills' id='tabContainer'> //or class='nav nav-tabs'
			<li class="active">
				<a href="#companies" data-toggle='tab'>Εταιρίες</a>
			</li>
			<li>
				<a href="#a" data-toggle='tab'>Κατηγορίες</a>
			</li>
			<li>
				<a href="#b" data-toggle='tab'>BestOf</a>
			</li>
			<li>
				<a href="#c" data-toggle='tab'>Στελέχη</a>
			</li>
			<li>
				<a href="#d" data-toggle='tab'>Αλλαγές</a>
			</li>
			<li>
				<a href="#e" data-toggle='tab'>Αποστολές</a>
			</li>
			<li>
				<a href="#f" data-toggle='tab'>Εξαγωγή</a>
			</li>
		</ul>

		<!-- TABS Content [START] -->
		<div id="tabsContent" class="tab-content">

			<div class="tab-pane fade in active" id="companies">
				<?php
				include ('tab_companies.php');
				?>
			</div>

		</div>
		<!-- TABS Content [END] -->
		
//PHP
<?php
session_start();

if (!isset($_SESSION["u"])) {
    header("Location: index.html");
    exit ;
}
?>

	<br>
	<div id="box" class="container">
		<a data-toggle="modal" href="#modalPRODUCTS" class="btn btn-default">New</a>
		<button id="btn_EditPRODUCTS" type="button" class="btn btn-primary">
			Edit
		</button>
		<button id="btn_DelPRODUCTS" type="button" class="btn btn-danger">
			Delete
		</button>
		<button type="button" class="btn btn-success" style="float: right; margin-left: 5px" onclick="loadProducts(lastProductPage);">
			Refresh
		</button>

		<a href="products_export.php" class="btn btn-warning" style="float: right">Export</a>

		<br>
		<br>
		<table id='productsTBL' class="table table-striped" >
			<thead>
				<tr>
					<th tabindex="0" rowspan="1" colspan="1">Λογοτυπό</th>
					<th tabindex="0" rowspan="1" colspan="1">Τίτλος</th>
					<th tabindex="0" rowspan="1" colspan="1">Contact_Email</th>
					<th tabindex="0" rowspan="1" colspan="1">Διεύθυνση</th>
					<th tabindex="0" rowspan="1" colspan="1">Περιοχή</th>
					<th tabindex="0" rowspan="1" colspan="1">Τηλέφωνο</th>
					<th tabindex="0" rowspan="1" colspan="1">Map_ok</th>
					<th tabindex="0" rowspan="1" colspan="1">Κατηγορία1</th>
					<th tabindex="0" rowspan="1" colspan="1">Κατηγορία2</th>
					<th tabindex="0" rowspan="1" colspan="1">Visible</th>
					<th tabindex="0" rowspan="1" colspan="1">Enabled</th>
					<th tabindex="0" rowspan="1" colspan="1">Last_Updated</th>
				</tr>
			</thead>

			<tbody id="products_rows"></tbody>
		</table>

		<div id="products_pg"></div>
	</div>

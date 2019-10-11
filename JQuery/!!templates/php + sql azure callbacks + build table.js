<?
session_start();

if (!isset($_SESSION["adb_companyid"]) || ($_SESSION["show_bestof"]=="0")){
    header("location:login.php");
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<title>ADBook company admin</title>

<? require 'inc_head.php'; ?>

<!-- Bootstrap core CSS+JS -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<script type='text/javascript' src="js/bootstrap-3.min.js"></script>
<!-- Bootstrap core CSS+JS -->

<!-- JQueryTE CSS+JS -->
<script type="text/javascript" src="js/jquery-te-1.4.0.min.js"></script>
<link type="text/css" rel="stylesheet" href="css/jquery-te-green.css" charset="utf-8" />
<!-- JQueryTE CSS+JS -->

</head>

<body>

<!-- select * from adbook_companies where comp_title='McCann Erickson Athens'

select * from adbook_bestof where company_id=5710

select * from adbook_customers where customerid=28478

select count(*) from adbook_customers where customer_category_id<>1

select * from adbook_bestof where soundcloud<>''

select * from adbook_bestof where company_id=46 -->
<? require 'top_nav.php'; ?>

<? require 'inc_header.php'; ?>

<script type="text/javascript">
    
    $(document).ready(function() {
    	
        ////////////////////////////////////////
        // INIT
    	//make it jqTE!
    	$("[name=infos]").jqte({css:"jqte_green"});
    	
        //display records
        fillGrid();
        
        //combo
        fillCustomersCombo()
        // INIT
        ////////////////////////////////////////
        
        
        ////////////////////////////////////////
        // MODAL FUNCTIONALITIES
        //when modal closed, hide the warning messages + reset
        $('#modalbestof').on('hidden.bs.modal', function() {
        	console.log('closed');
            //when close - clear elements
            $('#formbestof').trigger("reset");
            
            //reset jqTE
            $('[name="infos"]').jqteVal('');
            
            //select 1st item on combo Customers
            $('[name="customer_id"]').val('0');
            
            //select 1st item on combo Categories
            $('[name="category"]').val('0');
            
	        //clear validator error on form
	        validatorbestof.resetForm();

            //set form texts for new record
            $('#bntSave_bestof').text('αποθήκευση');
            $('#lblTitle_bestof').text('Νέο BestOf');
        });
    
    
	    //functionality when the modal already shown and its long when loaded scroll to top
	    $('#modalbestof').on('shown.bs.modal', function() {
	        $(this).animate({
	            scrollTop : 0
	        }, 'slow');
	    });
        // MODAL FUNCTIONALITIES
        ////////////////////////////////////////

	    
	    
        ////////////////////////////////////////
        // add new button
        $(document).on("click", "#btn_new", function(e) {
            //show form
            $('#modalbestof').modal('show');
        });
        
        
        ////////////////////////////////////////
        // delete button - comes from GRID only
        $(document).on("click", "#btn_delete", function(e) {
            var s = $(this).parent().parent().find("td:nth-child(1)").text();
            
                if (confirm('Θέλετε να διαγράψετε το best of του πελάτη : \r\n' + s)) {
                        $.ajax({        
                                url: "http://tops.azurewebsites.net/a/adbook/bestof_delete/" + $(this).attr('data-name'),
                                dataType: 'json', 
                                type: 'POST', 
                                success: function (result) { 
                                     fillGrid();
                                }, 
                                //timeout: CALLS_TIMEOUT, 
                                error: function (jqXHR, status, errorThrown) { 
                                    console.log("error in json - message: " + jqXHR.responseText); 
                                } 
                            });
                } else {
                    alert('abort');
                }
        });
        
        
        ////////////////////////////////////////
        // edit button - comes from GRID only
        $(document).on("click", "#btn_edit", function(e) {
            
             //query for record       
            $.ajax({
                url : "http://tops.azurewebsites.net/a/adbook/bestof_listwhere/" + $(this).attr('data-name') + "?callback=bestof_listwhere_cb",
                dataType : 'jsonp',
                jsonpCallback : 'bestof_listwhere_cb',
                jsonp : 'callback',
                success : function (result)
                {
    
                },
                error : function(jqXHR, status, errorThrown) {
                    console.log("error in json - message: " + jqXHR.responseText);
                }
            });
    
        });   
        

        ///////////////////////////////
        //VALIDATION - on form submit        
		// add custom validation for combos
		 $.validator.addMethod("valueNotEquals", function(value, element, arg){
		  	return arg != value;
		 }, "Value must not equal arg.");
		 

        var validatorbestof = $("#formbestof").validate({
            rules : {
            	customer_id  : { valueNotEquals: '0' },
                category  : { valueNotEquals: '-Επιλέξτε-' }
            },
            messages : {
            	customer_id  : 'Το πεδίο είναι υποχρεωτικό',
                category  : 'Το πεδίο είναι υποχρεωτικό'
            }
        });
        //VALIDATION - on form submit
        ///////////////////////////////
        
        
        ////////////////////////////////////////
        // MODAL SUBMIT aka save button
        $('#formbestof').submit(function(e) {
        	 	e.preventDefault();
        	 
		        ////////////////////////// validation
		        var form = $(this);
		        form.validate();
		
		        if (!form.valid())
		            return;
		        ////////////////////////// validation
		        
				//for last update field
				var d1=new Date();
				var dt = (d1.getFullYear() + "/" + d1.getMonth() + "/" + d1.getDate());
						
                //add new
                if ($('[name=bestof_updateID]').val()==''){
                        $.ajax({        
                                url: "http://tops.azurewebsites.net/a/adbook/bestof_add/" + <?=$_SESSION['adb_companyid']?>,
                                dataType: 'json', 
                                type: 'POST', 
                                data: { 
                                    "customer_id": $('[name=customer_id]').val() ,
                                    "title": $('[name=title]').val() ,
                                    "product": $('[name=product]').val() ,
                                    "infos": $('[name=infos]').val() ,
                                    "vimeo": $('[name=vimeo]').val() ,
                                    "picture": $('[name=picture]').val() ,
                                    "category": $('[name=category]').val() ,
                                    "soundcloud": $('[name=soundcloud]').val() ,
                                    "flickr": $('[name=flickr]').val() ,
                                    "lastupdate": dt 
                                        }, 
                                success: function (result) {
						             //hide form
						             $('#modalbestof').modal('hide');
                                
                                     fillGrid();
                                }, 
                                //timeout: CALLS_TIMEOUT, 
                                error: function (jqXHR, status, errorThrown) { 
                                			console.log("3");
                                    console.log("error in json - message: " + jqXHR.responseText); 
                                } 
                            });
                        }
                else { //update
                        $.ajax({        
                                url: "http://tops.azurewebsites.net/a/adbook/bestof_update/" + $('[name=bestof_updateID]').val(),
                                dataType: 'json', 
                                type: 'POST', 
                                data: {
	                                    "customer_id": $('[name=customer_id]').val() ,
	                                    "title": $('[name=title]').val() ,
	                                    "product": $('[name=product]').val() ,
	                                    "infos": $('[name=infos]').val() ,
	                                    "vimeo": $('[name=vimeo]').val() ,
	                                    "picture": $('[name=picture]').val() ,
	                                    "category": $('[name=category]').val() ,
	                                    "soundcloud": $('[name=soundcloud]').val() ,
	                                    "flickr": $('[name=flickr]').val() ,
	                                    "lastupdate": dt 
                                      }, 
                                success: function (result) {
						             //hide form
						             $('#modalbestof').modal('hide');
						             
                                     fillGrid();
                                }, 
                                //timeout: CALLS_TIMEOUT, 
                                error: function (jqXHR, status, errorThrown) { 
                                    console.log("error in json - message: " + jqXHR.responseText); 
                                } 
                            });
                }
        });
        
    }); //end JQuery ready


	////////////////////////////////////////////////////////
	///////////////////////////////////// FILL MODAL COMBO
	function fillCustomersCombo()
	{
      //fill combo on modal form for CUSTOMERS
      $.ajax({           
            url: "http://tops.azurewebsites.net/a/adbook/customers_list/?callback=customers_list_cb",
            dataType: 'jsonp',
            jsonpCallback: 'customers_list_cb',
            jsonp: 'callback',
            error: function (jqXHR, status, errorThrown) {
                console.log("error in json - message: " + jqXHR.responseText);
            }
        });
	}
	
	//callback of fillCustomersCombo
    function customers_list_cb(e){
        var optionsAsString = "<option value='0'>-Επιλέξτε-</option>";
        for (var i=0; i<e.length; i++){
            optionsAsString += "<option value='" + e[i]["customerid"] + "'>" + e[i]["customer_name"] + "</option>";
        }
        $('[name="customer_id"]').append( optionsAsString );
        
        //select the 1st item by default
        // $('[name="customer_id"]').val('0');
        //$('[name="customer_id"] option[value="31694"]').attr("selected", "selected");
    }
    ///////////////////////////////////// FILL MODAL COMBO
    ////////////////////////////////////////////////////////
        
    

    //////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// FILL MODAL ELEMENTS (edit button) CALLBACK
    function bestof_listwhere_cb(e){
    	 console.log(e);
    	 
		 $('[name=bestof_updateID]').val(e[0]["id"]);
		 $('[name=customer_id]').val(e[0]["customer_id"]);
		 $('[name=title]').val(e[0]["title"]);
		 $('[name=product]').val(e[0]["product"]);
		 $('[name=infos]').jqteVal(e[0]["infos"]);
		 $('[name=vimeo]').val(e[0]["vimeo"]);
		 $('[name=picture]').val(e[0]["picture"]);
		 $('[name=category]').val(e[0]["category"]);
		 $('[name=soundcloud]').val(e[0]["soundcloud"]);
		 $('[name=flickr]').val(e[0]["flickr"]);
		 
        //set form texts for update
        $('#bntSave_bestof').text('ενημέρωση');
        $('#lblTitle_bestof').text('Επεξεργασία BestOf');
        
        //show form
        $('#modalbestof').modal('show');
    }
    ///////////////////////////////////// FILL MODAL ELEMENTS (edit button) CALLBACK
    //////////////////////////////////////////////////////////////////////////////////
    
    
    
    ////////////////////////////////////////////////////////
    ///////////////////////////////////// FILL GRID
    function fillGrid(){ 
      $.ajax({           
            url: "http://tops.azurewebsites.net/a/adbook/bestofs_listwhere/<?=$_SESSION['adb_companyid']?>/?callback=bestofs_listwhere_cb",
            dataType: 'jsonp',
            jsonpCallback: 'bestofs_listwhere_cb',
            jsonp: 'callback',
            error: function (jqXHR, status, errorThrown) {
                console.log("error in json - message: " + jqXHR.responseText);
            }
        });
        
         //close form
         $('#modalProduct').modal('hide');
    }
    
    //callback to fill table
    function bestofs_listwhere_cb(e){
        console.log(e);
        var inj="";
        for (var it=0; it<e.length; it++){
            inj+="<tr>";
            inj+="<td>"+ e[it]["customer_name"] +"</td>";
            inj+="<td>"+ e[it]["title"] +"</td>";
            inj+="<td>"+ e[it]["product"] +"</a></td>";
            //inj+="<td>"+ e[it]["infos"] +"</td>";

            ///////////////////////////////////////////////// VIMEO
            var vimeo = e[it]["vimeo"]
            var vimeoArray = vimeo.split(',');
            var vimeoOutput=''; 
              var vimeoLinkAnchorTemplate = "<a href='http://www.vimeo.com/{{id}}' target='{{id}}'>{{no}} </a>";
             
              for (var vimeoItem=0; vimeoItem<vimeoArray.length; vimeoItem++){
                  if (vimeoArray[vimeoItem].trim().length == 0)
                    continue;
                    
                  vimeoOutput += vimeoLinkAnchorTemplate.replace(/{{id}}/g,vimeoArray[vimeoItem].replace(',','').trim());
                  vimeoOutput = vimeoOutput.replace('{{no}}',vimeoItem+1);
              }

            inj+="<td>"+ vimeoOutput +"</td>";

            
            
            inj+="<td>"+ e[it]["picture"] +"</td>";
            inj+="<td>"+ e[it]["category"] +"</td>";
            
            
            ///////////////////////////////////////////////// SOUNDCLOUD
            var soundcloud = e[it]["soundcloud"]
            var soundcloudArray = soundcloud.split(',');
            var soundcloudOutput=''; 
              var soundcloudLinkAnchorTemplate = "<a href='http://www.soundcloud.com/{{id}}' target='{{id}}'>{{no}} </a>";
             
              for (var soundcloudItem=0; soundcloudItem<soundcloudArray.length; soundcloudItem++){
                  if (soundcloudArray[soundcloudItem].trim().length == 0)
                    continue;
                    
                  soundcloudOutput += soundcloudLinkAnchorTemplate.replace(/{{id}}/g,soundcloudArray[soundcloudItem].replace(',','').trim());
                  soundcloudOutput = soundcloudOutput.replace('{{no}}',soundcloudItem+1);
              }

            inj+="<td>"+ soundcloudOutput +"</td>";
            

            ///////////////////////////////////////////////// FLICKR            
            var flickr = e[it]["flickr"]
            var flickrArray = flickr.split(',');
            var flickrOutput=''; 
              var flickrLinkAnchorTemplate = "<a href='http://www.flickr.com/photos/{{id}}' target='{{id}}'>{{no}} </a>";

              for (var flickrItem=0; flickrItem<flickrArray.length; flickrItem++){
                  if ( flickrArray[flickrItem].trim().length == 0)
                    continue;
                    
                  flickrOutput += flickrLinkAnchorTemplate.replace(/{{id}}/g,flickrArray[flickrItem].replace(',','').trim());
                  flickrOutput = flickrOutput.replace('{{no}}',flickrItem+1);
               }

            inj+="<td>"+ flickrOutput +"</td>";
            
            
            inj+="<td>"+ e[it]["lastupdate"] +"</a></td>";
            inj+="<td><input id='btn_edit' type='button' value='Αλλαγη' class='greenBtn' data-name='"+ e[it]["ID"] +"'/></td>";
            inj+="<td><input id='btn_delete' type='button' value='Διαγραφη' class='redBtn' data-name='"+ e[it]["ID"] +"' /></td>";
            
            inj+="<tr>";
            
        }
        
        $("#contents").html(inj);
    }
    ///////////////////////////////////// FILL GRID
    ////////////////////////////////////////////////////////
    
    
</script>
        
                <!-- NEW bestof MODAL [START] -->
                <div class="modal fade" id="modalbestof" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                                <h4 class="modal-title" id='lblTitle_bestof'>New bestof</h4>
                            </div>
                            <div class="modal-body">
                                <form id="formbestof" role="form" method="post">
                                    <form role="form">
                                        <div class='form-group'>
                                            <label>Πελάτης :</label>
                                            <select name='customer_id' class='form-control' >

                                            </select>
                                        </div>
                                        <div class='form-group'>
                                            <label>Τίτλος :</label>
                                            <input name='title' class='form-control' placeholder='Τίτλος'>
                                        </div>
                                        <div class='form-group'>
                                            <label>Προϊον :</label>
                                            <input name='product' class='form-control' placeholder='Προϊον'>
                                        </div>
                                        <!-- <div class='form-group'> -->
                                            <label>Περιγραφή :</label>
                                            <!-- <textarea class="editor" name="infos">Articles should be in here</textarea> -->
                                            <input name='infos'>
                                            <br>
                                            <!-- <input name='infos' class="editor" placeholder='Περιγραφή'> -->
                                        <!-- </div> -->
                                        <div class='form-group'>
                                            <label>Vimeo :</label>
                                            <input name='vimeo' class='form-control' placeholder='Vimeo'>
                                        </div>
                                        <div class='form-group'>
                                            <label>Εικόνα :</label>
                                            <input name='picture' class='form-control' placeholder='Εικόνα'>
                                        </div>
                                        <div class='form-group'>
                                            <label>Κατηγορία :</label>
                                            <select name='category' class='form-control' >
                                            	<option>-Επιλέξτε-</option>
												<option>ONLINE COMMUNICATION</option>
												<option>OUTDOOR</option>
												<option>ΔΙΑΦΗΜΙΣΤΙΚΑ ΕΝΤΥΠΑ</option>
												<option>ΕΤΑΙΡΙΚΗ ΤΑΥΤΟΤΗΤΑ</option>
												<option>ΗΜΕΡΗΣΙΟΣ & ΠΕΡΙΟΔΙΚΟΣ ΤΥΠΟΣ</option>
												<option>ΡΑΔΙΟΦΩΝΟ</option>
												<option>ΣΥΣΚΕΥΑΣΙΑ</option>
												<option>ΤΗΛΕΟΡΑΣΗ</option>
                                            </select>
                                        </div>
                                        <div class='form-group'>
                                            <label>SoundCloud :</label>
                                            <input name='soundcloud' class='form-control' placeholder='SoundCloud'>
                                        </div>
                                        <div class='form-group'>
                                            <label>flickr :</label>
                                            <input name='flickr' class='form-control' placeholder='flickr'>
                                        </div>
                                        <!-- <div class='form-group'>
                                            <label>txtlastupdate :</label>
                                            <input name='lastupdate' class='form-control' placeholder='txtlastupdate'>
                                        </div> -->

                                        <!-- //recordID used for update -->
                                        <input name="bestof_updateID" class="form-control" style="display:none;">
                            </div>
                            <div class="modal-footer">
                                <button id="bntCancel_bestof" type="button" class="btn btn-default" data-dismiss="modal">
                                    ακύρωση
                                </button>
                                <button id="bntSave_bestof" class="btn btn-primary" type="submit" name="submit">
                                    αποθήκευση
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- NEW bestof MODAL [END] -->
        
        
        
<!-- Content wrapper -->
<div class="wrapper">
    
    <? require 'inc_leftnav.php'; ?>

    
    <!-- Content -->
    <div class="content" id="container">
    <button id="btn_new" type="button" class="btn btn-primary">
            Νέο BestOf
        </button>
    <br>
    <br>
    
    
        <div class="title"><h5>BestOf εταιρίας</h5></div>
                    
        <!-- Form begins -->
        <form action="" id="valid" class="mainForm">
        
            <!-- Input text fields -->
            <fieldset>
                <div class="widget">
                    <div class="head"><h5 class="iFrames">Προϊόντα</h5></div>
                    <table cellpadding="0" cellspacing="0" width="100%" class="tableStatic resize">
                        <thead>
                            <tr>
                              <td>Πελάτης</td>
                              <td>Τίτλος</td>
                              <td>Προϊον</td>
                              <!-- <td>Info</td> -->
                              <td>Vimeo</td>
                              <td>Εικόνα</td>
                              <td>Κατηγορία</td>
                              <td>SoundCloud</td>
                              <td>Flickr</td>
                              <td>Τελευταία Ενημέρωση</td>
                            </tr>
                        </thead>
                        <tbody id="contents">
                            
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </form>
    </div>
    <div class="fix"></div>
</div>

<? require 'inc_footer.php'; ?>

</body>
</html>

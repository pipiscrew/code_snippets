//http://stackoverflow.com/questions/16445057/jquery-get-previous-value-row-in-table

//js

    ////////////////////////////////////////
    // delete button - comes from GRID only
    $(document).on("click", "#btn_delete", function(e) {
	        var s = $(this).parent().parent().find("td:nth-child(1)").text();

            if (confirm('Θέλετε να διαγράψετε το στέλεχος \r\n\r\n' + s)) {
                alert('del');
            } else {
                alert('abort');
            }
    });
    
	  $.ajax({        	 
            url: "http://tops.azurewebsites.net/a/adbook/company_executives/<?=$_SESSION['adb_companyid']?>/?callback=company_executives_cb",
            dataType: 'jsonp',
            jsonpCallback: 'company_executives_cb',
        	jsonp: 'callback',
            error: function (jqXHR, status, errorThrown) {
            	console.log("error in json - message: " + jqXHR.responseText);
            }
        });
	});
	
	function company_executives_cb(e){
		var inj="";
		for (var it=0; it<e.length; it++){
			inj+="<tr>";
			inj+="<td>"+ e[it]["executive_name"] +"</td>";
			inj+="<td>"+ e[it]["executive_title"] +"</td>";
			inj+="<td>"+ "<a href='mailto:"+ e[it]["email"] +"'>"+e[it]["email"] +"</a></td>";
			inj+="<td><input id='btn_edit' type='button' value='Αλλαγη' class='greenBtn' data-name='"+ e[it]["executive_id"] +"' /></td>";
			inj+="<td><input id='btn_delete' type='button' value='Διαγραφη' class='redBtn' data-name='"+ e[it]["executive_id"] +"' /></td>";
			
			inj+="<tr>";
			
		}
		$("#exec_contents").html(inj);
	}

//html
		            <table cellpadding="0" cellspacing="0" width="100%" class="tableStatic resize">
		            	<thead>
		                	<tr>
		                      <td>Όνομα</td>
		                      <td>Τίτλος</td>
		                      <td>Email</td>
		                      <td>Αλλαγή</td>
		                      <td>Διαγραφή</td>
		                    </tr>
		                </thead>
		                <tbody id="exec_contents">
		                	
		                </tbody>
		            </table>
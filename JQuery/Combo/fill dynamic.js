//jq
    var optionsAsString = "";
    for (var i=0; i<e.length; i++){
        optionsAsString += "<option value='" + e[i]["executive_title_id"] + "'>" + e[i]["executive_title"] + "</option>";
    }
    $('select[name="cmbTitles"]').append( optionsAsString );

//html
        <div class='form-group'>
            <label>Τίτλος :</label>
                <select name='cmbTitles' class='form-control' >

                </select>
        </div>
        
        
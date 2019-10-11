//http://stackoverflow.com/questions/11179406/jquery-get-value-of-select-onchange

//hide/show depend selection
        $('[name=cmbTitles]').on('change', function() {
          if (this.value==0)
            $('#newTitle').show();
          else 
            $('#newTitle').hide();
        });
    				//html
                    <div id="newTitle" class='form-group' style="display:none;">
                        <label>Τίτλος :</label>
                        <input name='executive_title' class='form-control' placeholder='Τίτλος'>
                    </div>
                                        
//by ID 
	$('#cmdSelect').on('change', function() {
	  alert( this.value ); // or $(this).val()
	});

//by Name
    $('[name=cmbTitles]').on('change', function() {
      console.log(this.value);
    });
            
//plain html+JS
	<select onchange="getval(this);">
	    <option value="1">One</option>
	    <option value="2">Two</option>
	</select>
	
	
	<script type="text/javascript">
	    function getval(sel) {
	       alert(sel.value);
	    }
	</script>
//http://www.pipiscrew.com/2015/03/css-html-checkbox-with-image-states/

        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
 
        <style>
            .checkbox {
                width: 26px;
                height: 26px;
                background: transparent url(checkbox.png) }
            .checked {
                background: transparent url(checkbox_on.png)}
        </style>
 
        <script type="text/javascript">
            $(function()
                {
                    //button click
                    $('#btn').on('click', function(e) {
                            var bg_url = $('#test').css('background-image');
 
                            if (bg_url.indexOf('_on.png')>0)
                                console.log("checked");
                            else
                                console.log("un_checked");  
 
                            console.log(bg_url);
                    });
 
                    $("#test").click(function() {
                            $(this).toggleClass('checked')
                    });
 
                });
        </script>
    <body>
 
        <div id="test" class="checkbox"></div>
 
        <button id="btn">
            Test
        </button>
 
    </body>
    
    
//example :
		    //when modal closed, hide the warning messages + reset
		    $('#modalOFFER_ADVERTISE_DETAILS').on('hidden.bs.modal', function() {
		        //when close - clear elements
		        $('#formOFFER_ADVERTISE_DETAILS').trigger("reset");
		 
		        //clear validator error on form
		        validatorOFFER_ADVERTISE_DETAILS.resetForm();

				$("[name=ad_placement_mobile],[name=ad_placement_desktop],[name=ad_placement_desktop_right],[name=ad_placement_audience_network]").removeClass("mycheckboxon");
		    });
		    

					if (data.rec.ad_placement_mobile==1)
					{
						$("[name=ad_placement_mobile]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_desktop==1)
					{
						$("[name=ad_placement_desktop]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_desktop_right==1)
					{
						$("[name=ad_placement_desktop_right]").addClass('mycheckboxon')
					}

					if (data.rec.ad_placement_audience_network==1)
					{
						$("[name=ad_placement_audience_network]").addClass('mycheckboxon')
            function showVideo(id) {
                window.open('video.html?' + id, '_blank');
            }


//on ajax callbacks work only
window.location='http://com/adcompany/loginbridge.php?u=' + e[0]["email"] + "&p=" + e[0]["cmp_password"];


        function open_win(url){
            var w = 800;
            var h = 600;
            window.open(url, '', 'width='+w+',height='+h+',fullscreen=no,scrollbars=yes,resizable=yes,status=yes,toolbar=yes,menubar=yes,location=yes');
        }
        window.moveTo((window.screen.width-600)/2,((window.screen.height-400)/2)-20);
        window.focus();
        
        
        
//open new tab on ajax calls via async=false option
//http://stackoverflow.com/a/26731899/1320686
		$.ajax({
			url : 'ask_model_batteries.php',
			dataType : 'json',
			type : 'POST',
			data : {
				"brand" : $("#brand").val(),
			},
			async: false,
            success : function(data) {
                var ids_for_search = "Test"
                if (ids_for_search)
                	window.open("http://www.x.com/?subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=" + ids_for_search + "&dispatch=products.search", "_blank");
                	
                $("#batteries").html(recs);
                
			}
		});
		
//open on same tab
window.open("http://autosprintsystem.gr" + data.recs[0].src, "_parent");
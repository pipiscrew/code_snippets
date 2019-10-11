<html>
<head>
 <script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>

 <title></title>

<script>
//https://forum.jquery.com/topic/jquery-binding-click-event-to-area-image-map
				$(document).on("click", "area.optSelectMe", function(e) {
					console.log("sdf");
					alert($(this).attr('data-name'));
				});
</script>
</head>

<body>

<map name="dsfsd" id="dsfsd">
 <area meta="optF" data-name="no1"  class="optSelectMe" shape="rect" coords="156,314,263,370" href="#" alt="" />
 <area meta="optAAA" data-name="no2" class="optSelectMe" shape="rect" coords="216,599,434,657" href="#" alt="" />
</map>
<img src="no1.jpg" width="648" height="960" border="0" alt="" title="" usemap="#dsfsd" />

	<button id="reg" type="button" class="btn btn-default" data-dismiss="modal">
							TEST
						</button>

</body>
</html>

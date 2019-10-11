		<script type="text/javascript">
				$('#comment').focus();

				//read event ID
				var eventname = GetURLParameter('event');

				//episode ID
				var episode = GetURLParameter('episode');
				
				////////////////////////
				//read URL parameter
				////////////////////////
				function GetURLParameter(sParam) {
					var sPageURL = window.location.search.substring(1);
					var sURLVariables = sPageURL.split('&');
					for (var i = 0; i < sURLVariables.length; i++) {
						var sParameterName = sURLVariables[i].split('=');
						if (sParameterName[0] == sParam) {
							return sParameterName[1];
						}
					}
				}
				
//or
//http://stackoverflow.com/a/901144
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//source : http://www.targetlocal.co.uk/wordoff

<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author" content="">

		<title>RTF HTML cleaner</title>

		<!-- Bootstrap core CSS -->
		<link href="bootstrap.min.css" rel="stylesheet">

		<!-- jQuery -->
		<script type='text/javascript' src='jquery-1.10.2.min.js'></script>
		<script type='text/javascript' src='bootstrap.min.js'></script>

		<script type="text/javascript">
			    function cleanHTML(rtf) {
			        var e = rtf;
			        if (e === "") return;
			        
			        var t = new RegExp('(\n|\r| class=(")?Mso[a-zA-Z]+(")?)', "gi");
			        var n = e.replace(t, "");
			        n = n.replace(/<!--(.*?)-->/gi, "");
			        n = n.replace(/<!\[(.*?)\]>/gi, "");
			        n = n.replace(/�/gi, " ");
			        
			        var r = new RegExp("<(/)*(meta|link|div|span|\\?xml:|st1:|o:|font)(.*?)>", "gim");
			        n = n.replace(r, "");
			        
			        var i = ["style", "script", "applet", "embed", "noframes", "noscript"];
			        for (var s = 0; s < i.length; s++) {
			            r = new RegExp("<" + i[s] + ".*?" + i[s] + "(.*?)>", "gim");
			            n = n.replace(r, "")
			        }
			        
			        var o = ["style", "start"];
			        for (var s = 0; s < o.length; s++) {
			            var u = new RegExp(" " + o[s] + '="(.*?)"', "gi");
			            n = n.replace(u, "")
			        }
			        
			        n = n.replace(/�/g, '"');
			        n = n.replace(/�/g, '"');
			        n = n.replace(/\s\s+/g, "");
			        n = n.replace(/<p><\/p>/gi, "");
			        n = n.replace(/<\/h1><\/h1>/gi, "");
			        n = n.replace(/<\/h2><\/h2>/gi, "");
			        n = n.replace(/<\/h3><\/h3>/gi, "");
			        n = n.replace(/<\/h4><\/h4>/gi, "");
			        n = n.replace(/<\/h5><\/h5>/gi, "");
			        n = n.replace(/<\/h6><\/h6>/gi, "");
			        n = n.replace(/(<\/h[0-9]>)/gi, "$1\n");
			        n = n.replace(/(<\/p>)/gi, "$1\n");
			        n = n.replace(/(<h[0-9]>)/gi, "	$1");
			        n = n.replace(/(<p>)/gi, "	$1");
			        n = n.replace(/(<html>)/gi, "$1\n");
			        n = n.replace(/(<head>)/gi, "\n$1\n	");
			        n = n.replace(/(<\/title>)/gi, "$1\n");
			        n = n.replace(/(<\/head>)/gi, "$1\n");
			        n = n.replace(/(<body>)/gi, "$1\n");
			        n = n.replace(/(<\/body>)/gi, "$1\n");
			        n = n.replace(/(<\/html>)/gi, "$1\n");
			        n = n.replace(/(<\/li>)/gi, "$1\n");
			        n = n.replace(/(<\/ul>)/gi, "$1\n");
			        n = n.replace(/(<ul>)/gi, "$1\n");
			        n = n.replace(/(<\/table>)/gi, "$1\n");
			        n = n.replace(/(<br(.*?)>)/gi, "$1\n");
					
					return n;
			    }

			$(function() {
				$('#btn_cleanHTML').on('click', function(e) {
					$("#txt_dest").val(cleanHTML($("#txt_src").val()));
				});
			});
		</script>
	</head>

	<body>
		
		<p><textarea id="txt_src" rows="20" cols="150" class="input"></textarea></p>
		<p><textarea id="txt_dest" rows="20" cols="150" class="input"></textarea></p>
		
		<button class="btn btn-lg btn-primary btn-block" id="btn_cleanHTML">
					Clean!
				</button>
	</body>
</html>
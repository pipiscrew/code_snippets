'source : http://www.w3schools.com/Ajax/ajax_server.asp

<script type="text/javascript">
    function ajaxFunction() {
        var xmlHttp;
        try {
            // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {
                    alert("Your browser does not support AJAX!");
                    return false;
                }
            }
        }
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4) {
                document.getElementById("resultSQL").innerHTML = xmlHttp.responseText;
            }
        }
        xmlHttp.open("POST", "queryRUN.asp", true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send("sqlStatement=" + encodeURI(document.getElementById("sqlStatement").value));
    }
</script>

** mproyme na diamorfwsoyme tis 3teleytaies grammes ama 8eloyme na kanoyme mono GET
  xmlHttp.open("GET","time.asp",true);
  xmlHttp.send(null);

**
document.getElementById("sqlStatement") einai ena textbox sthn forma mas

**Button calling ^^ the function :
<input id="ExecuteSQL" type="button" value="execute" onclick="ajaxFunction();" />

**Gia na dei3oyme ta data poy epistrefei h selida queryRUN exoyme balei ena tag <div> :
<div id="resultSQL">SQL Result</div>



o kwdikas toy queryRUN.asp einai :
<%
dim rs
dim tmp

tmp = cstr(request.form("sqlStatement"))

set rs = getrecordset(tmp)

response.Write("<table width=""100%"" border=""1"" bordercolor=""#666666"" cellspacing=""0"" cellpadding=""0"">")
%>
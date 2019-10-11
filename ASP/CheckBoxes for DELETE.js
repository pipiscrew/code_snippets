response.Write("<td><input type='checkbox' value='" & rs(0) & "' name='recordID'></td>")

^^to rs(0) einai to ID ths eggrafhs^^

kai meta JavaScript gia na doyme pia einai checkarismena :

<script language="JavaScript" type="text/javascript">
        
        function Update_Record(Id) {
                frm0.H_Rec_ID.value = Id;
                frm0.action = "updateRecord.asp";
                frm0.submit();
        }
                
        function ListRemove() {
                var Str = "-1";
                for (i=0 ; i<frm0.elements.length; i++) {
                        if ((frm0.elements[i].type == "checkbox") && (frm0.elements[i].name == "recordID")) {
                                if (!(frm0.elements[i].value == "DISABLED" || frm0.elements[i].disabled)) {
                                        if (frm0.elements[i].checked) {
                                                Str = Str + "," + frm0.elements[i].value;
                                        }
                                }
                        }
                }
                frm0.H_Selected_IDs.value = Str;
                if (Str == "-1") {
                        alert("parakalw epile3te mia eggrafh");
                        frm0.H_Selected_IDs.value = "";
                } else {
                        if (!confirm("eiste sigoyros gia thn diagrafh twn epilegmenwn eggrafwn;")) {
                                frm0.H_Selected_IDs.value = "";
                                return false;
                        }

                        frm0.action = "delete.asp";
                        frm0.submit();
                }
        }
</script>


to button poy kalei to JavaScript:
<input name="Button" type="button" onClick="ListRemove(); return false;" value="Delete Checked">


prosoxh sto BODY prepei na exoyme :
<body onLoad="frm0=document.forms[0];">


to delete.asp :

<% Dim tmpSTR
    
		tmpSTR="delete from [Avail] where AvailID in (" & Request.form("H_Selected_IDs") & ")"
		ExecuteSQL(tmpSTR)
    
   response.Redirect("http://localhost:81/+myPRJ")

%>
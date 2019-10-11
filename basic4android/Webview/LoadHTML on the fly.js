	Dim lbl As WebView
	lbl.Initialize("cellPRD") 'need this to create an event
	'//lbl.LoadHtml("<b>" & productName & "</b><br>this is a test!")
	lbl.LoadHtml("<table border=" & QUOTE & "0" & QUOTE & " cellpadding=" & QUOTE & "0" & QUOTE & " cellspacing=" & QUOTE & "0" & QUOTE & " style=" & QUOTE & "width: 100%;" & QUOTE & ">" & _
"  <tr>" & _
"    <td style=" & QUOTE & "width: 90%; " & QUOTE & "><b>" & productName & "</b></td>" & _
"	<td style=" & QUOTE & "text-align: right; vertical-align: top; " & QUOTE & "><b>Price</b></td>" & _
"  </tr>" & _
"  <tr>" & _
"    <td  colspan=" & QUOTE & "2" & QUOTE & ">999.99€</td>" & _
"  </tr>" & _
"</table>" )
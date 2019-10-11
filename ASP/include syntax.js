<%@ Language=VBScript %>
<% Response.Buffer = true %>
<!--#include file="GeneralMOD.asp"-->



<% Response.Buffer = true %> = Better performance wait server complete 
					 the render of the page.. then post it to user


ana pasa stigmh :

<p><!--#include file="time.inc"--></p>

to time.inc:
<%
Response.Write(Time)
%>
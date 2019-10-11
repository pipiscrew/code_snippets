//https://msdn.microsoft.com/en-us/library/ms972976.aspx


//disable it through Web.config for all pages using <pages enableViewState="false" />

	<?xml version="1.0"?>
	
	<!--
	  For more information on how to configure your ASP.NET application, please visit
	  http://go.microsoft.com/fwlink/?LinkId=169433
	  -->
	
	<configuration>
	    <system.web>
	      <compilation debug="true" targetFramework="4.5" />
	      <httpRuntime targetFramework="4.5" />
	      
	      <pages enableViewState="false" />
	    </system.web>
	
	</configuration>
	
	
//disable on a page
	<%@ Page Language="C#" EnableViewState="false" AutoEventWireup="true"
	CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1"  %>
	
	
//warning the hidden field is always visible even turned OFF!! aka :
<div class="aspNetHidden">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="heQ5ECpMil93RDNl0WRquLdPfp8pLKaSeDlFfSqq/YDHE0zuDUfpSF0jZnrt+VHecGlOXVoHCpwDpf22i5OQFa0qNgC2aVLp2laM0DJgSoU=" />
</div>
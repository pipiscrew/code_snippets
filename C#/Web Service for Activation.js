//http://www.medicalconnections.co.uk/kb/Web_Service_for_Activation
//use
LicenseService licensing = new LicenseService();
string result = licensing.GetLicense("1234ABCD", "5.5", "Your Key", "CustInfo1", "CustInfo2", "Workstation");

//class
using System.Diagnostics;
using System.Xml.Serialization;
using System;
using System.Web.Services.Protocols;
using System.ComponentModel;
using System.Web.Services;

[System.ComponentModel.DesignerCategoryAttribute("code")]
[System.Web.Services.WebServiceBindingAttribute(Name = "LicenseServiceSoap", 
         Namespace = "http://licensing.medicalconnections.co.uk/")]
[System.Reflection.Obfuscation(Exclude = true)]
internal class LicenseService : System.Web.Services.Protocols.SoapHttpClientProtocol
{
   /// <remarks/>
   public LicenseService()
   {
       this.Url = "http://licenseserver1.medicalconnections.co.uk/LicenseService.asmx";
   }

   /// <remarks/>
   [System.Web.Services.Protocols.SoapDocumentMethodAttribute("http://licensing.medicalconnections.co.uk/GetLicense", 
       RequestNamespace = "http://licensing.medicalconnections.co.uk/", 
       ResponseNamespace = "http://licensing.medicalconnections.co.uk/", 
       Use = System.Web.Services.Description.SoapBindingUse.Literal, 
       ParameterStyle = System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
   public string GetLicense(string MachineID, string Version, string AuthenticationKey, 
       string CustomerInfo1, string CustomerInfo2, string LicenseType)
   {
       object[] results = this.Invoke("GetLicense", new object[] {
                       MachineID,
                       Version,
                       AuthenticationKey,
                       CustomerInfo1,
                       CustomerInfo2,
                       LicenseType});
       return ((string)(results[0]));
   }

   /// <remarks/>
   public System.IAsyncResult BeginGetLicense(string MachineID, string Version, string AuthenticationKey, 
       string CustomerInfo1, string CustomerInfo2, string LicenseType, 
       System.AsyncCallback callback, object asyncState)
   {
       return this.BeginInvoke("GetLicense", new object[] {
                       MachineID,
                       Version,
                       AuthenticationKey,
                       CustomerInfo1,
                       CustomerInfo2,
                       LicenseType}, callback, asyncState);
   }

   /// <remarks/>
   public string EndGetLicense(System.IAsyncResult asyncResult)
   {
       object[] results = this.EndInvoke(asyncResult);
       return ((string)(results[0]));
   }
}
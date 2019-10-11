try
{
    if (Parameters == null || Parameters.Count() == 0)
        return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert Customer script failed. Parameters not passed", null, true);

    COM_Customer customer = Parameters[0] as COM_Customer;
    if (customer == null) return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert script failed. Customer is null", null, true);
  
    if (!string.IsNullOrEmpty(customer.Customer_Code)) return new Nephele.Framework.Log.ResultMessage(true, "B2C Insert Customer script failed. Customer has already an erp code", null, true);
  
    string customerPrefix = SysParameter.GetParameterTextValue1("B2CCUSTOMERCODEPREFIX");
    int customerPrefixNo = SysParameter.GetParameterNumeric1("B2CCUSTOMERCODEPREFIX", 1);

    string customerAtlantisCode = customerPrefix + "." + (customerPrefixNo + 1).ToString().PadLeft(5, '0');
     
    string customerCity = (customer.Customer_DistrictArea_ID.HasValue ? " " + ComDistrictArea.GetDistrictAreaName(customer.Customer_DistrictArea_ID.Value, 1) : string.Empty);
    if (customer.Customer_Country_ID.HasValue && customer.Customer_Country_ID.Value != 1)
      customerCity = customer.Customer_City;
  
	 string customerDistrict;
	 
	string customerDistrict = (customer.Customer_District_ID.HasValue ? " " + ComDistrict.GetDistrictName(customer.Customer_District_ID.Value, 1) : string.Empty);
  
    StringBuilder xmlSb = new StringBuilder("<ATLCOMMAND><ACTDEF><AUTHDATA USER=\"unisoft\" PASSWORD=\"\" /><ACTDATA ACTION=\"DM_INSERT\" DMCLASS=\"TCUSTOMER\" /><OPTDATA RECNODES=\"1\" />" +
        "</ACTDEF><TABLEDATA><CUSTOMER><RECDATA><UREC CODE=\"" + customerAtlantisCode + "\" " +
        "NAME=\"" + XXX_Nakas1.Helpers.Utils.ReplaceCharsForAtlantis(customer.Customer_LastName.ToUpper().Replace("Ά", "Α").Replace("Έ", "Ε").Replace("Ή", "Η").Replace("Ί", "Ι").Replace("Ό", "Ο").Replace("Ύ", "Υ").Replace("Ώ", "Ω")) + " " + XXX_Nakas1.Helpers.Utils.ReplaceCharsForAtlantis(customer.Customer_FirstName.ToUpper().Replace("Ά", "Α").Replace("Έ", "Ε").Replace("Ή", "Η").Replace("Ί", "Ι").Replace("Ό", "Ο").Replace("Ύ", "Υ").Replace("Ώ", "Ω")) +
        "\" OCCUPATION=\"" + (!string.IsNullOrEmpty(customer.Customer_Occupation) ? customer.Customer_Occupation.ToUpper() : string.Empty) + "\" COMID=\"1\" " +
        "STREET1=\"" + (!string.IsNullOrEmpty(customer.Customer_Address) ? customer.Customer_Address.ToUpper() : string.Empty) + "\" CITY1=\"" + customerCity.ToUpper() + "\" " +
        " ZIPCODE1=\"" + (!string.IsNullOrEmpty(customer.Customer_ZipCode) ? customer.Customer_ZipCode : string.Empty) + "\" " +
        "PHONE11=\"" + (!string.IsNullOrEmpty(customer.Customer_Phone1) ? customer.Customer_Phone1 : string.Empty) + "\" " +
		"DISTRICT1=\"" + (!string.IsNullOrEmpty(customerDistrict) ? customerDistrict : string.Empty) + "\" " +
        "PHONE12=\"" + (!string.IsNullOrEmpty(customer.Customer_Mobile) ? customer.Customer_Mobile : string.Empty) + "\" " +
        "EMAIL=\"" + (!string.IsNullOrEmpty(customer.Customer_Email) ? customer.Customer_Email : string.Empty) + "\" /></RECDATA></CUSTOMER></TABLEDATA></ATLCOMMAND>");

    new Nephele.Framework.Log.ResultMessage(false, xmlSb.ToString(), null, true);
    string result = XXX_Nakas1.Helpers.AtlantisIntegration.GetAtlantisXmlData(xmlSb.ToString());
    if (string.IsNullOrEmpty(result)) 
        return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert Customer script failed. Atlantis result for B2C Insert customer is null." + result, null, true);
  
    if (result.IndexOf("(2002)") > -1)
        return new Nephele.Framework.Log.ResultMessage(true, "B2C Insert Customer script failed. Customer has already an erp code", null, true);
  
    //get atlantis customer id
    result = XXX_Nakas1.Helpers.AtlantisIntegration.GetAtlantisQueryData("select id from customer where code = '" + customerAtlantisCode + "'");
    if (string.IsNullOrEmpty(result)) 
        return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert Customer script failed. Atlantis result for B2C Insert customer is null." + result, null, true);
  
    System.Xml.XmlDocument xmlDoc = new System.Xml.XmlDocument();
    xmlDoc.LoadXml(result);

    string atlantisCustomerId = xmlDoc.DocumentElement.SelectNodes("ROWDATA")[0]["ROW"].Attributes["ID"].Value.ToString();
    if (string.IsNullOrEmpty(atlantisCustomerId)) return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert script failed." +
	"Unable to get Atlantis Customer ID. GetAtlantisCustomerID() for " + customerAtlantisCode + " failed." + result, null, true);

    //update customer
    using (B2BDataContext context = new B2BDataContext(System.Configuration.ConfigurationManager.ConnectionStrings["DomainConnectionString"].ToString()))
    {
    	customer = context.COM_Customers.FirstOrDefault(c => c.Customer_ID == customer.Customer_ID);
    	customer.Customer_Code = customerAtlantisCode;
    	customer.Customer_Migration_ID = Int32.Parse(atlantisCustomerId);
    	context.SubmitChanges();
    }
      
    using (BasicDataContext bContext = new BasicDataContext(System.Configuration.ConfigurationManager.ConnectionStrings["DomainConnectionString"].ToString()))
    {
    	SYS_Parameter parameter = bContext.SYS_Parameters.FirstOrDefault(p => p.Parameter_Code == "B2CCUSTOMERCODEPREFIX");
    	parameter.Parameter_Numeric1 = customerPrefixNo + 1;
    	bContext.SubmitChanges();
    }

    return new Nephele.Framework.Log.ResultMessage(true, "New customer with id " + customer.Customer_ID.ToString() + " successfully inserted to Atlantis", null, true);
}
catch (Exception ex)
{
    return new Nephele.Framework.Log.ResultMessage(false, "B2C Insert Customer script failed. " + ex.StackTrace, ex, true);
}

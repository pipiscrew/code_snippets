You must have VS 2008 with SP1 or                                                                      Visual Web Developer 2008 (full/or express edition) with SP1
--------------------------------------------------------------

1-IIS > Default Web Site (and general for ur virtual directory use the same settings) > Properties
  a) TAB: Web Site
       check HTTP Keep-Alives Enabled                                   
              
  b) TAB: Home Directory > Configuration button
          TAB : Debugging
            check Enable ASP server-side script debugging
       	check Send Detailed ASP error message to client
            
  c) TAB : Directory Security > Edit button
        check Anonymous Access with PC as username                                                                                                                                                                                           
        check Allow IIS to control password
        check Integrated Windows Authentication   
   
  d) TAB : Home Directory 
        if @ application settings the button caption said "Create"
        click it
        
  e) TAB : ASP.NET
        version combo must be set to 2.0.50727
        
                                                                                                                                                                                                                                                                                                                                                                 
if u still have problems:
	  **0**
	  IIS > ur virtual directory > right click > All tasks > Permissions Wizard
			*select new security settings from template
			apply "Public Web Site" scenario

        **1**                                                        
        Install ASP.NET with DOS execute:
        C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\aspnet_regiis -i                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        
        **2**
        In IE Tools > Internet Options > Security > select "Trusted Sites" > Sites button
          uncheck "Require server verifications (https:) for all sites in this zone
          add http://localhost to list
          apply & close
          
        In IE Tools > Internet Options > Advanced
          uncheck Disable Script Debugging (IE)
          uncheck Disable Script Debugging (Other)
          apply & close                   
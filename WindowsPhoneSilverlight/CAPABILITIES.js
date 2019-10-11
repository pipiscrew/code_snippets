In the WMAppManifest.xml file (under Properties (expand it) in the solution), there is a <Capabilities/> section. 
When you create a new Silverlight for Windows Phone 7  or Windows Phone Game project, 
these capabilities are set up for you (as long as you're using the latest SDK refresh, at least).

Basically, capabilities say what kind of resources will be available to your application.
For instance: if you remove the ID_CAP_NETWORKING capability, your application wont
 be allowed to connect to the network.
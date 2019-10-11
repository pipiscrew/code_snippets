'http://msdn.microsoft.com/en-us/library/system.windows.forms.listviewgroup.aspx

Imports System


Private isRunningXPOrLater As Boolean = OSFeature.Feature.IsPresent(OSFeature.Themes)



'example :
If isRunningXPOrLater then 

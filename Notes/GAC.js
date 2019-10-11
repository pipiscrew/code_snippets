GAC locations :
C:\Windows\assembly
C:\Windows\Microsoft.NET\assembly\GAC_MSIL
C:\Windows\Microsoft.NET\assembly\GAC_32
C:\Windows\Microsoft.NET\assembly\GAC_64

what figure out - when assemblies install @ GAC_MSIL is not visible @ C:\Windows\assembly

--

by default the installer installs *all DLLs* to GAC, 
because is .net component at least the *.design.dll should be there, otherwise nothing working.


Follow the steps :

-start menu > Microsoft Visual Studio 201x > Visual Studio Tools > open the 'Developer Command Prompt for VS'
-example you extract the archive to c:\test, you have to navigate there by :
	cd /d c:\test\bin

then run one by one the following to working the *.design.dll files to GAC

gacutil /i FarPoint.Win.Chart.Design.dll /f
gacutil /i FarPoint.Win.Spread.Design.dll /f
gacutil /i GrapeCity.Win.PluginInputMan.Design.dll /f


**if previously you have installed the component by the installer you have to remove the dlls from GAC**

the files are not showing @ C:\Windows\assembly

navigate at :
C:\Windows\Microsoft.NET\assembly\GAC_MSIL

and delete all FarPoint+GrapeCity folders, maybe is better to execute for all dlls the (wihtout .dll) 
gacutil -u filename

because the information stored also at REGISTRY at :
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Fusion\GACChangeNotification\Default
***

--

Open the VStudio go to TOOLBOX create a new section, r-click the section > Choose Items > '.NET Framework Components' tab > Browse select the 
FarPoint.Win.Chart.dll
FarPoint.Win.Spread.dll

always, you have to reference the FarPoint.Win.dll

--

I random sample I tried is outdated, the xmls they distributing saved by old versions, when try to load them, an error occured coz cant find some
class stored in xmls.

--

*install*
gacutil /i x.dll /f (The /f option overwrites any existing assembly that has the same assembly name. )

*list*
gacutil -l x.dll

*uninstall without writing .dll
gacutil –u x

*list specific*
gacutil /lr x.dll

'How to: Generate Registry Information for an Installer (C#)
'http://msdn.microsoft.com/en-us/library/bb166239%28v=vs.80%29.aspx

source : http://msdn.microsoft.com/en-us/library/bb458038.aspx

   2.

      regpkg /regfile:DeployPackage.reg /codebase DeployPackage.dll
   3.

      Open the resulting DeployPackage.reg file in Notepad.

DeployPackage.reg should resemble the following code:
Copy

REGEDIT4

[HKEY_LOCAL_MACHINE\Software\Microsoft\VisualStudio\10.0\InstalledProducts\DeployPackage]
@="#110"
"Package"="{bad3390c-b2a2-4bfc-a3ad-87e8119df413}"
"ProductDetails"="#112"
"PID"="1.0"
"LogoID"="#400"
[HKEY_LOCAL_MACHINE\Software\Microsoft\VisualStudio\9.0\Packages\{bad3390c-b2a2-4bfc-a3ad-87e8119df413}]
@="Company.DeployPackage.DeployPackage, DeployPackage, Version=1.0.2796.21244, Culture=neutral, PublicKeyToken=125cdbd1e07e0d79"
"InprocServer32"="C:\\Windows\\system32\\mscoree.dll"
"Class"="Company.DeployPackage.DeployPackage"
"CodeBase"="D:\\DeployPackage\\DeployPackage\\bin\\Debug\\DeployPackage.dll"
[HKEY_LOCAL_MACHINE\Software\Microsoft\VisualStudio\9.0\Menus]
"{bad3390c-b2a2-4bfc-a3ad-87e8119df413}"=", 1000, 1"


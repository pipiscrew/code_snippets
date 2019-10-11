//or use GAC API - https://www.codeproject.com/Articles/8285/GAC-API-Interface

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{41010CB2-D2FC-49E4-8129-39F0424FF6C8}
AppName=My Program
AppVerName=My Program 1.5
AppPublisher=My Company, Inc.
AppPublisherURL=http://www.example.com/
AppSupportURL=http://www.example.com/
AppUpdatesURL=http://www.example.com/
DefaultDirName={pf}\My Program
DefaultGroupName=My Program
OutputBaseFilename=setup
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "MyAssemblyName.dll"; DestDir: "{app}"; Flags: ignoreversion gacinstall; StrongAssemblyName: "MyAssemblyName, Version=1.0.0.0, Culture=neutral, PublicKeyToken=abcdef123456, ProcessorArchitecture=MSIL"
Source: "MyAssemblyName.tlb"; DestDir: "{app}"; Flags: ignoreversion;
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Run]
Filename: "{dotnet20}\regasm.exe"; Parameters: "{app}\MyAssemblyName.tlb"; Description: "Register TLB"; Flags: nowait
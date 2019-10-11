'source - http://www.aronhelser.com/2010/09/inno-setup-custom-data-directory.html
[Code]
var VSDir: string;

function InitializeSetup(): Boolean;
begin
  if RegQueryStringValue(HKLM, 'SOFTWARE\Microsoft\VisualStudio\SxS\VS7', '9.0', VSDir) then begin
    MsgBox('Value is "' + VSDir + '"', mbInformation, MB_OK);
    Result := TRUE;

    end else begin

    MsgBox('Visual Studio not found at Program Files\Microsoft Visual Studio 9.0', mbInformation, MB_OK);
    Result := false;
  end;
end;

function GetDataDir(Param: String): String;
begin
  { Return the selected DataDir }
  //MsgBox('GetDataDir.', mbError, MB_OK);
  //RegQueryStringValue(HKLM, 'SOFTWARE\Microsoft\VisualStudio\SxS\VS7', '9.0', VSDir);
  Result := VSDir
end;


[Files]
Source: tabV\WindowsApplication1\bin\Debug\DocktorUI.dll; DestDir: {code:GetDataDir}tabV\WindowsApplication1\bin\Debug
Source: tabV\WindowsApplication1\bin\Debug\WindowsApplication1.exe; DestDir: {code:GetDataDir}tabV\WindowsApplication1\bin\Debug
Source: tabV\WindowsApplication1\bin\Debug\WindowsApplication1.pdb; DestDir: {code:GetDataDir}tabV\WindowsApplication1\bin\Debug
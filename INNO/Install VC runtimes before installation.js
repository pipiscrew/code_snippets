//http://www.experts-exchange.com/Programming/Installation/Q_24859803.html

[Code]
procedure DoPreInstall();
var
  ResultCode: Integer;

begin
Log('Inside DoPreInstall');
ExtractTemporaryFile('vcredist_x86.exe');
Exec(ExpandConstant('{tmp}\vcredist_x86.exe'), '', '', SW_SHOW, ewWaitUntilTerminated, ResultCode);
end;

procedure CurStepChanged(CurStep: TSetupStep);
begin
  if CurStep = ssInstall then
  begin
    DoPreInstall();
  end;
end;

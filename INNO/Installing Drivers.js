Since we were discussing Inno Setup the other day and I just went through
some pain, I thought Id share and hopefully help someone else.

Ive always created an install batch file which calls rundll32 and does the
install of my drivers.  It's always worked great, until Vista 64.  Since
Inno Setup is a 32-bit program, redirection is on (to the SysWow64 folder),
but they are smart and disable it, which made me think I'd be OK.
Unfortunately, when Inno launched my batch file, it apparently got a 32-bit
cmd.exe, which ran the 32-bit rundll32 which put my 64-bit driver in the
SysWow64\drivers folder.

Soo... to install a 64-bit driver from the 32-bit Inno setup, use something
like the following in your .iss file (especially the part in the Run
section):


[Code]
function IsX64: Boolean;
begin
  Result := IsWin64 and (ProcessorArchitecture = paX64);
end;

function IsIA64: Boolean;
begin
  Result := IsWin64 and (ProcessorArchitecture = paIA64);
end;

function Isx86: Boolean;
begin
  Result := not IsWin64;
end;

[Files]
Source: <driver>x86.sys; DestDir: {app}; Check: Isx86;
Source: <driver>x86.inf; DestDir: {app}; Check: Isx86;
Source: <driver>x64.sys; DestDir: {app}; Check: Isx64;
Source: <driver>x64.inf; DestDir: {app}; Check: Isx64;
Source: <driver>IA64.sys; DestDir: {app}; Check: IsIA64;
Source: <driver>IA64.inf; DestDir: {app}; Check: IsIA64;

[Run]
Filename: {sys}\rundll32.exe; Parameters: "setupapi,InstallHinfSection
DefaultInstall 132 .\<driver>IA64.inf"; WorkingDir: {app}; Flags: 64bit;
Check: IsIA64;
Filename: {sys}\rundll32.exe; Parameters: "setupapi,InstallHinfSection
DefaultInstall 132 .\<driver>x64.inf"; WorkingDir: {app}; Flags: 64bit;
Check: IsX64;
Filename: {sys}\rundll32.exe; Parameters: "setupapi,InstallHinfSection
DefaultInstall 132 .\<driver>x86.inf"; WorkingDir: {app}; Flags: 32bit;
Check: IsX86;

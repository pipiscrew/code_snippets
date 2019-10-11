set msBuildDir=%WINDIR%\Microsoft.NET\Framework\v3.5
call %msBuildDir%\msbuild.exe  "x:\x\WindowsApplication1.sln" /p:Configuration=Release /p:Platform="Any CPU" /l:FileLogger,Microsoft.Build.Engine;logfile=Manual_MSBuild_ReleaseVersion_LOG.log
pause
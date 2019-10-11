Start > Programs > VS > Tools > Command Prompt

locate the directory include the dll

example :
type : regasm Microsoft.VisualStudio.Academic.FacultyTools.dll

******
You may use the following command to verify the assembly for strong name
signature self consistency. It should say "Assembly
Microsoft.VisualStudio.dll' is valid".

Sn -vf Microsoft.VisualStudio.dll

And then you can register the assembly for verification skipping to
workaround the problem:

Sn -Vr Microsoft.VisualStudio.dll

I hope this helps you.

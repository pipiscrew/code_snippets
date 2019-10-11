'source:
'http://www.codeproject.com/KB/cs/DynamicCodeGeneration.aspx
'http://www.dotnet247.com/247reference/msgs/24/121977.aspx
'http://msdn.microsoft.com/en-us/library/system.codedom%28VS.80%29.aspx



'http://www.dotnet247.com/247reference/msgs/24/121977.aspx
source :

parameters = new System.CodeDom.Compiler.CompilerParameters();
foreach (System.Reflection.Assembly asm in
System.AppDomain.CurrentDomain.GetAssemblies())
{
if (asm is System.Reflection.Emit.AssemblyBuilder)
continue;

parameters.ReferencedAssemblies.Add(asm.Location);
}
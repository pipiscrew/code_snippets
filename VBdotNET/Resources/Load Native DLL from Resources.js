coderipper said : I just find how ClisSecure loads his routine:

Assembly executingAssembly = Assembly.GetExecutingAssembly();
string name = null;
string str2 = null;
if (IntPtr.Size == 4)
{
name = "c8573e7d-5150-4498-aa61-94341eb1717e";
str2 = "CliSecureRT";
}
else
{
name = "bf42d95b-3c73-4ea6-9acd-f6faa32418a8";
str2 = "CliSecureRT64";
}
GZipStream input = new GZipStream(executingAssembly.GetManifestResourceStream(name), CompressionMode.Decompress);
BinaryReader reader = new BinaryReader(input);
byte[] buffer = reader.ReadBytes(reader.ReadInt32());
string path = string.Format(@"{0}{1}\", Path.GetTempPath(), name);
Directory.CreateDirectory(path);
string str4 = path + str2 + ".dll";
if (!File.Exists(str4))
{
FileStream stream2 = File.OpenWrite(str4);
stream2.Write(buffer, 0, buffer.Length);
stream2.Close();
}
return LoadLibraryA(str4);
}
} 


<MethodImpl(MethodImplOptions.ForwardRef), DllImport("kernel32.dll", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
Private Shared Function LoadLibraryA(ByVal String) As IntPtr
End Function

 

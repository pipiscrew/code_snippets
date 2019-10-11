
.class public auto ansi beforefieldinit Class1
       extends [mscorlib]System.Object
{
  .method public hidebysig static uint8[] 
          veteran() cil managed
  {
    // Code size       74 (0x4a)
    .maxstack  4
    .locals init ([0] string test,
             [1] string[] newARR,
             [2] uint8[] tmpa,
             [3] int32 i,
             [4] char[] CS$0$0000)
    IL_0000:  ldstr      "00-24-00-00-04-80-00-00-94-00-00-00-06-02-00-00-00-24-00-00-52-53-41-31-00-04-00-00-01-00-01-00-8B-7D-57-CC-3F-C5-34-76-45-B1-A7-E6-01-A4-C8-CA-40-78-D7-FD-5E-C6-BE-59-42-05-9C-5D-92-5D-CC-55-73-0E-99-05-23-6A-D6-CD-76-D9-AC-A7-19-96-E4-39-D8-3B-29-59-0E-26-3F-F3-C0-0A-6D-56-59-09-D8-72-F5-66-FC-10-CC-2A-5C-ED-44-8B-0A-22-C6-E8-F2-1C-E0-ED-5B-D4-80-86-36-06-60-C3-01-DB-92-02-BD-A5-DD-A7-5D-24-1B-8F-05-9D-64-D7-4E-64-B8-46-1C-3E-88-8E-B9-C3-C1-2C-44-AF-03-4F-55-FF-29-FE-44-C5"
    IL_0005:  stloc.0
    IL_0006:  ldnull
    IL_0007:  stloc.1
    IL_0008:  ldc.i4     0xa0
    IL_000d:  newarr     [mscorlib]System.Byte
    IL_0012:  stloc.2
    IL_0013:  ldloc.0
    IL_0014:  ldc.i4.1
    IL_0015:  newarr     [mscorlib]System.Char
    IL_001a:  stloc.s    CS$0$0000
    IL_001c:  ldloc.s    CS$0$0000
    IL_001e:  ldc.i4.0
    IL_001f:  ldc.i4.s   45
    IL_0021:  stelem.i2
    IL_0022:  ldloc.s    CS$0$0000
    IL_0024:  callvirt   instance string[] [mscorlib]System.String::Split(char[])
    IL_0029:  stloc.1
    IL_002a:  ldc.i4.0
    IL_002b:  stloc.3
    IL_002c:  ldc.i4.0
    IL_002d:  stloc.3
    IL_002e:  br.s       IL_0042

    IL_0030:  ldloc.2
    IL_0031:  ldloc.3
    IL_0032:  ldloc.1
    IL_0033:  ldloc.3
    IL_0034:  ldelem.ref
    IL_0035:  ldc.i4.s   16
    IL_0037:  call       int32 [mscorlib]System.Convert::ToInt32(string,
                                                                 int32)
    IL_003c:  conv.u1
    IL_003d:  stelem.i1
    IL_003e:  ldloc.3
    IL_003f:  ldc.i4.1
    IL_0040:  add
    IL_0041:  stloc.3
    IL_0042:  ldloc.3
    IL_0043:  ldloc.1
    IL_0044:  ldlen
    IL_0045:  conv.i4
    IL_0046:  blt.s      IL_0030

    IL_0048:  ldloc.2
    IL_0049:  ret
  } // end of method veteran

  .method public hidebysig specialname rtspecialname 
          instance void  .ctor() cil managed
  {
    // Code size       7 (0x7)
    .maxstack  8
    IL_0000:  ldarg.0
    IL_0001:  call       instance void [mscorlib]System.Object::.ctor()
    IL_0006:  ret
  } // end of method Class1::.ctor

} // end of class WindowsFormsApplication1.Class1
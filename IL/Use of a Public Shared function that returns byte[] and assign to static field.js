  .field private static initonly uint8[] ''
  .method private hidebysig specialname rtspecialname static 
          void  .cctor() cil managed
  {
    // Code size       31 (0x1f)
    .maxstack  8

    IL_0014:  call       uint8[] Class1::veteran()
    IL_0019:  stsfld     uint8[] ''::''
    IL_001e:  ret
  } // end of method ''::.cctor

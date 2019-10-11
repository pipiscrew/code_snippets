//http://stackoverflow.com/questions/6349332/saving-a-dynamicmethod-to-disk

  var assemblyName = new AssemblyName("SomeName");
  var assemblyBuilder = AppDomain.CurrentDomain.DefineDynamicAssembly(assemblyName, AssemblyBuilderAccess.RunAndSave, @"c:");
  var moduleBuilder = assemblyBuilder.DefineDynamicModule(assemblyName.Name, assemblyName.Name +  ".dll");

  TypeBuilder builder = moduleBuilder.DefineType("Test", TypeAttributes.Public);
  var methodBuilder = builder.DefineMethod("DynamicCreate", MethodAttributes.Public, typeof(T), new[] { typeof(IDataRecord) }); 
  /* this line is a replacement for your  new DynamicMethod(....)  line of code

  /* GENERATE YOUR IL CODE HERE */

  var t = builder.CreateType();
  assemblyBuilder.Save(assemblyName.Name + ".dll");
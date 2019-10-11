//https://stackoverflow.com/a/44991/1320686

assembly = AssemblyDefinition.ReadAssembly(fileStream, new ReaderParameters { AssemblyResolver = resolver });


var type_lic_attrib	utes = (from t in assembly.MainModule.Types
                                          from y in t.CustomAttributes
                                          where t.HasCustomAttributes
                                          where y.AttributeType.FullName == "System.ComponentModel.LicenseProviderAttribute"
                                          select new { t, y });

for (int i = type_lic_attributes.Count(); i > 0; i--)
{
    type_lic_attributes.ElementAt(i-1).t.CustomAttributes.Remove(type_lic_attributes.ElementAt(i-1).y);
}
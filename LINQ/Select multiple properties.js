//select miultple properties
var fs = assembly.MainModule.Types.Where(p => p.BaseType != null).
OrderBy(p => p.BaseType.Name).
Select(type => new { type.Name,type.MetadataToken }).ToList();


//select multiple properties with alias to avoid properties same name
var fs = assembly.MainModule.Types.Where(p => p.BaseType != null).
OrderBy(p => p.BaseType.Name).
Select(type => new { name = type.Name, bname= type.BaseType.Name , token = type.MetadataToken }).ToList();


//or can return the item obj ex.
(Select(type => type)
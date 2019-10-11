//http://blog.clauskonrad.net/2010/11/wp7-how-to-consume-json-data-from.html
This is where the DataContract kicks in to help out! Using this class, you can actually map
 this JSON string into your own object construction at will. You start by declaring your
 own local representation (MyPersonClass) and decorating this with Name=’JSON-field name’.
 In this way – the DataContractJsonSerializer will handle the mapping.

[DataContract]
public class MyPersonClass
{
    [DataMember(Name="BirthYear")] //mapping: BirthYear -> BornYear
    public int BornYear { get; set; }

    [DataMember(Name = "FirstName")] //mapping: FirstName -> Name
    public string Name { get; set; }

    [DataMember(Name = "LastYear")] //mapping: LastName -> SurName
    public string SurName { get; set; }
}
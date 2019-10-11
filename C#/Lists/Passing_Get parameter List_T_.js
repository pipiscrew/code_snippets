//https://stackoverflow.com/a/6624843
public void LogEmployees<T>(List<T> list) // Or IEnumerable<T> list
{
    foreach (T item in list)
    {

    }
}

//get
public static T FromXML<T>(string xml)
{
    using (StringReader stringReader = new StringReader(xml))
    {
        XmlSerializer serializer = new XmlSerializer(typeof(T));
        return (T)serializer.Deserialize(stringReader);
    }
}
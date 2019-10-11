Why not directly serialize/deserialize your classes?

Suppose you have a class like this:
Code:

public class Movie
{
  public string Title { get; set; }
  public int Rating { get; set; }
  public DateTime ReleaseDate { get; set; }
}

Here's how to serialize the object (i.e save it to xml) in 3 lines of code:
Code:

static public void SerializeToXML(Movie movie)
{
  TextWriter textWriter = new StreamWriter(@"C:\movie.xml");
  XmlSerializer serializer = new XmlSerializer(typeof(Movie));
  serializer.Serialize(textWriter, movie);
}

Deserializing (i.e. loading from XML) is also easy (also in 3 lines ):
Code:

static Movie DeserializeFromXML()
{
   TextReader textReader = new StreamReader(@"C:\movie.xml");
   XmlSerializer deserializer = new XmlSerializer(typeof(Movie));
   return (Movie)deserializer.Deserialize(textReader);
}

Simple, isn't it? Beats the hell out of the "static" code in the reply above.

You can even change the property names in the XML file by using XmlAttribute:
Code:

public class Movie
{
  [XmlElement("MovieName")]
  public string Title { get; set; }

  [XmlElement("MovieRating")]
  public float Rating { get; set; }

  [XmlElement("MovieReleaseDate")]
  public DateTime ReleaseDate { get; set; }
}

(De)Serializing lists/dictionaries is also easy - but requires slightly more code. Google "C# XML serialization" for more details. 
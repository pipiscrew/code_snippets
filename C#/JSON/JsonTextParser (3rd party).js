
using System.Net.Json;
JsonTextParser parser = new JsonTextParser();
JsonObject obj = parser.Parse(jsonText);
foreach (JsonObject field in obj as JsonObjectCollection)
{
string name = field.Name;
string value = field.GetValue();
string type = value.GetType().Name;
} 
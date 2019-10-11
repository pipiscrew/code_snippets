using System.Linq;
using System.Xml;
using System.Xml.Linq;

1**
 XElement apiXML = XElement.Load(streamResult);
 
                    var q = from c in apiXML.Descendants("media_item")
                    select (string)c.Element("url");

                    foreach (string na2me in q)
                            System.Diagnostics.Debug.WriteLine(na2me);v

I got :
http://beta.api.miroamer.com/v1.1/resource/?id=13d33c75c98ffe77015ad2b
http://beta.api.miroamer.com/v1.1/resource/?id=23d33c75c98ffe77015ad2b
http://beta.api.miroamer.com/v1.1/resource/?id=33d33c75c98ffe77015ad2b  


2** or select multiple fields ::
                    var q = from c in apiXML.Descendants("media_item")
                            select new
                            {
                                url = c.Element("url").Value,
                                audioFormat = c.Element("audio_format").Value,
                                MIME = c.Element("mime").Value,
                                Bitrate = c.Element("bitrate").Value
                            };


                    foreach (var na2me in q)
                    {
                            System.Diagnostics.Debug.WriteLine(na2me.url);
                            System.Diagnostics.Debug.WriteLine(na2me.Bitrate );
                            System.Diagnostics.Debug.WriteLine(na2me.audioFormat );
                            System.Diagnostics.Debug.WriteLine(na2me.MIME);
                    }
                    
 
          
the XML :
<radio_station>
	<id>e0a1069994ea5e</id>
	<name>ABC Triple J</name>
	<description/>
	<slogan>We Love Music</slogan>
	<callsign/>
	<network>ABC (Aus)</network>
	<frequency>105.7</frequency>
	<modulation>FM</modulation>
	−
	<media>
		−
		<media_item>
		−
		<url>
		http://beta.api.miroamer.com/v1.1/resource/?id=13d33c75c98ffe77015ad2b
		</url>
		<audio_format>MP3</audio_format>
		<mime>audio/x-mpegurl</mime>
		<bitrate>96</bitrate>
		</media_item>
	</media>
	<media>
		−
		<media_item>
		−
		<url>
		http://beta.api.miroamer.com/v1.1/resource/?id=23d33c75c98ffe77015ad2b
		</url>
		<audio_format>MP3</audio_format>
		<mime>audio/x-mpegurl</mime>
		<bitrate>96</bitrate>
		</media_item>
	</media>
	<media>
		−
		<media_item>
		−
		<url>
		http://beta.api.miroamer.com/v1.1/resource/?id=33d33c75c98ffe77015ad2b
		</url>
		<audio_format>MP3</audio_format>
		<mime>audio/x-mpegurl</mime>
		<bitrate>96</bitrate>
		</media_item>
	</media>
</radio_station>
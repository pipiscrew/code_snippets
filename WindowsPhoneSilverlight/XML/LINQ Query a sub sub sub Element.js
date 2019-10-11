private XElement apiXML;
apiXML = XElement.Load(reader);

foreach (XElement curElement in apiXML.Descendants("item"))
{
    try
    {
    	//because some item(s) no contains this element!!!
	    bool hasLogoTag = curElement.Descendants("logos").Any();
	
	    if (hasLogoTag == true)
	    {
	     var q = from c in curElement.Element("logos").Elements("logo")
	            where (int)c.Element("width") == 48
	            select (string)c.Element("url");
	
	   
	    foreach (string na2me in q)
	        System.Diagnostics.Debug.WriteLine(na2me);
	    }
    }
    catch (Exception e)
    {
        System.Diagnostics.Debug.WriteLine(e);
    }

    try
    {
        ItemID = (string)(curElement.Descendants("id").First());
        ItemName = (string)(curElement.Descendants("name").First());
        ItemName = General.ReplaceHTMLtxt("name");

        if (_ItemSubtitle_tagname.Length > 0)
            Subtitle = (string)(curElement.Descendants(_ItemSubtitle_tagname).First());

        theList.Add(new RadioListItem(ItemName, ItemID, Subtitle));
    }
    catch
    {
        System.Diagnostics.Debug.WriteLine("ERROR occured when adding to list!");
    }

}


the XML (in real XML , are plenty of <item>) :
<?xml version="1.0" encoding="utf-8" ?>
- <response>
      - <response_item>
            - <search_results>
                  - <count>
                        <slice>50</slice>
                        <total>100</total>
                  </count>
                  - <items>
                        - <item>
                              <id>e0a1069994ea5e</id>
                              <type>radio_station</type>
                              <name>ABC Triple J</name>
                              <frequency>105.7</frequency>
                              <modulation>FM</modulation>
                              - <media>
                                    - <media_item>
                                          <url>http://beta.api.miroamer.com/v1.1/resource/?id=3dacb2647bb3d7f148f0d5f2b</url>
                                          <audio_format>MP3</audio_format>
                                          <mime>audio/x-mpegurl</mime>
                                          <bitrate>96</bitrate>
                                    </media_item>
                                    - <media_item>
                                          <url>http://beta.api.miroamer.com/v1.1/resource/?id=e5fccd7e265d5153de07379f0</url>
                                          <audio_format>AAC</audio_format>
                                          <mime>audio/x-scpls</mime>
                                          <bitrate>48</bitrate>
                                    </media_item>
                                    - <media_item>
                                          <url>http://beta.api.miroamer.com/v1.1/resource/?id=2c732672e76a3cf9e020bae3</url>
                                          <audio_format>WMA</audio_format>
                                          <mime>video/x-ms-asf</mime>
                                          <bitrate>96</bitrate>
                                    </media_item>
                              </media>
                              - <genres>
                                    - <genre>
                                          <id>ROCK</id>
                                          <name>Rock</name>
                                          <genre_group_id>ROCK</genre_group_id>
                                          <genre_group_name>Rock</genre_group_name>
                                    </genre>
                              </genres>
                              <hosts />
                              - <languages>
                                    - <language>
                                          <iso_code>en</iso_code>
                                          <name>English</name>
                                    </language>
                              </languages>
                              - <logos>
                                    - <logo>
                                          <url>http://logos.miroamer.com/9b83e1acf0f51aec5cb1771c9856eb017235a11b.png</url>
                                          <mime>image/png</mime>
                                          <width>95</width>
                                          <height>50</height>
                                    </logo>
                                    - <logo>
                                          <url>http://logos.miroamer.com/d1eb3b73af6bab3ed95388c7ae606e10a04cee66.png</url>
                                          <mime>image/png</mime>
                                          <width>140</width>
                                          <height>73</height>
                                    </logo>
                                    - <logo>
                                          <url>http://logos.miroamer.com/8866faad014a565c6a32fb4a10a4907817b54667.png</url>
                                          <mime>image/png</mime>
                                          <width>70</width>
                                          <height>37</height>
                                    </logo>
                                    - <logo>
                                          <url>http://logos.miroamer.com/7c5b522b777726486ac061e27b07f8a8957bf9f3.png</url>
                                          <mime>image/png</mime>
                                          <width>48</width>
                                          <height>25</height>
                                    </logo>
                              </logos>
                              - <location>
                                    <region_id>OCEANIA</region_id>
                                    <region>Oceania</region>
                                    <country_iso>AU</country_iso>
                                    <country>Australia</country>
                                    <subdivision_fips>AS02</subdivision_fips>
                                    <subdivision>New South Wales</subdivision>
                                    <city_id />
                                    <city>Sydney</city>
                              </location>
                        </item>
                  </items>
            </search_results>
      </response_item>
</response>
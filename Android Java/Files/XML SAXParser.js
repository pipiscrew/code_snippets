//http://www.anddev.org/working_with_files-t115.html
        SAXParserFactory spf = SAXParserFactory.newInstance();
 
        SAXParser sp = spf.newSAXParser();
 
        XMLReader xr = sp.getXMLReader();
 
        xr.setContentHandler(new CUSTOMHANDLER());
 
        xr.parse(new InputSource(INPUT_STREAM));

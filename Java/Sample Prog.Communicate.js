
import java.io.*;
import java.util.Vector;

import javax.microedition.io.*;

import org.w3c.dom.Element ;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

import net.rim.device.api.io.*;
import net.rim.device.api.system.*;
import net.rim.device.api.ui.*;
import net.rim.device.api.ui.component.*;
import net.rim.device.api.ui.container.*;
import net.rim.device.api.xml.parsers.DocumentBuilder;
import net.rim.device.api.xml.parsers.DocumentBuilderFactory;
import net.rim.device.api.xml.parsers.ParserConfigurationException;

public class Main extends UiApplication implements FieldChangeListener
{ 
    private ProviderDemoScreen _mainScreen;
    private LoadingScreen _loadingScreen;
	FlowFieldManager _fieldManager;
    private String pc_client_url;
    private RichTextField _msg;
    private Vector providers;
    public static void main(String[] args)
    {
        // Create a new instance of the application and make the currently
        // running thread the application's event dispatching thread.
        Main theApp = new Main();
        theApp.enterEventDispatcher();
    }  

    public Main()
    {
       // _wapOptionsScreen = new WapOptionsScreen(this);
    	_fieldManager = new FlowFieldManager();
        _mainScreen = new ProviderDemoScreen();
        _loadingScreen = new LoadingScreen();
        _mainScreen.add(_fieldManager);
        _mainScreen.setTitle("BB Demo");
        pc_client_url = "http://10.252.9.109:9000";
        _msg = new RichTextField();
        providers = new Vector();

        _loadingScreen.add(_msg);
    	_msg.setText("Loading...");      
        pushScreen(_loadingScreen); 
        getContent();




    }


    public Vector getHTML(){
        Vector images = new Vector();
    	 StreamConnection s = null;
         try {
			s = (StreamConnection)Connector.open(pc_client_url+"/providers.xml");
			System.out.println("~~~~~~~~Connection to: " + pc_client_url + "/providers.xml");
			HttpConnection httpConn = (HttpConnection)s;                        
	         
	         int status = httpConn.getResponseCode();
              System.out.println("~~~~~~~~~~~~~~" + status);	         
	         if (status == HttpConnection.HTTP_OK)
	         {

	           System.out.println("~~~~~200 OK");
	             InputStream input = s.openInputStream();
	            
	             DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
	             DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();
	             Document doc = docBuilder.parse(input);
	             doc.getDocumentElement ().normalize ();
	             NodeList listOfProviders = doc.getElementsByTagName("provider");
	             int totalProviders = listOfProviders.getLength();
	             for(int i=0; i<listOfProviders.getLength() ; i++){
	            	// System.out.println("~~~~~Looping in getHTML");
	                 Node firstPersonNode = listOfProviders.item(i);
	                 if(firstPersonNode.getNodeType() == Node.ELEMENT_NODE){
	                     Element firstPersonElement = (Element)firstPersonNode;
	                     NodeList firstNameList = firstPersonElement.getElementsByTagName("name");
	                     Element firstNameElement = (Element)firstNameList.item(0);
	                     
	                     NodeList firstImageList = firstPersonElement.getElementsByTagName("image");
	                     Element firstImageElement = (Element)firstImageList.item(0);


	                     //System.out.println("~~~~~~" + firstPersonElement.toString());
                       //  System.out.println("~~~~~~~~~~~~~~~Adding image URL.");
	                     images.addElement(firstImageElement.getChildNodes().item(0).getNodeValue().trim());
	                     providers.addElement(firstNameElement.getChildNodes().item(0).getNodeValue().trim());
	                 }//end of if clause


	             }//end of for loop with s var
	         }//end if status is ok

		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("~~~~I caught an IOException");
			e.printStackTrace();
		} catch (ParserConfigurationException e) {
			// TODO Auto-generated catch block
			System.out.println("~~~~~I caught a ParserConfigurationException");
			e.printStackTrace();
		} catch (SAXException e) {
			System.out.println("~~~~I caught a SAXException");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

    	return images;
    }


/*
 * When this method is called, it goes to pc_client_url/providers.xml, and grabs the images
 * for the providers, turns them into an Encoded Image, and then adds it to the mainscreen
 * to be displayed.     
 */
    public void getContent(){
       Vector encoded_image_fields = new Vector();
       Vector image_urls = getHTML();

    	//add the code to call providers.xml, then iterate over the xml i get, adding images.
    	//crud! there's no arraylist!?
    	System.out.print("~~~~~~~~~~~");
    	//this for loop is empty. crud.
    	for(int i = 0; i < image_urls.size(); i++){
//    		text_fields.insertElementAt(new RichTextField(), i);
//    		RichTextField temp = (RichTextField)text_fields.elementAt(i);
//    		temp.setText(image_urls.elementAt(i).toString());
//    		mscreen.add((RichTextField) text_fields.elementAt(i));
//    		mscreen.add(new SeparatorField());
    		System.out.println("~~~~Adding: " + image_urls.elementAt(i).toString());
    		encoded_image_fields.insertElementAt(new BitmapField(), i);
            byte[] data = new byte[100000];
            StringBuffer raw = new StringBuffer();
            try {
            	System.out.println(pc_client_url + "/images/providers/" + image_urls.elementAt(i).toString());
				StreamConnection s = (StreamConnection)Connector.open(pc_client_url + "/images/providers/" + image_urls.elementAt(i).toString());
				HttpConnection c = (HttpConnection)s;
				InputStream i2 = c.openInputStream();
                int len = 0;
				while ( -1 != (len = i2.read(data)) )
                {                   
                    raw.append(new String(data, 0, len));
                }   
                c.close();
                s.close();
                i2.close();
				//Now, I need to store the input stream's content into a Byte array.
            } catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            byte[] content = raw.toString().getBytes();
            //EncodedImage image = EncodedImage.createEncodedImage(content, 0, content.length);
            //_bitmap.setImage(image);
    		BitmapField temp = (BitmapField)encoded_image_fields.elementAt(i);
    		temp.setImage(EncodedImage.createEncodedImage(content, 0, content.length));
    		_fieldManager.add((BitmapField) encoded_image_fields.elementAt(i));
    		ButtonField but_temp = new ButtonField(providers.elementAt(i).toString());
    		
    		but_temp.setChangeListener(this);
    		_fieldManager.add(but_temp);
    		_fieldManager.add(new SeparatorField());
    		
    		//System.out.println("~~~~~~~~~~" + image_urls.elementAt(i).toString());

    	}//end for loop
        pushScreen(_mainScreen);
    	
    	
    }
	/*
	 * This screen displays all the providers (eventually as buttons).
	 * Clicking on any provider takes it to the OfferingsScreen for that provider.
	 */
    private class ProviderDemoScreen extends MainScreen
    { 
    	
    }

    private class LoadingScreen extends MainScreen
    { 
    	protected void makeMenu(Menu menu, int instance) {
        	menu.add(_getProviders);

        	}
        	private MenuItem _getProviders = new MenuItem("Get Providers", 110,
        	10) {
        	public void run() {
        		getContent();

        		//dammit, can't i do what i want? Stupid static.
        	
        	}};

    	
    }
    public void changeScreen(){
    	System.out.println("Changin screen");
    	//pushScreen(_loadingScreen);
    }

    public void fieldChanged(Field field, int context) 
    {
    	System.out.println("~~~Field was changed!!");
    	//pushScreen(_loadingScreen);
    	changeScreen();
    }  



}//end file

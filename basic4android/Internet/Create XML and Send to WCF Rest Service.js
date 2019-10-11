//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/13603-create-xml-send-wcf-rest-service.html#post76896

Hello,

here is a small example how to make a xml and send it to a server which is hosting a wcf rest service.
Maybe it helps someone to start a bit faster with it...

Here a little explanation how to use...

Code:
Note: The Serializer at the server needs the tags of the xml-nodes in alphabetic order!

Sub SaveData
    Dim s As String
    Dim l As List
    Dim iRoot, iNode As Int

    l = XmlBuilder.NewDoc("LaborData", "http://schemas.datacontract.org/2004/07/AndroidDataLib")
    iNode = XmlBuilder.NewNode(0,"FinCtrlData","","")
            XmlBuilder.NewMSArray(iNode,"ProbeDatas",Main.DetailObj.FinCtrlData.ProbeDatas)
                XmlBuilder.NewTag(iNode,"bProbeOk",XmlBuilder.BoolToStr(Main.DetailObj.FinCtrlData.bProbeOk))
                XmlBuilder.NewTag(iNode,"sLabWorker",Main.DetailObj.FinCtrlData.sLabWorker)
    iNode = XmlBuilder.NewNode(0,"OptCtrlData","","")
                XmlBuilder.NewTag(iNode,"bMaterialQuality",XmlBuilder.BoolToStr(Main.DetailObj.OptCtrlData.bMaterialQuality))
                XmlBuilder.NewTag(iNode,"bTechPhysRequirements",XmlBuilder.BoolToStr(Main.DetailObj.OptCtrlData.bTechPhysRequirements))
                XmlBuilder.NewTag(iNode,"sWrapperText",Main.DetailObj.OptCtrlData.sWrapperText)
                XmlBuilder.NewTag(iNode,"sWrapperUnit",Main.DetailObj.OptCtrlData.sWrapperUnit)
            XmlBuilder.NewTag(0,"bSpecialInfo",XmlBuilder.BoolToStr(Main.DetailObj.bSpecialInfo))
            XmlBuilder.NewTag(0,"sDate",Main.DetailObj.sDate)
            XmlBuilder.NewTag(0,"sMaterialNumber",Main.DetailObj.sMaterialNumber)
            XmlBuilder.NewTag(0,"sNotes",Main.DetailObj.sNotes)
            XmlBuilder.NewTag(0,"sNumber",Main.DetailObj.sNumber)
    'save the xml to a file
    XMLBuilder.SaveToFile("labdata.xml", True)
    'create needed url data
    s = "labdata.xml,LABDATA," & Main.sSelectedCompany & "," & LABData.GetSecurityPart
    LAB_LastUrl = "https://10.2.1.121:1443/UploadFile/" & s
    'send xml-file to server
    HttpUtils.PostFile("savelabdata", LAB_LastUrl , File.DirInternal, "labdata.xml")
End Sub
==================================
Server Side c# Rest WCF Service:
The used DataLibrary:

Code:
namespace AndroidDataLib
{
    [Serializable]
    public class LaborData
    {
        public string sDate;
        public string sNumber;
        public string sMaterialNumber;
        public string sNotes;
        public bool bSpecialInfo;
        public OpticalCtrl OptCtrlData;
        public FinalCtrl FinCtrlData;
    }

    [Serializable]
    public class OpticalCtrl
    {
        public bool bMaterialQuality;
        public bool bTechPhysRequirements;
        public string sWrapperUnit1;
        public string sWrapperText1;
    }

    [Serializable]
    public class FinalCtrl
    {
        public string sLabWorker;
        public bool bProbeOk;
        public string[] ProbeDatas;
    }
}
The Example-Service:

Code:
namespace Android_Server
{
    [ServiceContract]
    public interface ILabRestService
    {
        [OperationContract, WebInvoke(UriTemplate = "UploadFile/{sFileDesc}")]
        void UploadFile(string sFileDesc, Stream fileContents);
    }
}

void ILabRestService.UploadFile(string sFileDesc, Stream fileContents)
{

// get the data and do some security checks...


    if (sType == "LABDATA")
    {
        string sXMLDoc = ASCIIEncoding.UTF8.GetString(buffer,0,totalBytesRead);
    sXMLDoc = GetFromBase64(sXMLDoc);

// convert the xml-string to the class

    DataContractSerializer dcSer = new DataContractSerializer(typeof(LaborData));
        MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(sXMLDoc));
        stream.Position = 0;
        XmlDictionaryReader reader = XmlDictionaryReader.CreateTextReader(stream, new XmlDictionaryReaderQuotas());
        LaborData l = (LaborData)dcSer.ReadObject(reader, true);

    // now we have the data in the class
    // do something with it...

    Console.WriteLine("new probe from worker: " + l.FinCtrlData.sLabWorker);
    }
}
Attac
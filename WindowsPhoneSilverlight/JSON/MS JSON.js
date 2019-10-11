//http://forums.silverlight.net/forums/p/14304/367154.aspx

#we import 
System.Servicemodel.Web
System.Runtime.Serialization

#using
using System.Runtime.Serialization.Json;

#the Platinum Class included to 'JSON.NET library' code
DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(Platinum[]));

Platinum[] jj = (Platinum[])jsonSerializer.ReadObject(URL);
MessageBox.Show(jj[0].title);


foreach (Platinum tt in jj)
{
    if (tt.album != null)
        MessageBox.Show(tt.artist.artistdisplay);
    //else //is advert
    //    jj = jj;
}
byte[] biteArray = new byte[memoryStream.Length];
//Set pointer to the beginning of the stream
memoryStream.Position = 0;

//Read the entire stream
memoryStream.Read(biteArray, 0, (int)memoryStream.Length);


--write to memstream
MemoryStream ms = new MemoryStream();
byte[] tmpSchema;
tmpSchema = (byte[])dR[0];
ms.Write(tmpSchema, 0, tmpSchema.Length);
ms.Position = 0;

XmlTextReader reader = new XmlTextReader(ms);
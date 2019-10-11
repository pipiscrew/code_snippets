 //standarize for the app running
 MessageBox.Show(base.GetType().GUID.ToString());
 //GUID setted automatically - on PRJ Properties > Assembly Information
 
 or

 MessageBox.Show(Guid.NewGuid().ToString());
 
 or
 
MessageBox.Show(System.Guid.NewGuid().ToString());

example :

    [GuidAttribute("0121542D-85D0-3755-AE0B-E5EBC23CF162")]
    class Class1
    {
    }
    
    on other class  :
            Type kk = typeof(Class1);
            object[] tt = Attribute.GetCustomAttributes(kk,typeof(GuidAttribute));
         
         
         
         
         
         
         
//get GUID class attribute @ runtime
//http://bytes.com/topic/visual-basic-net/answers/384494-getting-guid-attribute-assembly
//http://rasor.wordpress.com/2010/02/15/com-howto-call-net-from-com/ vb6 c# GUID sample

Dim o_PluginInstance As Object = objAssembly.CreateInstance(classToUser,
False, BindingFlags.CreateInstance, Nothing, aArgsList, Nothing, Nothing)

Dim plugGUID As Attribute =
Attribute.GetCustomAttribute(objAssembly.GetType(c lassToUser),
GetType(GuidAttribute))

Debug.WriteLine(String.Format("Loaded Plug-in GUID: {0}", CType(plugGUID,
GuidAttribute).Value))
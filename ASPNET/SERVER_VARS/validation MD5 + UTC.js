Χθές έκατσα κάποια ώρα, για να μπορέσω να βγάλω άκρη με το encryption μεταξύ java / php / asp.net, για να είμαστε σωστοί, όλα πρέπει να παίζουν με την ίδια μέθοδο encryption. Σε μερικές φάσεις η java ή php φάνηκαν incompatible με τα standards του .NET. anyway : 

http://www.pipiscrew.com/2016/02/php-android-net-encryption-aes128-pkcs7/

Κάποιες σκέψεις, που μου έχουν έρθει, τα γράφω και μου λες  : 
-όλες οι κλήσεις προς το webservice πρέπει να έχουν και μια παράμετρο την κάνω declare var1, h var1 λοιπόν θα έρχετε στο webservice encrypted, θα γίνεται decrypt (κώδικας είναι στο sample^), και θα είναι UTC (GMT+0) (variable type Int32) ex. 1455359297

//get UTC (GMT+0)
Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
-decrypt var1
-compare
try{
     int x=unixTimestamp - var1; 
}
if (x < 0 || x> 60) kickuser;


-όλες οι κλήσεις προς το webservice πρέπει να έχουν και μια παράμετρο την κάνω declare sign, Θα είναι το md5 hash των παραμέτρων που βλέπω στο mobile service-rev03.docx
δηλαδή στο κώδικα θα έχουμε κάτι τέτοιο : aid+paid+bid+cid+scid+sid+df+dt+pn+var1
ex default values : 0,0,0,0,0,0,1/1/1990,1/1/1990,0,1455359297
θα προκύπτει 0000001/1/19901/1/199001455359297 οπότε

if ( md5("0000001/1/19901/1/199001455359297") != sign))


        public static string md5(string str)
        {
            using (var md5 = MD5.Create())
            {
                return Encoding.Default.GetString(md5.ComputeHash(System.Text.Encoding.ASCII.GetBytes(str)));
            }
        }
-άμα δεν είναι POST
       if (Request.Params["request_method"] != "POST" || Request.Params["var1"] == null || Request.Params["sign"] == null)
       {
           Response.Write("kick user");
           Response.End();
       }

////////////////////////////////////////////////////// UTC validation
Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
-decrypt var1
-compare
try{
     int x=unixTimestamp - Request.Params["var1"]; 
}
if (x < 0 || x> 60)        {
           Response.Write("kick user");
           Response.End();
       }

////////////////////////////////////////////////////// MD5 validation
if ( md5(Request.Params["aid"] + Request.Params["paid"] + Request.Params["bid"] + Request.Params["cid"] + Request.Params["scid"] + Request.Params["sid"] + Request.Params["df"] + Request.Params["dt"] + Request.Params["pn"] + Request.Params["var1"]) != Request.Params["sign"]))        {
           Response.Write("kick user");
           Response.End();
       }


τι κάναμε : 
-πρέπει να είναι POST
-πρέπει να έχει στείλει το σωστό UTC (η διαφορά 1min έχει υπολογιστεί)
-πρέπει να έχει στείλει το hash με τα στοιχεία σε MD5

πιστεύω θα είναι ok, ίδαλλως πάμε σε temporaries RSA keys που πρέπει να εκδίδονται από τον server.
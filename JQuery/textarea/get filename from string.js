//from: "/home/user/file.txt".split(/(\\|\/)/g).pop()
//you get: "file.txt"

//or

//C:\fakepath\flashfxp.exe
//"flashfxp.exe"

     $("input:file").change(function (){
       var fileName = $(this).val();
       
       //http://stackoverflow.com/a/9234894
       fileName= fileName.split(/(\\|\/)/g).pop();
       
       console.log(fileName);
       
       //uploadFile(fileName,"s");
     });		
     
     
     
       //replace all non alphanumeric except .
       fl = fl.replace('[^A-Za-z0-9+.]', "");
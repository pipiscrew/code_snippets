<script language="VBScript">
On Error Resume Next  
Set shell = CreateObject("WScript.Shell")  
if err<>0 then  
        Alert("Error: Windows Script has been installed in your computer!")  
else  
shell.Run("""C:\Program Files\Html To Image\HtmlToImage.exe"""& " """&external.menuArguments.document.URL&"""")
end if</script>
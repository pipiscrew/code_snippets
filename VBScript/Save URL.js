      <script language="VBScript">

        Function Remv(str)
                str = Trim(str)
                str = Replace(str, "/", "")
                str = Replace(str, "/", "")
                str = Replace(str, ":", "")
                str = Replace(str, "*", "")
                str = Replace(str, "?", "")
                str = Replace(str, "<", "")
                str = Replace(str, ">", "")
                str = Replace(str, "|", "")
                str = Replace(str, "'", "")
                str = Replace(str, Chr(34), "")
                str = Replace(str, ";", "")
                
                if len(str) = 0 then str="noname"
                Remv = str
        End Function

                dim WshShell
                dim oUrlLink
                dim WScript
                dim mht
                
                set WshShell = CreateObject("WScript.Shell")

         set oUrlLink = WshShell.CreateShortcut("c:\" & Remv(external.menuArguments.document.title) & ".url")
         
         oUrlLink.TargetPath = external.menuArguments.document.Url
                                  oUrlLink.Save         
         
      </script>
      
      
      registry @:
      [HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\MenuExt\Save URL File]
@="C:\\Program Files\\RightClickGoogle\\saveURL.html "
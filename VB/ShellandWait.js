'**************************************
' Name: Best Shell & Wait (No API's!)
' Description:Makes it easy to perform a
'     clean "Shell & Wait" where your applicat
'     oin kicks off an external application an
'     d waits for it to return before continui
'     ng. Many shell & wait examples I have fo
'     und tend to overdrive the proccessor in 
'     a loop or require you to make API calls.
'     This one uses the Windows Script object 
'     to take advantage of it's built-in wait 
'     parameter on the .Run method...scripting
's version of Shell.
' By: Matthew Roberts
'
' Inputs:FileName - The name of the file
'     you wish to run with any required switch
'     es included.
'
' Returns:True if the file was run and r
'     eturned.
False If there was a file open or save error.
EXAMPLE: ShellAndWait ("notepad.exe c:\temp\teset.txt)
'
' Assumes:Should work on any Windows 98 
'     machine. Others may need to get the newe
'     st VB service pack or install Windows Sc
'     ripting Host (http://msdn.microsoft.com/
'     scripting/jscript/download/55beta.htm). 
'     This is also included in Internet Explor
'     er 5. If you already have IE5, this will
'     work and it will be included when you bu
'     ild your setup file for distribution.
'
' Side Effects:None - Will not block oth
'     er applications or overdrive the procces
'     sor.
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=8349&lngWId=1
'for details.
'**************************************



Function ShellAndWait(FileName As String)
    Dim objScript
    On Error Goto ERR_OpenForEdit
    Set objScript = CreateObject("WScript.Shell")
    ' Open a file for editing in Notepad and
    '     wait for return.
    'The second parameter (after the FileNam
    '     e) is the Display Mode (normal w/focus,
    'minimized...even hidden. For more info 
    '     visit:
    'http://msdn.microsoft.com/scripting/win


    '     dowshost/doc/wsMthRun.htm
        ' The third parameter is the "Wait for r
        '     eturn" parameter. This should be set to
        ' True for the Wait.
        ShellApp = objScript.Run(FileName, 1, True)
        ShellAndWait = True
        EXIT_OpenForEdit:
        Exit Function
        ERR_OpenForEdit:
        MsgBox Err.Description
        Goto EXIT_OpenForEdit
End Function
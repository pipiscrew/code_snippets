The MoveFileEx function renames an existing file or directory.

If the function succeeds, the return value is nonzero.

If the function fails, the return value is zero. To get extended error information, call GetLastError

VB4-32,5,6
Declare Function MoveFileEx Lib "kernel32" Alias "MoveFileExA" (ByVal lpExistingFileName As String, ByVal lpNewFileName As String, ByVal dwFlags As Long) As Long 

Const MOVEFILE_REPLACE_EXISTING = &H1 

Operating Systems Supported 

Requires Windows NT 3.1 or later; Win9x/ME: Not supported 

Library 

Kernel32 


Parameter Information 

· lpExistingFileName
Points to a null-terminated string that names an existing file or directory.

· lpNewFileName
Points to a null-terminated string that specifies the new name of lpExistingFileName.
When moving a file, the destination can be on a different file system or drive. If the destination is on another drive, you must set the MOVEFILE_COPY_ALLOWED flag in dwFlags.
When moving a directory, the destination must be on the same drive.
Windows NT:
If dwFlags specifies MOVEFILE_DELAY_UNTIL_REBOOT, lpNewFileName can be NULL. In this case, MoveFileEx registers the lpExistingFileName file to be deleted when the system reboots.

· dwFlags
A set of bit flags that specify how to move the file. You can specify any combination of the following values:
MOVEFILE_COPY_ALLOWED
If the file is to be moved to a different volume, the function simulates the move by using the CopyFile and DeleteFile functions. Cannot be combined with the MOVEFILE_DELAY_UNTIL_REBOOT flag.
MOVEFILE_DELAY_UNTIL_REBOOT
Windows NT only: The function does not move the file until the operating system is restarted. The system moves the file immediately after AUTOCHK is executed, but before creating any paging files. Consequently, this parameter enables the function to delete paging files from previous startups.
MOVEFILE_REPLACE_EXISTING
If a file of the name specified by lpNewFileName already exists, the function replaces its contents with those specified by lpExistingFileName.
MOVEFILE_WRITE_THROUGH
Windows NT only: The function does not return until the file has actually been moved on the disk.

Setting this flag guarantees that a move perfomed as a copy and delete operation is flushed to disk before the function returns. The flush occurs at the end of the copy operation.
This flag has no effect if the MOVEFILE_DELAY_UNTIL_REBOOT flag is set. 


'URL: http://www.allapi.net/
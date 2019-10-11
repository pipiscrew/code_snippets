On Error Resume Next

On Error GoTo 0 disables error handling in the current procedure. It doesn't specify line 0 as the start of the error-handling code, even if the procedure contains a line numbered 0. Without an On Error GoTo 0 statement, an error handler is automatically disabled when a procedure is exited

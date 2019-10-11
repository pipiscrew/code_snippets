
        If (SMTP Is Nothing) Then
            Throw New ArgumentException("smtp is null", "smtp")
        End If
        
        'or
        Throw New Exception("A debugger was detected! This software cannot run while a debugger is active.")

    Public userC As UserConfig

    Public Structure UserConfig
        Dim Serv As Boolean
        Dim Serv1 As string
    End Structure
    
    
    
    'OR only
    
    Private Structure UserConfig
        Dim dummy As Int32
        Shared Uname As String = ""
        Shared Upass As String = ""
    End Structure
    

'or use Enumerator for default values    
    Enum filePermissions
        Standar = 1
        Pro = 2
        Enterpise = 4
        Trial = 18
    End Enum
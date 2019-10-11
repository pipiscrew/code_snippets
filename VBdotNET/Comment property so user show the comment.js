    ''' <summary>
    '''<para>Timeout in miliseconds, default 2000</para>  
    ''' </summary>
    Public Property SMTPTimeout() As Integer
        Get
            Return m_SMTPTimeout
        End Get
        Set(ByVal value As Integer)
            m_SMTPTimeout = value
        End Set
    End Property
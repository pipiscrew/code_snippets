'source - ALL attributes
'http://msdn.microsoft.com/en-us/library/83y7df3e%28VS.71%29.aspx

ex. is this attribute is specified the property will not exported to XML
    
        <Xml.Serialization.XmlIgnore()> Public Property variableValue() As Byte()
        Get
            Return _variableValue
        End Get

        Set(ByVal val As Byte())
            _variableValue = val
        End Set

    End Property
    
    
    

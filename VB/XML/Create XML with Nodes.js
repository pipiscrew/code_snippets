
'http://msdn.microsoft.com/en-us/library/windows/desktop/ms754660(v=vs.85).aspx
Private Function GetCategories() As String
    Dim DOM As DOMDocument60
    Dim node, attr, cd, item, root

    Dim nodeITEM
    Dim bt() As Byte
    Dim rs As ADODB.Recordset


    'Get Records
    Set rs = Tgd.GetRecordSet("select [tguniquefield],[name],[picture] from categories order by [Name]")

    'Create XML OBJ
    Set DOM = New DOMDocument60
    DOM.async = False
    DOM.validateOnParse = False
    DOM.resolveExternals = False
    DOM.preserveWhiteSpace = True

    ' Create a processing instruction targeted for xml.
    Set node = DOM.createProcessingInstruction("xml", "version='1.0'")
    DOM.appendChild node
    Set node = Nothing

    'Create MAIN Node
    Set root = DOM.createElement("DATA")
    DOM.appendChild root

    Do Until rs.EOF
        '-----each record is in ITEM node
        root.appendChild DOM.createTextNode(vbNewLine + vbTab)
        Set nodeITEM = DOM.createElement("ITEM")
        root.appendChild nodeITEM

        '--has ID
        nodeITEM.appendChild DOM.createTextNode(vbNewLine + vbTab + vbTab)
        Set node = DOM.createElement("ID")
        node.Text = rs("tguniquefield")
        nodeITEM.appendChild node
        Set node = Nothing

        '--has NAME
        nodeITEM.appendChild DOM.createTextNode(vbNewLine + vbTab + vbTab)
        Set node = DOM.createElement("CATEGORY")
        node.Text = StrConv(Convert2UTF8(rs("name"), 65001, 0), vbUnicode)
        nodeITEM.appendChild node
        Set node = Nothing

        '--has CDATA PICTURE
        bt = rs("picture")

        nodeITEM.appendChild DOM.createTextNode(vbNewLine + vbTab + vbTab)
        Set node = DOM.createElement("PIC")
        Set cd = DOM.createCDATASection(EncodeBase64(bt))    'EncodeBASE64 the picture byte array
        node.appendChild cd
        Set cd = Nothing
        nodeITEM.appendChild node
        Set node = Nothing

        nodeITEM.appendChild DOM.createTextNode(vbNewLine + vbTab)

        rs.MoveNext
    Loop

    'DOM.Save "c:\dynamDom.xml"
    GetCategories = DOM.xml

    Set nodeITEM = Nothing
    Set root = Nothing
    Set DOM = Nothing

End Function


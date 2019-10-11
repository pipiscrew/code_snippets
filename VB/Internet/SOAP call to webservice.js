Dim xmlhttp
    Set xmlhttp = CreateObject("MSXML2.XMLHTTP.3.0")

    xmlhttp.Open "POST", "https://www1.gsis.gr/wsgsis/RgWsBasStoixN/RgWsBasStoixNSoapHttpPort", False
    xmlhttp.setRequestHeader "Content-Type", "text/xml; charset=utf-8"


    xmlhttp.send ("<soapenv:Envelope xmlns:soapenv= ""http://schemas.xmlsoap.org/soap/envelope/""" & vbCrLf & "xmlns:rgw= ""http://gr/gsis/rgwsbasstoixn/RgWsBasStoixN.wsdl""" & vbCrLf & _
"xmlns:typ= ""http://gr/gsis/rgwsbasstoixn/RgWsBasStoixN.wsdl/types/""         " & vbCrLf & "xmlns:xsi= ""http://www.w3.org/2001/XMLSchema-instance"" >                    " & vbCrLf & _
" <soapenv:Header/>                                                          " & vbCrLf & " <soapenv:Body>                                                             " & vbCrLf & _
" <rgw:rgWsBasStoixN>                                                     " & vbCrLf & " <pAfm xsi:type=""xsd:string"">998473647</pAfm>                       " & vbCrLf & _
" <pBasStoixNRec_out>                                                  " & vbCrLf & " <typ:actLongDescr></typ:actLongDescr>                             " & vbCrLf & _
" <typ:postalZipCode></typ:postalZipCode>                           " & vbCrLf & " <typ:facActivity>0</typ:facActivity>                              " & vbCrLf & _
" <typ:registDate>2011-01-01</typ:registDate>                       " & vbCrLf & " <typ:stopDate>2011-01-01</typ:stopDate>                           " & vbCrLf & _
" <typ:doyDescr></typ:doyDescr>                                     " & vbCrLf & " <typ:parDescription></typ:parDescription>                         " & vbCrLf & _
" <typ:deactivationFlag>1</typ:deactivationFlag>                    " & vbCrLf & " <typ:postalAddressNo></typ:postalAddressNo>                       " & vbCrLf & _
" <typ:postalAddress></typ:postalAddress>                           " & vbCrLf & " <typ:doy></typ:doy>                                               " & vbCrLf & _
" <typ:firmPhone></typ:firmPhone>                                   " & vbCrLf & " <typ:onomasia></typ:onomasia>                                     " & vbCrLf & _
" <typ:firmFax></typ:firmFax>                                       " & vbCrLf & " <typ:afm></typ:afm>                                               " & vbCrLf & _
" <typ:commerTitle></typ:commerTitle>                               " & vbCrLf & " </pBasStoixNRec_out>                                                 " & vbCrLf & _
" <pCallSeqId_out>0</pCallSeqId_out>                                   " & vbCrLf & " <pErrorRec_out>                                                      " & vbCrLf & _
" <typ:errorDescr></typ:errorDescr>                                 " & vbCrLf & " <typ:errorCode></typ:errorCode>                                   " & vbCrLf & _
" </pErrorRec_out>                                                     " & vbCrLf & " </rgw:rgWsBasStoixN>                                                    " & vbCrLf & _
" </soapenv:Body>                                                            " & vbCrLf & "</soapenv:Envelope>                                                           ")

    MsgBox xmlhttp.responseText


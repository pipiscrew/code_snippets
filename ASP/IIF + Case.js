<%
Function IIf(condition,value1,value2)
        If condition Then IIf = value1 Else IIf = value2
End Function

Function ChooseBorder(recordPosition,LeftRight)
  select case recordPosition
    case "1","2"
       ChooseBorder=iif(LeftRight="L","C52","C53")  
    case "3"
       ChooseBorder=iif(LeftRight="L","C54","C55")  
  end select 
End Function
%>

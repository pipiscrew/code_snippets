        <select name="Category" id="Category" style="width: 600px">
                
              
                                <% dim Rs
                                
                                   set Rs = getrecordset("Select * From [categories] order by orderID")
                                
                                          while not rs.eof %>
                                                        <option value="<%=rs(0)%>"> <%=rs(1)%> </option>
                                <% 
                                 rs.movenext 
                                 wend %>

        </select>

kai ama 8eloyme na epile3oyme kapio item apo to combo :
<option value="<%=rs2(0)%>" <%If CInt(rs("catid")) = CInt(rs2(0)) Then response.write " selected"%> > <%=rs2(1)%>  </option>
 
dhladh ginetai export kati tetoio :
<option value="1"  > Dev.VS .NET  </option>
<option value="2"  > Dev.activeX  </option>
<option value="3"  selected > Dev.SQL Tools  </option>
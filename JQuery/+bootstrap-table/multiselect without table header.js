//
                   for (var i = 0; i < r.length; i++)
                   {
                       tbl +=  "<tr><td></td><td>" + r[i]["client_id"] + "</td><td>" + r[i]["client_name"] + "</td></tr>";
                   }
                   
                   console.log(tbl);
                   //set rows to table
                   $("#LOGOUT_rows").html(tbl);
						                   
                    <table id="LOGOUT_tbl"
                        data-click-to-select="true"
                        data-show-header="false"
                        style="display: none;">
                             <thead>
                                <tr>
                                	<th data-field="state" data-checkbox="true"></th>
                                	
                                    <th data-field="client_id" data-visible="false">
                                        id
                                    </th>
 
                                    <th data-field="client_name">
                                        Company Name
                                    </th>
                                </tr>
                            </thead>
                             <tbody id="LOGOUT_rows"></tbody>
                        </table  >
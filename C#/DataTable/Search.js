DataTable dT_FieldsFK;
 
dT_FieldsFK = General.ConneSQLite.GetDATATABLE("PRAGMA foreign_key_list('" + dR["tbl_name"].ToString() + "')");

if (dT_FieldsFK.Rows.Count > 0)
{
    DataRow[] dtFK = dT_FieldsFK.Select("[from] = '" + dR2["name"].ToString() + "'");

    if (dtFK.Length > 0)
        baseNode.Nodes.Add("", dR2["name"].ToString() + " -> " + buffer4fields.ToLower(), 3, 3); // + " (" + schemaFields["columnsize"].ToString() + ")", 1, 1);
    else
        baseNode.Nodes.Add("", dR2["name"].ToString() + " -> " + buffer4fields.ToLower(), 1, 1); // + " (" + schemaFields["columnsize"].ToString() + ")", 1, 1);
}
else
    baseNode.Nodes.Add("", dR2["name"].ToString() + " -> " + buffer4fields.ToLower(), 1, 1); // + " (" + schemaFields["columnsize"].ToString() + ")", 1, 1);
    
    
//there is also .Find but is only for primary key column



//select multiple fields
                            DataRow[] dtFK = dT_FieldsFK.Select("[FK_Table] = '" + item.Replace("[", "").Replace("]", "") + "' and FK_Column='" + dR_Fields["COLUMN_NAME"].ToString() + "'");
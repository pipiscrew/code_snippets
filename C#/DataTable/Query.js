DataTable dt = null;
DataRow[] filterResult = null;

dt = General.Conne.GetDATATABLE("select nodeid,nodename,parentnode,isfolder,DateUPD,updID from codes");


filterResult = dt.Select("[parentnode] = " + i, "isfolder DESC ,nodename ASC");

foreach (DataRow currentRow in filterResult)
{
    if (bool.Parse(currentRow["isfolder"].ToString()) == true)
    {
    }
}
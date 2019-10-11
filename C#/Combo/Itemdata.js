using System;
using System.Collections.Generic;
using System.Text;

namespace Athl_ImportXLS
{
    internal class ComboItemData
    {
        private string sName;
        private int iID;

        public ComboItemData()
        {
	        sName = "";
	        iID = 0;
        }

        public ComboItemData(string Name, int ID)
        {
            sName = Name;
            iID = ID;
        }

        public string Name {
	        get { return sName; }

	        set { sName = value; }
        }

        public int ItemData {
	        get { return iID; }

	        set { iID = value; }
        }

        public override string ToString()
        {
	        return sName;
        }

    }
}

private void FillCombo()
{
    OleDbDataReader dR;

    //cmbGyroi
    dR = General.ADOClass.GetDATAREADER("select Κωδικός,Περιγραφή from Γύροι  order by Περιγραφή");

    cmbGyroi.Items.Clear();
    cmbGyroi.Items.Add(new ComboItemData("", 0));

    while (dR.Read())
    {
        cmbGyroi.Items.Add(new ComboItemData(dR["Περιγραφή"].ToString(), (int)dR["Κωδικός"]));
    }
    
    cmbGyroi.SelectedIndex = 0;
}

private void FindA8lhma()
{

    string A8lhmaID;
    int i;
    A8lhmaID = General.ADOClass.ExecuteSQLScalar("select Κωδικός from Αθλήματα where Περιγραφή = '" + details.Rows[(int)gridDetailRows.row02A8lhma][1].ToString() + "'");


    if (A8lhmaID == null)
    {
        cmdA8lhmata.SelectedIndex = 0;
        General.msg("Το άθλημα δεν βρέθηκε στην βάση. \r\n\r\nΗ διαδικασία ακυρώνετε.", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        return;
    }

    ComboItemData tmp;

    for (i = 1; i < cmdA8lhmata.Items.Count; i++)
    {
        tmp = (ComboItemData)cmdA8lhmata.Items[i];

        if (tmp.ItemData.ToString() == A8lhmaID)
        {
            cmdA8lhmata.SelectedIndex = i;
            FindAgwnisma(A8lhmaID);
            return;
        }
    }

    cmdA8lhmata.SelectedIndex = 0;
    General.msg("Το άθλημα δεν βρέθηκε στην βάση. \r\n\r\nΗ διαδικασία ακυρώνετε.", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
}
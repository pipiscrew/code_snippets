//http://www.java2s.com/Tutorial/CSharp/0560__ADO.Net/LoopthroughDataRowViewinDataView.htm

//parent call 
        private void toolStripSortNodes_Click(object sender, EventArgs e)
        {
            string id = null;

            if (TR.SelectedNode == null)
            {
                General.Mes("Please select a node!");
                return;
            }
            else
                id = TR.SelectedNode.Name;

            frmNodeOrder frmS = new frmNodeOrder();

            if (TR.SelectedNode.Parent==null)
                frmS.parentID = "0";
            else 
                frmS.parentID = TR.SelectedNode.Parent.Name;

            DialogResult s =  frmS.ShowDialog();

            if (s == System.Windows.Forms.DialogResult.OK)
            {
                FillTREE();

                TreeNode[] tr = TR.Nodes.Find(id, true);
                TR.SelectedNode = tr[0];
            }
        }
        


//sort order form

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Finisar.SQLite;

namespace WordHTML
{
    public partial class frmNodeOrder : Form
    {
        public string parentID = null;

        public frmNodeOrder()
        {
            InitializeComponent();
        }

        private void frmNodeOrder_Load(object sender, EventArgs e)
        {
            //query
            SQLiteDataReader dR = General.Conne.GetDATAREADER("select node_id,NODE_TITLE from nodes where parent_id=" + parentID + " order by NODE_SORT");

            //generate a datatable
            DataTable TableLines;
            DataRow TableRows;
            DataColumn col;

            TableLines = new DataTable("LinesTable");

            //add cols
            col = new DataColumn("node_id", Type.GetType("System.String"));
            TableLines.Columns.Add(col);
            col = new DataColumn("NODE_TITLE", Type.GetType("System.String"));
            TableLines.Columns.Add(col);

            //foreach record add a datarow to datatable
            while (dR.Read())
            {
                TableRows = TableLines.NewRow();
                TableRows[0] = dR["node_id"];
                TableRows[1] = dR["NODE_TITLE"];
                TableLines.Rows.Add(TableRows);
            }

            //convert datatable rows to DataRowView
            DataView dv = new DataView(TableLines);

            foreach (DataRowView drv in dv)
            {
                listBox1.Items.Add(drv);
            }

            //define what will show and the value member
            listBox1.DisplayMember = "NODE_TITLE";
            listBox1.ValueMember = "node_id";

            if (dR!=null)
            {
                dR.Close();
                dR.Dispose();
            }
        }

        private void btnUP_Click(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem == null)
            {
                General.Mes("Please select an item!");
                return;
            }

            if (listBox1.SelectedIndex == 0)
            {
                General.Mes("You cant move up the 1st item!");
                return;
            }


            DataRowView selectedItem = (DataRowView)listBox1.SelectedItem;
            int newIndex = listBox1.SelectedIndex - 1;

            listBox1.Items.RemoveAt(listBox1.SelectedIndex);

            listBox1.Items.Insert(newIndex, selectedItem);

            listBox1.SelectedIndex = newIndex;

            //            Console.WriteLine(listBox1.SelectedValue.ToString());
            DataRowView dR = (DataRowView)listBox1.SelectedItem;

            Console.WriteLine(dR[0].ToString());
        }

        private void btnDOWN_Click(object sender, EventArgs e)
        {
            if (listBox1.SelectedItem == null)
            {
                General.Mes("Please select an item!");
                return;
            }

            if (listBox1.SelectedIndex == listBox1.Items.Count - 1)
            {
                General.Mes("You cant move down the last item!");
                return;
            }


            DataRowView selectedItem = (DataRowView)listBox1.SelectedItem;
            int newIndex = listBox1.SelectedIndex + 1;

            listBox1.Items.RemoveAt(listBox1.SelectedIndex);

            listBox1.Items.Insert(newIndex, selectedItem);

            listBox1.SelectedIndex = newIndex;
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            DataRowView dR = null;
            string executeSTR = ""; 

            for (int i = 0; i < listBox1.Items.Count; i++)
            {
                dR = (DataRowView)listBox1.Items[i];

                //General.Conne.ExecuteNonQuery("update nodes set NODE_SORT=" + i.ToString() + " where node_id=" + dR[0].ToString());
                executeSTR += "update nodes set NODE_SORT=" + i.ToString() + " where node_id=" + dR[0].ToString() + ";";
            }

            General.Conne.ExecuteNonQuery(executeSTR);
            this.DialogResult = System.Windows.Forms.DialogResult.OK;
        }
    }
}

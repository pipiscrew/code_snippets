//http://www.microsoft-csharp-tutorials.com/post/2013/03/12/Add-ComboBox-cell-to-DataGridview-in-C-on-Cell-Enter-using-DataGridViewComboBoxCell

//warning the values of grid should contains the combo values otherwise boom!

using System;
using System.Data;
using System.Windows.Forms;

namespace DataGridviewComboBoxColumnExample
{
    public partial class Form1 : Form
    {
        delegate void SetComboBoxCellType(int iRowIndex);
        bool bIsComboBox = false;

        public Form1()
        {
            InitializeComponent();
        }
        
        private void Form1_Load(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Name", typeof(string));
            dt.Columns.Add("Company", typeof(string));

            for (int i = 0; i < 5; i++)
            {
                DataRow dr = dt.NewRow();
                dr["Name"] = "Name - " + i.ToString();
                dr["Company"] = "Company - " + i.ToString();

                dt.Rows.Add(dr);
            }

            dataGridView1.DataSource = dt;
        }        

        private void dataGridView1_CellEnter(object sender, DataGridViewCellEventArgs e)
        {
            SetComboBoxCellType objChangeCellType = new SetComboBoxCellType(ChangeCellToComboBox);
            if (e.ColumnIndex == this.dataGridView1.Columns["Company"].Index)
            {
                this.dataGridView1.BeginInvoke(objChangeCellType, e.RowIndex);
                bIsComboBox = false;
            }

        }

        private void ChangeCellToComboBox(int iRowIndex)
        {
            if (bIsComboBox == false)
            {
                DataGridViewComboBoxCell dgComboCell = new DataGridViewComboBoxCell();
                dgComboCell.DisplayStyle = DataGridViewComboBoxDisplayStyle.Nothing;

                DataTable dt = new DataTable();
                dt.Columns.Add("Name", typeof(string));
                dt.Columns.Add("Company", typeof(string));

                for (int i = 0; i < 5; i++)
                {
                    DataRow dr = dt.NewRow();
                    dr["Name"] = "Name - " + i.ToString();
                    dr["Company"] = "Company - " + i.ToString();

                    dt.Rows.Add(dr);
                }

                dgComboCell.DataSource = dt;
                dgComboCell.ValueMember = "Company";
                dgComboCell.DisplayMember = "Company";

                dataGridView1.Rows[iRowIndex].Cells[dataGridView1.CurrentCell.ColumnIndex] = dgComboCell;
                bIsComboBox = true;
            }
        }
    }
}

//when like
            System.Data.SqlClient.SqlException error = null;
            db = new SQLClass("Data Source=unicom;Initial Catalog=" + comboBox1.Text + ";User ID=x;Password=x", out error);

            string sql2 = "select Widget_Title as 'Title',WidgetCaption_Source as 'which','blocks' as wh from CMS_WidgetsCaptions " +
             " left join CMS_Widgets on CMS_Widgets.Widget_ID = CMS_WidgetsCaptions.WidgetCaption_Widget_ID where WidgetCaption_Source like '%' + @str + '%' " +
             " UNION " +
             " select Template_Title as 'Title',TemplateCaption_Source as 'which','templates' as wh from CMS_TemplatesCaptions " +
             " left join CMS_Templates on CMS_Templates.Template_ID = CMS_TemplatesCaptions.TemplateCaption_Template_ID   " +
             " where TemplateCaption_Source like '%' + @str + '%' " +
             " UNION " +
             " select StaticData_Caption_Title as 'Title',StaticData_Caption_Descr as 'which','pages' as wh from CMS_StaticData_Captions " +
             " left join CMS_StaticData on CMS_StaticData.Static_ID = CMS_StaticData_Captions.StaticData_Caption_StaticData_ID " +
             " where StaticData_Caption_Descr like '%' + @str + '%' " +
             " order by wh,Title";

            SqlDataAdapter sqlAD = new SqlDataAdapter();
            DataTable dT = new DataTable();
            var sqlco = new SqlCommand(sql2, db.GetConnection());
            sqlco.Parameters.AddWithValue("@str", textBox1.Text.Trim());
            //cmdExecuteNonQuery();

            sqlAD.SelectCommand = sqlco;

            sqlAD.Fill(dT);

            dataGridView1.DataSource = dT;
            lblCount.Text = dT.Rows.Count.ToString();
            

//normal situtation
            System.Data.SqlClient.SqlException error = null;
            db = new SQLClass("Data Source=unicom;Initial Catalog=" + comboBox1.Text + ";User ID=x;Password=x", out error);
            string sql = "select * from test where fullname=@fulln and tel=@tel";
            var sqlco = new SqlCommand(sql, db.GetConnection());
            sqlco.Parameters.AddWithValue("@fulln", "tesT");
            sqlco.Parameters.AddWithValue("@tel", "2108874745");
            cmdExecuteNonQuery();
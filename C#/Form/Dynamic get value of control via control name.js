			KryptonTextBox tmpTXT;
            
            top = 234;
            for (int i = 0; i < TableDataFieldType.Count; i++)
            {
            
                    tmpTXT = new KryptonTextBox();
                    tmpTXT.Name = "txt" + i.ToString();
                    tmpTXT.AlwaysActive = false;
                    tmpTXT.CharacterCasing = System.Windows.Forms.CharacterCasing.Upper;
                    tmpTXT.Location = new System.Drawing.Point(131, top);
                    tmpTXT.MaxLength = 20;
                    tmpTXT.Size = new System.Drawing.Size(219, 22);
                    tmpTXT.StateActive.Border.DrawBorders = ((ComponentFactory.Krypton.Toolkit.PaletteDrawBorders)((((ComponentFactory.Krypton.Toolkit.PaletteDrawBorders.Top | ComponentFactory.Krypton.Toolkit.PaletteDrawBorders.Bottom)
                                | ComponentFactory.Krypton.Toolkit.PaletteDrawBorders.Left)
                                | ComponentFactory.Krypton.Toolkit.PaletteDrawBorders.Right)));
                    tmpTXT.StateCommon.Content.Font = new System.Drawing.Font("Segoe UI", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(161)));
                    tmpTXT.TabIndex = i;
                    tmpTXT.Text = "";
                    tmpTXT.MaxLength = TableDataFieldMaxSize[i];

                    kryptonPanel.Controls.Add(tmpTXT);
            }
            
            //l8r I can grab the value 
            
            for (int i = 0; i < TableDataFieldType.Count; i++)
            {
               Console.WriteLine(kryptonPanel.Controls["txt" + i].Text);
               //or if is another ctl type 
               //  KryptonDateTimePicker dtp = (KryptonDateTimePicker)kryptonPanel.Controls["dtp" + i];
               //  Console.WriteLine(dtp.Value);
            }
            
//another approach
private void frmParamsbtnOk_Click(object sender, EventArgs e)
{
	foreach (Control c in this.Controls)
	{
		if (c.GetType() == typeof(TextBox))
		{
		// get it's text by using the c.Text property and do whatever you want with it
		}
	}
}
 
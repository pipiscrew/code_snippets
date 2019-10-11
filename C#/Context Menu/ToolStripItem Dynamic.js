                ToolStripButton ts = null;
                foreach (DataRow dR in dtGroups.Rows)
                {
                    Image ic = byteArrayToImage((byte[])dR["Icon"]);

                    ts = new System.Windows.Forms.ToolStripButton();
                    ts.ImageScaling = ToolStripItemImageScaling.None;
                    ts.Image = ic;
                    ts.Tag = dR["AppFilePath"];
                    ts.Click += new EventHandler(toolStripDynamic_Click);

                    toolStrip2.Items.Add(ts);
                }

            }
        }

        private void toolStripDynamic_Click(object sender, EventArgs e)
        {
            try
            {
            	object tmp = (sender as ToolStripButton).Tag;
                System.Drawing.Text.InstalledFontCollection fontColl = new System.Drawing.Text.InstalledFontCollection();

                cmbFonts.DataSource = fontColl.Families;
                cmbFonts.DisplayMember = "Name";
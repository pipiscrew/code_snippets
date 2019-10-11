            string fl = @"D:\+PRJ\Athl_ImportXLS\test.xls";

            KryptonTaskDialog q = new KryptonTaskDialog();
            KryptonTaskDialogCommand qCommand1 = new KryptonTaskDialogCommand();
            qCommand1.Text = "Καινούργια διοργάνωση";
            qCommand1.DialogResult = DialogResult.Yes;
            qCommand1.Image = Athl_ImportXLS.Properties.Resources.arrow;

            KryptonTaskDialogCommand qCommand2 = new KryptonTaskDialogCommand();
            qCommand2.Text = "Υπάρχουσα διοργάνωση";
            qCommand2.DialogResult= DialogResult.No;
            qCommand2.Image = Athl_ImportXLS.Properties.Resources.arrow;

            q.CommandButtons.Add(qCommand1);
            q.CommandButtons.Add(qCommand2);

            q.Icon = MessageBoxIcon.Information;
            
            q.WindowTitle = General.apTitle ;
            q.MainInstruction = "Τρόπος εισαγωγής";
            q.CommonButtons = TaskDialogButtons.Cancel;

            DialogResult res = q.ShowDialog();


            if (res == DialogResult.No)
                ReadForYparxoysaDiorganwsh();
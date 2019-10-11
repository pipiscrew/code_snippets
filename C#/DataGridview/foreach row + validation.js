            int CountErrors = 0;

            //validate only
            foreach (DataGridViewRow item in GRID.Rows)
            {
                Console.WriteLine(item.Cells[col1DateV].Value.ToString());

                if (!General.ValidateDate(item.Cells[col1DateV].Value.ToString()))
                {
                    item.Cells[col1DateV].ErrorText = "Λάθος Ημερομηνία";
                    item.DefaultCellStyle.BackColor = Color.OrangeRed;
                    CountErrors += 1;
                }

                if (item.Cells[col2AitiologiaV].Value.ToString().Length > 100)
                {
                    item.Cells[col2AitiologiaV].ErrorText = "Ξεπερνάει τους 100 χαρακτήρες";
                    item.DefaultCellStyle.BackColor = Color.OrangeRed;
                    CountErrors += 1;
                }


                if (!General.ValidateCurrency(item.Cells[col3XrewshV].Value.ToString()))
                {
                    item.Cells[col3XrewshV].ErrorText = "Μη έγκυρη αξία";
                    item.DefaultCellStyle.BackColor = Color.OrangeRed;
                    CountErrors += 1;
                }


                if (item.Cells[col4YpologismosV].Value.ToString().Length > 50)
                {
                    item.Cells[col4YpologismosV].ErrorText = "Ξεπερνάει τους 50 χαρακτήρες";
                    item.DefaultCellStyle.BackColor = Color.OrangeRed;
                    CountErrors += 1;
                }


                if (!General.ValidateCurrency(item.Cells[col5DiaforaV].Value.ToString()))
                {
                    item.Cells[col5DiaforaV].ErrorText = "Μη έγκυρη αξία";
                    item.DefaultCellStyle.BackColor = Color.OrangeRed;
                    CountErrors += 1;
                }
            }

            if (CountErrors > 0)
            {
                MessageBox.Show("Βρέθηκαν λάθη\r\n\r\nΗ διαδικασία ακυρώνεται!", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return;
            }
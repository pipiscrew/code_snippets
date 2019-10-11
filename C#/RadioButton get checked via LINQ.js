//http://stackoverflow.com/a/1797955

            RadioButton checkedButton = this.Controls.OfType<RadioButton>()
                                      .FirstOrDefault(r => r.Checked);

            if (checkedButton.Tag == null)
                return;

            h = checkedButton.Tag.ToString();

            this.DialogResult = DialogResult.OK;
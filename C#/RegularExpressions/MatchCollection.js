            Regex reg;
            MatchCollection match;

            reg = new Regex("this.(.*?).Controls");
            match = reg.Matches(preview);

            if (match != null)
            {
                foreach (Match item in match)
                {
                    if (!cmbParent.Items.Contains(item.Groups[1].Value))
                        cmbParent.Items.Add(item.Groups[1].Value);
                }
               
            }
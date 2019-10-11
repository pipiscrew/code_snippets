            try
            {
                DateTime d1 = dtpDiorgDate.Value;
                DateTime d2 = DateTime.Parse(DOBAthlet);

                if (d1 < d2)
                    throw new Exception();

                TimeSpan difference = d1.Subtract(d2);

                int p = Convert.ToInt32(difference.TotalDays) / 365;



/////////////////////years
                DateTime d1 = DateTime.Parse("1/1/" + dtpDiorgDate.Value.Year);

                DateTime d2 = DateTime.Parse(DOBAthlet);
                d2 = DateTime.Parse("1/1/" + d2.Year);

                if (d1 < d2)
                    throw new Exception();

                TimeSpan difference = d1.Subtract(d2);

                int p = Convert.ToInt32(difference.TotalDays) / 365;


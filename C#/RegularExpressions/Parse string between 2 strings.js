                    Regex reg;
                    Match match;

                    Result = Result.ToLower();

                    reg = new Regex("accountid=(.*?)(?=\n)");
                    match = reg.Match(Result);

                    lblAccID.Text = match.Groups[1].Value;

                    //valid until date
                    reg = new Regex("billeduntil=(.*?)(?=\n)");
                    match = reg.Match(Result);
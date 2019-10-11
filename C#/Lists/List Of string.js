            List<String> ValidatedURL;

            ValidatedURL=new List<String>();


            //direct URLs
            if (CheckIfStringStartsWithProtocol(resp))
            {
                ValidatedURL.Add(resp);
            }
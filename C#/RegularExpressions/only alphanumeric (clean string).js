//is only for ENG chars!
//http://stackoverflow.com/a/3210410/1320686

            Regex rgx = new Regex("[^a-zA-Z0-9 -]");
            string str = rgx.Replace("sadfasdfασδφασδασ23", "");
            
            //returns sadfasdf23
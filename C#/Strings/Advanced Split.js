        private string SliceSTR(string STR, string STR1, string STR2,int StartIndex)
        {
            try
            {

                int i1 = STR.IndexOf(STR1, StartIndex);
                if (i1 < 0) return ""; else i1 += 1;

                int i2 = STR.IndexOf(STR2, i1 + 1);
                if (i2 < 0) return "";

                return STR.Substring(i1, i2 - i1).Trim();
            }
            catch
            {
                return "";
            }
         }
         
//OR

        public string SliceSTR(string input, string startcut, string finishcut)
        {
            string ret;
            try
            {
                string[] array = input.Split(new string[] { startcut }, StringSplitOptions.None);
                string[] array2 = array[1].Split(new string[] { finishcut }, StringSplitOptions.None);
                ret = array2[0];
                
                return ret;
            }
            catch
            {
                return "";
            }
        }
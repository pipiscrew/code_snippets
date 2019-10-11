'http://www.codeproject.com/tips/62034/Wrap-a-string-to-a-given-width.aspx

public static List StringWrap(string srcStr, int maxWidth)
        {
            List lstLines = new List();
            int spcCount = 0;

            if (!string.IsNullOrEmpty(srcStr))
            {

                string[] Lines = srcStr.Split(new char[] { '\n', '\r' });
                foreach (string Line in Lines)
                {
                    string[] Words = Line.Split(' ');
                    string curLine = "";
                    foreach (var word in Words)
                    {
                        spcCount = (curLine.Length > 0 ? 1 : 0);
                        if (curLine.Length + word.Length + spcCount > maxWidth && !string.IsNullOrEmpty(curLine))
                        {

                            lstLines.Add(curLine.PadRight(maxWidth));
                            curLine = "";
                        }

                        if (word.Length <= maxWidth)
                        {
//if length of a word is <= to specified width
                            if (string.IsNullOrEmpty(curLine))
                                curLine = word;
                            else
                                curLine += " " + word;
                        }
                        else
                        {
//force a word to split if it is > to specified width
                            if (!string.IsNullOrEmpty(curLine))
                            {
                                lstLines.Add(curLine.PadRight(maxWidth));
                                curLine = "";
                            }
                            for (int j = 0; j < word.Length; j += maxWidth)
                            {
                                if (j + maxWidth < word.Length)
                                    lstLines.Add(word.Substring(j, maxWidth));
                                else
                                    lstLines.Add(word.Substring(j).PadRight(maxWidth));

                            }
                        }

                    }
                    if (!string.IsNullOrEmpty(curLine))
                    {
                        lstLines.Add(curLine.PadRight(maxWidth));
                    }
                }
            }


            return lstLines;
       }


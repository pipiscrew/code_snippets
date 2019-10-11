
        private bool ValidateTime(string inputTXT)
        {
            int len;

            try
            {
                TimeSpan.Parse(inputTXT);

                return true; 
            }
            catch
            {
                return false;
            }
        }
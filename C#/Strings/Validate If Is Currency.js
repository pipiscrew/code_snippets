        private bool ValidateCurrency(string inputTXT)
        {
            try
            {
                    Double.Parse(inputTXT);
                    return true; 
            }
            catch
            {
                return false;
            }
        }
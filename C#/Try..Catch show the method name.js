                try
                {
                   .
                   .
                   .
                   
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return;
                }
                
-OR- to show the method name!                
            catch (Exception ex)
            {
                MessageBox.Show(System.Reflection.MethodBase.GetCurrentMethod().Name + "\r\n\r\n" + ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

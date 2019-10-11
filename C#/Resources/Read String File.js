            using (Stream stream = Assembly.GetExecutingAssembly()
                               .GetManifestResourceStream("WindowsFormsApplication63.patch.dat"))
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                result = result;
            }
            
            
-OR-
            string line;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsFormsApplication63.patch.dat"))
            {
                using (StreamReader reader = new StreamReader(stream))
                {
                    while ((line = reader.ReadLine()) != null)
                    {
                        Patch.Add(line);
                    }
                }
            }
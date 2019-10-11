
            //enumerate resource names if need
            foreach (string resourceName in assembly.GetManifestResourceNames())
            {
                Console.Write(resourceName);
            }
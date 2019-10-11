byte[] assemblyBytes = File.ReadAllBytes(assemblyPath);
Assembly assembly = Assembly.Load(assemblyBytes);
assembly.GetExportedTypes();
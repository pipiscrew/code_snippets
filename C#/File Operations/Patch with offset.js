        string sourceFileName = Path.GetDirectoryName(this.txtTargetPath.Text) + @"\PDV.DLL";
        File.Copy(sourceFileName, sourceFileName + ".bak");
        FileStream stream = new FileStream(sourceFileName, FileMode.Open);
        stream.Seek(0x9c00, SeekOrigin.Begin);
        stream.WriteByte(0xc3);
        stream.Close();

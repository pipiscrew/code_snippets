//http://stackoverflow.com/a/5868931
//--http://stackoverflow.com/a/10240303
public static void SaveTree(TreeView tree, string filename)
{
    using (Stream file = File.Open(filename, FileMode.Create))
    {
        BinaryFormatter bf = new BinaryFormatter();
        bf.Serialize(file, tree.Nodes.Cast<TreeNode>().ToList());
    }
}

public static void LoadTree(TreeView tree, Stream filename)
{
  
        BinaryFormatter bf = new BinaryFormatter();
        object obj = bf.Deserialize(filename);

        TreeNode[] nodeList = (obj as IEnumerable<TreeNode>).ToArray();
        tree.Nodes.AddRange(nodeList);
    
}

//call to load, when file is @ project as embedded resource
private void read_dbschema()
{
    byte[] Buffer;
    using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("winapp1.schema.dat"))
    {
        Buffer = new byte[stream.Length];
        stream.Read(Buffer, 0, Buffer.Length);
    }

    General.LoadTree(tr, new MemoryStream(Buffer));
}

//original read without stream @ param
    public static void LoadTree(TreeView tree, string filename)
    {
        using (Stream file = File.Open(filename, FileMode.Open))
        {
            BinaryFormatter bf = new BinaryFormatter();
            object obj = bf.Deserialize(file);

            TreeNode [] nodeList = (obj as IEnumerable<TreeNode>).ToArray();
            tree.Nodes.AddRange(nodeList);
        }
    }
//main
            TreeNode[] myTreeNodeArray = new TreeNode[tr.Nodes.Count];
            tr.Nodes.CopyTo(myTreeNodeArray, 0);

            frmPHP frmP = new frmPHP(myTreeNodeArray);
            frmP.ShowDialog();
            
//child
        public frmPHP(TreeNode[] tree)
        {
            InitializeComponent();

            foreach (TreeNode item in tree)
            {
                tr.Nodes.Add((TreeNode)item.Clone());
            }
        }
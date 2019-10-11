
//loop through
        private void toolStripMenuItem2_Click(object sender, EventArgs e)
        {
            TreeModel x = (TreeModel) TR.Model;
            foreach (Node item in x.Nodes)
            {
                treeItem y = (treeItem)item;

                Console.WriteLine(y.nodeText);
            }
        }
        
        
//loop through tables + fields 
            TreeModel x = (TreeModel)TR.Model;
            foreach (Node item in x.Nodes)
            {
                //table
                treeItem y = (treeItem)item;

                table = new treeItem2(y.nodeText);

                foreach (Node item2 in item.Nodes)
                {
                    //fields
                    
                    treeItem t = (treeItem)item2;

                    table.table_fields.Add(new treeItem2fields(t.nodeText, t.fieldType, t.fieldSize, t.imageIndex==2?true:false, t.allowNull));

//                    Console.WriteLine(y.nodeText + "." + t.nodeText);
                }
            }
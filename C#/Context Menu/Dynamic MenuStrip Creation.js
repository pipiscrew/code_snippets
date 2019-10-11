//http://windowsclient.net/blogs/faqs/archive/2006/07/12/how-can-i-populate-a-toolstripdropdownitem.aspx
// populate the DropDownItems Collection
ToolStripMenuItem veggiesMenuItem = new ToolStripMenuItem("Veggies");
veggiesMenuItem.DropDownItems.Add("Asparagus");
veggiesMenuItem.DropDownItems.Add("Bok Choy");
veggiesMenuItem.DropDownItems.Add("Cauliflower");
// Hook up the handler
veggiesMenuItem.DropDownItemClicked += new ToolStripItemClickedEventHandler(myDropDownItemClicked);

// assign a dropdown
ContextMenuStrip cms = new ContextMenuStrip();
cms.Items.Add("Apples");
cms.Items.Add("Bananas");
cms.Items.Add("Cherries");

ToolStripMenuItem fruitMenuItem = new ToolStripMenuItem("Fruit");
fruitMenuItem.DropDown = cms;
// Hook up the handler
fruitMenuItem.DropDownItemClicked += new ToolStripItemClickedEventHandler(myDropDownItemClicked);

// menustrip
MenuStrip ms = new MenuStrip();
ms.Items.Add(fruitMenuItem);
ms.Items.Add(veggiesMenuItem);
this.Controls.Add(ms);
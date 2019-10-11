System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo(Application.StartupPath);

List<generic_item> lst = new List<generic_item>();
foreach (System.IO.DirectoryInfo f in dir.GetDirectories())
{
    lst.Add(new generic_item(f.Name, f.CreationTime.ToString("yyyy-MM-dd.HHmmss"), f.LastWriteTime.ToString("yyyy-MM-dd.HHmmss")));
    //add_lstv_item(f.Name, f.CreationTime.ToString("yyyy-MM-dd.hhmmss"), f.LastWriteTime.ToString("yyyy-MM-dd.hhmmss"));
}

//sort
lst = lst.OrderByDescending(x => General.TypeHelper.GetPropertyValue(x, "modification")).ToList();

foreach (generic_item item in lst)
{
    add_lstv_item(item.title, item.creation, item.modification);
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ticket_helper
{
    class generic_item
    {
        public string title { get; set; }
        public string creation { get; set; }
        public string modification { get; set; }
        public string imagekey { get; set; }

        public generic_item(string title, string creation, string modification, string imagekey=null)
        {
            this.title = title;
            this.creation = creation;
            this.modification = modification;
            this.imagekey = imagekey;
        }
    }
}

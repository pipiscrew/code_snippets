            List<generic_item> lst = new List<generic_item>();

            //sort dynamic
            lst = lst.OrderByDescending(x => General.TypeHelper.GetPropertyValue(x, "modification")).ToList();

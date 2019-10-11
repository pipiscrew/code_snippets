
            CheckedListBox.CheckedItemCollection checkedOnly = lst.CheckedItems;

            if (checkedOnly.Count == 0)
            {
                General.Mes("Check something!");
                return;
            }
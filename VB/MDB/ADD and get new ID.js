Dim tmp$

Set whoRS = GetRecordSet("select top 1 * from items")

whoRS.AddNew
whoRS("eBayNO") = lstV.ListItems(lstV.ListItems.Count).Text
whoRS("eBayName") = lstV.ListItems(lstV.ListItems.Count).SubItems(1)
whoRS("eBayPrice") = lstV.ListItems(lstV.ListItems.Count).SubItems(2)
whoRS("eBayEndIn") = lstV.ListItems(lstV.ListItems.Count).SubItems(3)
whoRS("eBayExpire") = lstV.ListItems(lstV.ListItems.Count).SubItems(4)
whoRS("eBayHigher") = lstV.ListItems(lstV.ListItems.Count).SubItems(5)
whoRS("eBaySeller") = lstV.ListItems(lstV.ListItems.Count).SubItems(6)
whoRS("eBaySellerFeed") = lstV.ListItems(lstV.ListItems.Count).SubItems(7)
whoRS("LastChecked") = lstV.ListItems(lstV.ListItems.Count).SubItems(8)
whoRS("AddDate") = lstV.ListItems(lstV.ListItems.Count).SubItems(9)
whoRS("Comment") = lstV.ListItems(lstV.ListItems.Count).SubItems(10)
tmp = whoRS(0) 'ID

whoRS.Update

Set whoRS = Nothing

lstV.ListItems(lstV.ListItems.Count).Key = "A" & tmp
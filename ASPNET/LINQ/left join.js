//http://stackoverflow.com/a/23558389

            IEnumerable<dynamic> q =
                   (from c in B2BConnection.COM_DistrictsAreas
                    from p in B2BConnection.COM_Districts 
                    .Where (mapping => mapping.District_ID == c.DistrictArea_District_ID)
                    .DefaultIfEmpty() // <== makes join left join
                    select new { District_ID  = p.District_ID,District_Name = p.District_Code,  DistrictsArea_ID = c.DistrictArea_ID, Zip_Code = c.DistrictArea_ZipCode });

            if (q != null)
                return q.ToList();
            else
                return new List<dynamic>();
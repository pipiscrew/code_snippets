//mschart
//Series[0].Charttype = Doughnut
DataTable dT = db.GetDATATABLE(q);

var countries = from r in dT.AsEnumerable()
                group r by r.Field<string>("country") into grp
                select new
                {
                    country = grp.Key,
                    grandtotal = grp.Count()
                };

//chart doughnut - by country
chart_scenter.DataSource = countries;
chart_scenter.Series[0].XValueMember = "country";
chart_scenter.Series[0].YValueMembers = "grandtotal";
chart_scenter.DataBind();
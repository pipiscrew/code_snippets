var res =  ep.Where(x => (x.StartDate >= dtp1.Value) && (x.EndDate <= dtp2.Value));
 
 
dg.DataSource = res.Select(x=> new {x.StartDate, x.EndDate, x.Pra3h, x.FEK,x.Dikaiopraktikos,x.DikaiopraktikosNEW,x.Yperhmerias,x.YperhmeriasNEW }).ToList();

label3.Text = dg.Rows.Count.ToString();
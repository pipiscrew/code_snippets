//https://stackoverflow.com/a/7911703/1320686

var query =
    from s in db.Samples
    from t in s.Tests
    from r in t.Results
    where r.Status == "Available"
    select new { Sample = s.Name, Test = t.Name, Result = r };
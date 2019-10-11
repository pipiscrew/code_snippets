//http://stackoverflow.com/a/14321048
table1.GroupBy(x => x.Text).Select(x => x.First());

//before
List<dynamic> fieldValues = productCombinationFields.Where(f => f.GetType().GetProperty("FieldId").GetValue(f, null).ToString() == fieldId).
    Select(f => new
    {
        FieldValueId = f.GetType().GetProperty("FieldValueId").GetValue(f, null).ToString(),
        FieldValueOrder = (f.GetType().GetProperty("FieldValueOrder").GetValue(f, null) != null ?
            int.Parse(f.GetType().GetProperty("FieldValueOrder").GetValue(f, null).ToString()) : 0),
        FieldValueText = (f.GetType().GetProperty("FieldValueText").GetValue(f, null) != null ?
            f.GetType().GetProperty("FieldValueText").GetValue(f, null).ToString() : string.Empty),
        FieldERPCode = (f.GetType().GetProperty("FieldERPCode").GetValue(f, null) != null ?
           long.Parse(f.GetType().GetProperty("FieldERPCode").GetValue(f, null).ToString()) : 0)
    }).OrderBy(f => f.FieldValueOrder).Distinct().ToList<dynamic>();
             
//after, distinct only be FieldValueId
List<dynamic> fieldValues = productCombinationFields.Where(f => f.GetType().GetProperty("FieldId").GetValue(f, null).ToString() == fieldId).
    Select(f => new
    {
        FieldValueId = f.GetType().GetProperty("FieldValueId").GetValue(f, null).ToString(),
        FieldValueOrder = (f.GetType().GetProperty("FieldValueOrder").GetValue(f, null) != null ?
            int.Parse(f.GetType().GetProperty("FieldValueOrder").GetValue(f, null).ToString()) : 0),
        FieldValueText = (f.GetType().GetProperty("FieldValueText").GetValue(f, null) != null ?
            f.GetType().GetProperty("FieldValueText").GetValue(f, null).ToString() : string.Empty),
        FieldERPCode = (f.GetType().GetProperty("FieldERPCode").GetValue(f, null) != null ?
           long.Parse(f.GetType().GetProperty("FieldERPCode").GetValue(f, null).ToString()) : 0)
    }).GroupBy(x => x.FieldValueId).Select(x => x.First()).ToList<dynamic>();
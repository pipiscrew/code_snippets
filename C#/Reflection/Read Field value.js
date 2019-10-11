//http://stackoverflow.com/questions/4336042/how-to-reference-a-field-by-reflection

InlineReportSlot report = GetFieldValue<InlineReportSlot>(this, reportName);
or
Button button = GetFieldValue<Button>(_myClass,"button1");

public static T GetFieldValue<T>(object obj, string fieldName)
{
    if (obj == null)
        throw new ArgumentNullException("obj");

    var field = obj.GetType().GetField(fieldName, BindingFlags.Public |
                                                  BindingFlags.NonPublic |
                                                  BindingFlags.Instance);

    if (field == null)
        throw new ArgumentException("fieldName", "No such field was found.");

    if (!typeof(T).IsAssignableFrom(field.FieldType))
        throw new InvalidOperationException("Field type and requested type are not compatible.");

    return (T)field.GetValue(obj);
}



//http://stackoverflow.com/questions/1965635/c-sharp-reflection-changing-the-value-of-a-field-of-a-variable
///////////
Type typeInQuestion = typeof(TypeHidingTheField);
FieldInfo field = typeInQuestion.GetField("FieldName", BindingFlags.NonPublic | BindingFlags.Instance);
field.SetValue(instanceOfObject, newValue);


//////////
If you use .NET 3.5, you can use my open-source library, Fasterflect, to address that with the following code:

typeof(MyType).SetField("MyField", anotherObject);
When using Fasterflect, you don't have to bother with the right BindingFlags specification and the performance implication (as when using reflection).
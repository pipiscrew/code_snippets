//http://stackoverflow.com/questions/9956648/how-do-i-check-if-a-property-exists-on-a-dynamic-anonymous-type-in-c

public static bool IsPropertyExist(dynamic settings, string name)
  {
    return settings.GetType().GetProperty(name) != null;
  }
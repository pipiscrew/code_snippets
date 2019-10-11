public static bool IsReallyFuckingNullOrEmpty(this String str)
{
    if(str == null || str.Length == 0 || str.Trim().Length == 0 || str = string.Empty || str == "" || str.Trim() == "")
        return true;
    return false;
}

//of course, this will just mean I'll someday see code like

if(str != null && !string.IsNullOrEmpty(str) && !str.IsReallyFuckingNullOrEmpty)

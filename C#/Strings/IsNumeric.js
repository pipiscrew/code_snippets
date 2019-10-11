        internal static bool IsNumeric(string inpt)
        {
            bool isNum;
            int retNum;
            isNum = int.TryParse(inpt, out retNum);
            return isNum;
        }
        
        
//double
//http://support.microsoft.com/?scid=kb;en-us;329488&x=13&y=9
public static bool IsNumeric(object Expression)
{
	bool isNum;
	double retNum;
	isNum = Double.TryParse(Convert.ToString(Expression), System.Globalization.NumberStyles.Any,System.Globalization.NumberFormatInfo.InvariantInfo, out retNum );
	return isNum;
}
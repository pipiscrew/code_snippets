        //http://www.digitalnews.gr/2033/%CE%AD%CE%BB%CE%B5%CE%B3%CF%87%CE%BF%CF%82-%CE%B5%CE%B3%CE%BA%CF%85%CF%81%CF%8C%CF%84%CE%B7%CF%84%CE%B1%CF%82-%CE%B1%CF%86%CE%BC
        private bool CheckAFM(string inpAFM)
        {
            if (isNumber(inpAFM))
            {
                try
                {
                    int telestis = 2;
                    int sum = 0;
                    string afm = inpAFM;
                    for (int i = 7; i >= 0; i--)
                    {
                        sum += int.Parse(afm[i].ToString()) * telestis;
                        telestis = telestis * 2;
                    }
                    int checkDigit = int.Parse(afm[8].ToString());
                    if (sum % 11 % 10 == checkDigit)
                        return true;
                    else
                        return false;
                }
                catch
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        private bool isNumber(string param1)
        {
            Regex isNum = new Regex("[^0-9]");
            return !isNum.IsMatch(param1);
        }
        
        
//http://gsiswebservicewp7.codeplex.com/
//wp7 official application

using System;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;

namespace ElegxosMiFisikwnProswpwn
{
    static class Utilities
    {
        internal static bool ValidateAFM(string AFM)
        {
            long ypoloipo, sinolo;
            int i, j;

            if (AFM.Length != 9)
                return false;

            for (i = 2, j = 7, sinolo = 0; j >= 0; j--, i += i)
                sinolo += i * (AFM[j] - '0');
            ypoloipo = sinolo % 11;

            return (ypoloipo == 10) ? AFM[8] == '0' : (AFM[8] - '0') == ypoloipo;
        }
    }
}



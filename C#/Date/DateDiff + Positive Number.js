// TimeSpan ts = Diorganwsh_StartHmeromhnia - dtpDiorgDate.Value ;
//or
TimeSpan ts2 = Diorganwsh_StartHmeromhnia.Subtract(dtpDiorgDate.Value);

int DateDiff;

// get positiveValue
DateDiff=Math.Abs(ts2.Days);

if (DateDiff > 33 )
{
General.msg(String.Format("ΠΡΟΣΟΧΗ!\r\n\r\n Η ημερομηνία έναρξης της διοργάνωσης είναι {0} και του Excel που πάτε να εισάγετε είναι {1}",Diorganwsh_StartHmeromhnia.ToString(),dtpDiorgDate.Value.ToString()),MessageBoxButtons.OK ,MessageBoxIcon.Information );
}

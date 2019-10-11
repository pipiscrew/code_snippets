//http://www.basic4ppc.com/forum/basic4android-updates-questions/17990-question-datetime.html


Calculate the day of pregnancy
'Based on 266 days since conception. You can change the values to do the math or ask your OB/GYN
    Dim DateConcept As String
    Dim WeeksSinceConcept As Float

    DateConcept=DateTime.Date(DateTime.Add(DateTime.dateparse("12/20/2012"),0,0,-266))  '266 days before 
    WeeksSinceConcept=    Round2((DateTime.Now -DateTime.dateparse(DateConcept))/1000/60/60/24/7,2)
    Msgbox("Conception date: " & DateConcept & CRLF _
    & "Expected date of birth: 12/20/2012" & CRLF _
    & WeeksSinceConcept & " Weeks since coneption from today.","CONGRATULATIONS")
    
    
////////

Here is the complete code that will break it down in weeks, days, hours, etc.

'BELOW TO CALC WEEKS, DAYS, HIURS OF PREGNANCY FROM TODAY.
  'Based on 266 days. You can change the values or ask your OB/GYN
    Dim DateConcept As String
    Dim WeeksSinceConcept As Float
    Dim NWeeks, NDays, Nhours,Nmins,Nsecs As Float
    Dim Weeks, Days,Hours,Mins,Secs As Int
    
    DateConcept=DateTime.Date(DateTime.Add(DateTime.dateparse("12/20/2012"),0,0,-266))  '266 days before 
    WeeksSinceConcept=    (DateTime.Now -DateTime.dateparse(DateConcept))/1000/60/60/24/7
    NWeeks=WeeksSinceConcept
    Weeks=Floor(NWeeks) 
    NDays=(NWeeks-Weeks)*7  :Days=Floor(NDays)
    Nhours=(NDays-Days) * 24  :Hours=Floor(Nhours)
    Nmins=(Nhours-Hours)*60   :Mins=Floor(Nmins)
    Nsecs=(Nmins-Mins)*60          :Secs=Floor(Nsecs)
    Msgbox("Conception date: " & DateConcept & CRLF _
    & "Expected date of birth: 12/20/2012" & CRLF _
    & "Time since conception: " & Weeks & " Weeks "  & Days & " days " & Hours & " hrs " & Mins & " min " & Secs & " sec","CONGRATULATIONS")
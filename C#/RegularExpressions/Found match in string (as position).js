            Regex reg;
            MatchCollection match;
            
            reg = new Regex("<img(.*?)>");
            match = reg.Matches(HTML);

            if (match != null)
            {
                foreach (Match item in match)
                {
                    Console.WriteLine(item.Index.ToString());
                    Console.WriteLine(HTML.Substring(0,item.Index));
                }
            }
            
<p>- 2 ΠΑΡΑΒΟΛΑ (58euro ΔΗΜΟΣΙΟΥ + 2euro ΧΑΡΤΟΣΗΜΟΥ (84EURO ΜΕ ΦΟΡΟΥΣ) ΑΠΟ ΤΗΝ ΕΦΟΡΙΑ<br>- 2 ΦΩΤΟΓΡΑΦΙΕΣ ΔΙΑΒΑΤΗΡΙΟΥ (ΒΙΟΜΕΤΡΙΚΕΣ)<br>- ΤΑΥΤΟΤΗΤΑ</p>
<p>ΜΕ ΑΥΤΑ ΠΑΤΕ ΚΑΙ ΚΑΝΕΤΕ ΑΙΤΗΣΗ ΣΤΟ ΑΣΤΥΝΟΜΙΚΟ ΤΜΗΜΑ ΠΟΥ ΥΠΑΓΕΣΤΕ<br>(ΧΡΟΝΟΣ ΕΚΔΟΣΗΣ 5ΜΕΡΕΣ)<br><br><img src="E:\dow\Pipila.jpg" width="268" height="188"></p>

item.Index = 253

the substring returns 
<p>- 2 ΠΑΡΑΒΟΛΑ (58euro ΔΗΜΟΣΙΟΥ + 2euro ΧΑΡΤΟΣΗΜΟΥ (84EURO ΜΕ ΦΟΡΟΥΣ) ΑΠΟ ΤΗΝ ΕΦΟΡΙΑ<br>- 2 ΦΩΤΟΓΡΑΦΙΕΣ ΔΙΑΒΑΤΗΡΙΟΥ (ΒΙΟΜΕΤΡΙΚΕΣ)<br>- ΤΑΥΤΟΤΗΤΑ</p>
<p>ΜΕ ΑΥΤΑ ΠΑΤΕ ΚΑΙ ΚΑΝΕΤΕ ΑΙΤΗΣΗ ΣΤΟ ΑΣΤΥΝΟΜΙΚΟ ΤΜΗΜΑ ΠΟΥ ΥΠΑΓΕΣΤΕ<br>(ΧΡΟΝΟΣ ΕΚΔΟΣΗΣ 5ΜΕΡΕΣ)<br><br>


there is also the item.Length that returns the length of matching criteria
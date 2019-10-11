'Ama to file den yparxei dhmioyrgeitai automata
'Idalws kanei append ta data mas!
Open App.Path & "\conf.dat" For Append As #1
'Opens the file given by the user (for Output).
Print #1, Text1.Text & "|", Text2.Text & "|", IIf(Check1.Value, "1", "0")
'Writes the data into the file number #1
Close #1
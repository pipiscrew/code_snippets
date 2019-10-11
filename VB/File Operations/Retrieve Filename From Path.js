strResult = Right$(strToSearch, Len(strToSearch) - InStrRev(strToSearch, "\"))


'h

Regentry = Mid(Regentry, InStrRev(Regentry, "\") + 1)

            Dim reg As Regex
            reg = New Regex("<pubDate>(.*?)</description>")

            For Each m As Match In reg.Matches(sourcehtml)
                Dim reg2 As Regex
                'Parse date published
                reg2 = New Regex("<pubDate>(.*?)</pubDate>") '+.*?
                Dim match2 As Match = reg2.Match(m.Groups(0).Value)
                datePosted = Mid(match2.Groups(1).Value, 1, 17) 'match2.Groups(1).Value.Substring(0, 16)
                'Parse date published

                reg2 = New Regex(">Username(.*?)<br />(.*?)<")

                For Each m2 As Match In reg2.Matches(m.Groups(1).Value)
                    Additem(CleanUserName(m2.Groups(1).Value), CleanPassword(m2.Groups(2).Value), datePosted)
                Next
            Next
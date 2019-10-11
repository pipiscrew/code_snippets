                Items.Sort(delegate(RDDItem a, RDDItem b)
                {
                    return a.Created.CompareTo(b.Created) * -1;
                });
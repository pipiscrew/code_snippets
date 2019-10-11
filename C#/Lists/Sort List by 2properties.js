//http://blog.rapiddg.com/2009/04/sorting-a-list-of-objects-on-multiple-properties-c/
//no work? - WORKS!
                Items.Sort(delegate(RDDItem object1, RDDItem object2)
                {
                    return object1.Created.CompareTo(object2.Created) != 0
                    ? object1.Created.CompareTo(object2.Created)
                    : object1.Filename.CompareTo(object2.Filename);
                });

                
//http://stackoverflow.com/questions/289010/c-sharp-list-sort-by-x-then-y  
//**framework35              
List<SomeClass>() a;
List<SomeClass> b = a.OrderBy(x => x.x).ThenBy(x => x.y).ToList();

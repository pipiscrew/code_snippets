//http://stackoverflow.com/questions/853526/using-linq-to-remove-objects-within-a-listt


//list<t> inside list<t>
            //remove previous properties
            selected.properties.RemoveAll((x) => x.TypeName.Contains(":"));
//http://msmvps.com/blogs/andreysanches/archive/2007/04/25/how-to-find-objects-in-generics-with-list-find-method.aspx
List<ApotelesmataOmadas> Results = null;
int SearchIndex;

SearchIndex = Results.FindIndex(delegate(ApotelesmataOmadas p) { return p.SymmetoxhID == SymmetoxhOmadikhID && p.WrologioID == WrologioID && p.EidosID == KwdikosEidoys; });



//loop through items 
foreach (ApotelesmataOmadas vl in Results)
{
	foreach (Times vl2 in vl.Epidoseis)
	{
		Counter1 += vl2.Epidosh1;
		Counter2 += vl2.Epidosh2;
	} 
}

#the class
    class ApotelesmataOmadas
    {
        private string _SymmetoxhID;
        private string _WrologioID;
        private string _EidosID;
        private List<Times> _Epidoseis;

        public ApotelesmataOmadas(string SymmetoxhID,string WrologioID,string EidosID,Times Epidoseis)
        {
            _SymmetoxhID = SymmetoxhID;
            _WrologioID=WrologioID;
            _EidosID = EidosID;

            if (_Epidoseis == null)
                _Epidoseis = new List<Times>();

            _Epidoseis.Add(Epidoseis);
        }


        public string SymmetoxhID
        {
            get
            {
                return _SymmetoxhID;
            }
            set
            {
                _SymmetoxhID = value;
            }
        }

        public string WrologioID
        {
            get
            {
                return _WrologioID;
            }
            set
            {
                _WrologioID = value;
            }
        }


        public string EidosID
        {
            get
            {
                return _EidosID;
            }
            set
            {
                _EidosID = value;
            }
        }

        public List<Times> Epidoseis
        {
            get
            {
                return _Epidoseis;
            }
            set
            {
                _Epidoseis = value;
            }
        }

    }

    class Times
    {
        private TimeSpan _Epidosh1;
        private TimeSpan _Epidosh2;

        public Times(TimeSpan Epidosh1, TimeSpan Epidosh2)
        {
            _Epidosh1 = Epidosh1;
            _Epidosh2 = Epidosh2;
        }

        public TimeSpan Epidosh1
        {
            get
            {
                return _Epidosh1;
            }
            set
            {
                _Epidosh1 = value;
            }
        }

        public TimeSpan Epidosh2
        {
            get
            {
                return _Epidosh2;
            }
            set
            {
                _Epidosh2 = value;
            }
        }

    }


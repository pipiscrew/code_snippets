	private static int try_parse_int(string value){

		int number;

		bool result = int.TryParse(value, out number);

		if (result)
			return number;
		else
			return 0;
	}
	
	
	//2nd method


                if (value != stationGroupCount)
                {
                    int number;
                    bool result = Int32.TryParse(value, out number);

                    if (result)
                    {
                        if (number > 1)
                        {
                            stationGroupCount = number.ToString() + " Stations";
                        }
                        else
                        {
                            stationGroupCount = number.ToString() + " Station";
                        }

                    }
                    else
                        stationGroupCount = value;
                }
                
                
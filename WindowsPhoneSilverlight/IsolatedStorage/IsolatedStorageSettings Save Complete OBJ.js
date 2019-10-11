//http://www.windowsphonegeek.com/tips/all-about-wp7-isolated-storage-store-data-in-isolatedstoragesettings
public void SaveCompositeObject()
{
    var settings = IsolatedStorageSettings.ApplicationSettings;
    City city = new City { Name = "London", Flag = "uk.png" };
    settings.Add("city", city);
}
 
public class City
{
    public string Name
    {
        get;
        set;
    }
 
    public string Flag
    {
        get;
        set;
    }
}

#read
//Retrieve City Data
City City1;
settings.TryGetValue<City>("city", out City1);
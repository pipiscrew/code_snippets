http://3water.wordpress.com/2010/07/25/listbox-on-wp7/

//the xaml
            <ListBox Height="607" HorizontalAlignment="Left" Name="listBox1" VerticalAlignment="Top" Width="456"  SelectionChanged="listBox1_SelectionChanged">
                <ListBox.ItemTemplate>
                    <DataTemplate>
                        <StackPanel x:Name="StationListStackPanel" Orientation="Vertical" >
                            <TextBlock HorizontalAlignment="Left" Foreground="{StaticResource PhoneForegroundBrush}" FontSize="40" 
                            Text="{Binding StationName}"/>
                        </StackPanel>
                    </DataTemplate>
                </ListBox.ItemTemplate>
            </ListBox>
            
            
//the code
                string stationName;
                string stationID;

                // find the source element and retrieve the credit information                                
                foreach (XElement curElement in apiXML.Descendants("item"))
                {
                    try
                    {
                        stationID = (string)(curElement.Descendants("id").First());
                        stationName = (string)(curElement.Descendants("name").First());
                        General.stations.Add(new RadioListItem(stationName,stationID));
                    }
                    catch (FormatException)
                    {
                       MessageBox.Show("Error when download radio list");
                    }
                }

                  General.stations.Sort(
                    delegate(RadioListItem x, RadioListItem y)
                    {
                        if (x == null)
                        {
                            if (y == null) { return 0; }
                            return -1;
                        }
                        if (y == null) { return 0; }
                        return x.StationName.CompareTo(y.StationName);
                    }
                );

                listBox1.ItemsSource = General.stations;
                
//the class
using System;

namespace miRoamer.Classes
{
    public class RadioListItem
    {
        private string stationID;
        private string stationName;

        public RadioListItem(string Name,string ID)
        {
            stationID = ID;
            stationName = Name;
        }

        public string StationID
        {
            get
            {
                return stationID;
            }
            set
            {
                if (value != stationID)
                {
                    stationID = value;
                }
            }
        }

        public string StationName
        {
            get
            {
                return stationName;
            }
            set
            {
                if (value != stationName)
                {
                    stationName = value;
                }
            }
        }
    }
}

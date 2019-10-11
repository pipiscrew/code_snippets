//here with tied the listbox items with a class structure
// @ Text="{Binding StationName}"

        <Grid x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0">
            <ListBox Height="607" HorizontalAlignment="Left" Name="listBox1" VerticalAlignment="Top" Width="456">
                <ListBox.ItemTemplate>
                    <DataTemplate>
                        <StackPanel x:Name="StationListStackPanel" Orientation="Vertical" >
                            <TextBlock HorizontalAlignment="Left" Foreground="{StaticResource PhoneForegroundBrush}" FontSize="40" Text="{Binding StationName}"/>
                        </StackPanel>
                    </DataTemplate>
                </ListBox.ItemTemplate>
            </ListBox>
        </Grid>
        
//***********************************the ITEM class
using System.ComponentModel;

namespace miRoamer.Classes
{
        public class StationItem : INotifyPropertyChanged
        {
            private string stationID;
            private string stationName;
            private string stationBitrate;
            private string stationGenre;
            private string stationLocation;
            private string stationLogo;

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
                        NotifyPropertyChanged("StationID");
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
                        NotifyPropertyChanged("StationName");
                    }
                }
            }

            public string StationBitrate
            {
                get
                {
                    return stationBitrate + "kbps";
                }
                set
                {
                    if (value != stationBitrate)
                    {
                        stationBitrate = value;
                        NotifyPropertyChanged("StationBitrate");
                    }
                }
            }

            public string StationGenre
            {
                get
                {
                    return stationGenre;
                }
                set
                {
                    if (value != stationGenre)
                    {
                        stationGenre = value;
                        NotifyPropertyChanged("StationGenre");
                    }
                }
            }

            public string StationLocation
            {
                get
                {
                    return stationLocation;
                }
                set
                {
                    if (value != stationLocation)
                    {
                        stationLocation = value;
                        NotifyPropertyChanged("StationLocation");
                    }
                }
            }

            public string StationLogo
            {
                get
                {
                    return stationLogo;
                }
                set
                {
                    if (value != stationLogo)
                    {
                        stationLogo = value;
                        NotifyPropertyChanged("StationLogo");
                    }
                }
            }


            public event PropertyChangedEventHandler PropertyChanged;

            /// <summary>
            /// Constructor with full region information
            /// </summary>
            public StationItem(string idA, string nameA)
            {
                StationID = idA;
                StationName = nameA;
            }

            public StationItem(string idA, string nameA, string bitrateA, string genreA, string locationA, string logoA)
            {
                StationID = idA;
                StationName = nameA;
                StationBitrate = bitrateA;
                StationGenre = genreA;
                StationLocation = locationA;
                StationLogo = logoA;
            }

            /// <summary>
            /// Raise the PropertyChanged event and pass along the property that changed
            /// </summary>
            private void NotifyPropertyChanged(string property)
            {
                if (PropertyChanged != null)
                {
                    PropertyChanged(this, new PropertyChangedEventArgs(property));
                }
            }
        }
    }


//***********************************the LIST class
using System;
using System.Net;
using System.Windows;
using System.ComponentModel;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;

namespace miRoamer.Classes
{
    public class StationList : ObservableCollection<StationItem>
    {
        public void LoadDefaultData()
        {
            try
            {
                UriBuilder fullUri = new UriBuilder("http://beta.api.miroamer.com/v1.1/search?filter.localize_ip=1&filter.type=radio_station&auth.key=efa2676662fcb5be0dd5fea0a8e11011b649de5a&auth.id=43bfefba7783615b5a20f941aa53f6aa78f2b551fafded6&auth.device=miroamer_2_website&auth.firmware=1.0.0");

                // initialize a new WebRequest
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(fullUri.Uri);

                // set up the state object for the async request
                RequestState rs = new RequestState();
                rs.AsyncRequest = request;

                // start the asynchronous request
                request.BeginGetResponse(new AsyncCallback(FinishedAPICall), rs);

            }
            catch (Exception)
            {
                Console.WriteLine("Error (CL-LDL): Error in getting City API call");
            }

        }

        public void FinishedAPICall(IAsyncResult asyncResult)
        {

            // get the state information
            RequestState rs = (RequestState)asyncResult.AsyncState;
            HttpWebRequest request = (HttpWebRequest)rs.AsyncRequest;

            // create a temp collection for the new forecast information for each 
            // time period
            // Why don't use this? Because this is different thread
            ObservableCollection<StationItem> tempCityList = new ObservableCollection<StationItem>();

            // end the async request
            rs.AsyncResponse = (HttpWebResponse)request.EndGetResponse(asyncResult);

            Stream streamResult;
            string stationName;
            string stationID;

            try
            {
                // get the stream containing the response from the async call
                streamResult = rs.AsyncResponse.GetResponseStream();

                // load the XML
                XElement apiXML = XElement.Load(streamResult);

                // find the source element and retrieve the credit information                                
                foreach (XElement curElement in apiXML.Descendants("item"))
                {
                    try
                    {
                        stationID = (string)(curElement.Descendants("id").First());
                        stationName = (string)(curElement.Descendants("name").First());
                        tempCityList.Add(new StationItem(stationID, stationName));
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Error (RL-FAC): Error in parsing state");
                    }
                }


                // copy the data over to the main thread
                Deployment.Current.Dispatcher.BeginInvoke(() =>
                {
                    this.Clear();

                    // copy the list of forecast time periods over
                    foreach (StationItem tempItem in tempCityList)
                    {
                        this.Add(tempItem);
                    }

                    Console.WriteLine("Parsing State Finished");
                });



            }
            catch (FormatException)
            {
                // there was some kind of error processing the response from the web
                // additional error handling would normally be added here
                return;
            }

        }

        /// <summary>
        /// State information for our BeginGetResponse async call
        /// </summary>
        public class RequestState
        {
            public HttpWebRequest AsyncRequest { get; set; }
            public HttpWebResponse AsyncResponse { get; set; }
        }
    }
}


//***********************************then on a PAGE
        public static StationList stations;

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            // get the city, latitude, and longitude out of the query string             
            stations = new StationList();
            stations.LoadDefaultData();

            listBox1.ItemsSource = stations;
        }

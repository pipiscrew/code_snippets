//http://robtiffany.com/windows-phone-7/windows-phone-7-line-of-business-app-dev-network-awareness
using Microsoft.Phone.Net.NetworkInformation;

    If NetworkInterface.GetIsNetworkAvailable Then
        Me.online = True
    Else
        Me.online = False
    End If

--

using System.Net.NetworkInformation;

#app.xaml.cs
        public App()
        {
            // Phone-specific initialization
            InitializePhoneApplication();

            //out event handler to identify the Connection Status
            NetworkChange.NetworkAddressChanged += (new NetworkAddressChangedEventHandler(NetworkChange_NetworkAddressChanged));
        }
        
        private void NetworkChange_NetworkAddressChanged(object sender, EventArgs e)
        {

            bool isNetworkAvailable = NetworkInterface.GetIsNetworkAvailable();

            General.isConnected = isNetworkAvailable;
            //MessageBox.Show(General.isConnected.ToString());
        }
        
        
        
#general class
        //holds if the device is connected
        public static bool isConnected = false;

        public static bool GetIsConnectedMessageBox()
        {
            if (!isConnected)
            {
                MessageBox.Show("There is not a internet connection at the moment, please try later", "miRoamer", MessageBoxButton.OK);
                return false;
            }
            else
                return true;
        }
        
#main.xaml
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            //always on this page,because on first time init the #General.isConnected#
            //this variable changed only when the NetworkChange.NetworkAddressChanged event fired (app.xaml.cs)
            bool isNetworkAvailable = System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable();

            General.isConnected = isNetworkAvailable;
            //always on this page,because on first time init the General.isConnected

            FillMenuItems();
        }
        
then on any situation
 if (!General.GetIsConnectedMessageBox()) return;
        
        
            Microsoft.Phone.Net.NetworkInformation.NetworkInterfaceType net;
            net=Microsoft.Phone.Net.NetworkInformation.NetworkInterface.NetworkInterfaceType;
            
            switch ((int)net)
            {
                case 6:
                   MessageBox.Show("zune connected");
                    break;
                default :
                    MessageBox.Show(net.ToString());
                    break;
            }
            

from Ms.Phone.dll
public enum NetworkInterfaceType
{
    AsymmetricDsl = 0x5e,
    Atm = 0x25,
    BasicIsdn = 20,
    Ethernet = 6,
    Ethernet3Megabit = 0x1a,
    FastEthernetFx = 0x45,
    FastEthernetT = 0x3e,
    Fddi = 15,
    GenericModem = 0x30,
    GigabitEthernet = 0x75,
    HighPerformanceSerialBus = 0x90,
    IPOverAtm = 0x72,
    Isdn = 0x3f,
    Loopback = 0x18,
    MobileBroadbandCdma = 0x92,
    MobileBroadbandGsm = 0x91,
    MultiRateSymmetricDsl = 0x8f,
    None = 0,
    Ppp = 0x17,
    PrimaryIsdn = 0x15,
    RateAdaptDsl = 0x5f,
    Slip = 0x1c,
    SymmetricDsl = 0x60,
    TokenRing = 9,
    Tunnel = 0x83,
    Unknown = 1,
    VeryHighSpeedDsl = 0x61,
    Wireless80211 = 0x47
}


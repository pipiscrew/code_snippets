//http://stackoverflow.com/a/16215767

public static void Main()
{
    SerialPort mySerialPort = new SerialPort("COM1");

    mySerialPort.BaudRate = 9600;
    mySerialPort.Parity = Parity.None;
    mySerialPort.StopBits = StopBits.One;
    mySerialPort.DataBits = 8;
    mySerialPort.Handshake = Handshake.None;

    mySerialPort.DataReceived += new SerialDataReceivedEventHandler(DataReceivedHandler);

    mySerialPort.Open();

    Console.WriteLine("Press any key to continue...");
    Console.WriteLine();
    Console.ReadKey();
    mySerialPort.Close();
}

private static void DataReceivedHandler(object sender, SerialDataReceivedEventArgs e)
{
    SerialPort sp = (SerialPort)sender;
    string indata = sp.ReadExisting();
    Debug.Print("Data Received:");
    Debug.Print(indata);
}